import type { APIRoute } from 'astro';

const SYSTEM_PROMPT = `Jsi právní asistent specializovaný na zákon č. 106/1999 Sb. o svobodném přístupu k informacím v České republice. Odpovídej stručně, věcně a v češtině.`;

const ACTION_PROMPTS: Record<string, string> = {
  'suggest-authority': `Na základě popisu tématu navrhni konkrétní povinný subjekt (úřad, ministerstvo, obec apod.), na který by měl žadatel směřovat svou žádost o informace dle zákona 106/1999 Sb. Uveď název subjektu a stručně vysvětli proč. Odpověz max 2-3 větami.`,

  'check-relevance': `Posuď, zda následující žádost o informace spadá pod zákon č. 106/1999 Sb. o svobodném přístupu k informacím. Pokud ano, potvrď to. Pokud ne, vysvětli proč (např. osobní údaje, obchodní tajemství, probíhající trestní řízení). Odpověz max 2-3 větami.`,

  'improve-wording': `Přeformuluj následující žádost o informace tak, aby byla:
- Konkrétnější a přesnější
- Úředně korektní
- Srozumitelná
Zachovej původní smysl. Vrať POUZE přeformulovaný text žádosti, bez komentáře.`,
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ success: false, result: 'API klíč není nakonfigurován.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }

  let body: { action: string; text: string };
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, result: 'Neplatný požadavek.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const { action, text } = body;
  const actionPrompt = ACTION_PROMPTS[action];

  if (!actionPrompt) {
    return new Response(
      JSON.stringify({ success: false, result: 'Neznámá akce.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  if (!text?.trim()) {
    return new Response(
      JSON.stringify({ success: false, result: 'Prázdný text.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: `${actionPrompt}\n\nText žadatele:\n${text}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ success: false, result: 'Chyba při komunikaci s AI.' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const data = await response.json();
    const result = data.content?.[0]?.text ?? '';

    return new Response(
      JSON.stringify({ success: true, result }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('AI assist error:', error);
    return new Response(
      JSON.stringify({ success: false, result: 'Nepodařilo se spojit s AI službou.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
