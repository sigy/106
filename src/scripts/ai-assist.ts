interface AiResponse {
  result: string;
  success: boolean;
}

async function callAiAssist(action: string, text: string): Promise<AiResponse> {
  try {
    const response = await fetch('/api/assist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, text }),
    });

    const data = await response.json() as AiResponse;
    return data;
  } catch {
    return { result: '', success: false };
  }
}

function setLoading(btn: HTMLButtonElement, loading: boolean) {
  btn.disabled = loading;
  if (loading) {
    btn.dataset.originalText = btn.textContent ?? '';
    btn.textContent = 'Zpracovávám...';
  } else {
    btn.textContent = btn.dataset.originalText ?? btn.textContent;
  }
}

interface FeedbackGroup {
  el: HTMLElement;
  title: HTMLElement;
  desc: HTMLElement;
}

function getFeedback(prefix: string): FeedbackGroup | null {
  const el = document.getElementById(`${prefix}Feedback`);
  const title = document.getElementById(`${prefix}FeedbackTitle`);
  const desc = document.getElementById(`${prefix}FeedbackDesc`);
  if (!el || !title || !desc) return null;
  return { el, title, desc };
}

function showFeedback(fb: FeedbackGroup, title: string, desc: string, type: 'success' | 'error') {
  fb.el.classList.remove('success', 'error');
  fb.el.classList.add('visible', type);
  fb.title.textContent = title;
  fb.desc.textContent = desc;
}

// Resolve feedback groups once
const suggestFb = getFeedback('suggest');
const relevanceFb = getFeedback('relevance');

// Character counter
const requestTextarea = document.getElementById('requestText') as HTMLTextAreaElement | null;
const charCounter = document.getElementById('charCounter');

function updateCharCounter() {
  if (!requestTextarea || !charCounter) return;
  const len = requestTextarea.value.length;
  charCounter.textContent = `${len} ${len === 1 ? 'znak' : len >= 2 && len <= 4 ? 'znaky' : 'znaků'}`;
}

requestTextarea?.addEventListener('input', updateCharCounter);
updateCharCounter();

// Undo AI text
let originalRequestText: string | null = null;
const undoAiBtn = document.getElementById('undoAiBtn') as HTMLButtonElement | null;

undoAiBtn?.addEventListener('click', () => {
  if (originalRequestText !== null && requestTextarea) {
    requestTextarea.value = originalRequestText;
    originalRequestText = null;
    undoAiBtn.style.display = 'none';
    updateCharCounter();
  }
});

// Fallback tips
const FALLBACK_TIPS = {
  'suggest-authority': 'Pro dotazy o obci se obraťte na obecní/městský úřad. Pro ministerstva na příslušné ministerstvo podle tématu. Pro kraje na krajský úřad.',
  'check-relevance': 'Zákon 106 pokrývá informace o činnosti povinných subjektů. Nepokrývá osobní údaje třetích osob, obchodní tajemství ani utajované informace.',
  'improve-wording': 'Tip: Buďte konkrétní – uveďte přesné období, subjekt a typ informace. Vyhněte se obecným formulacím.',
};

// Suggest authority (Step 3)
document.getElementById('suggestAuthorityBtn')?.addEventListener('click', async () => {
  const btn = document.getElementById('suggestAuthorityBtn') as HTMLButtonElement;
  const topic = (document.getElementById('aiTopicInput') as HTMLTextAreaElement).value;
  if (!suggestFb) return;

  if (!topic.trim()) {
    showFeedback(suggestFb, 'Zadejte téma', 'Popište, o jaké informace máte zájem, a my vám navrhneme správný úřad.', 'error');
    return;
  }

  setLoading(btn, true);
  const response = await callAiAssist('suggest-authority', topic);
  setLoading(btn, false);

  if (response.success && response.result) {
    showFeedback(suggestFb, 'Doporučený úřad', response.result, 'success');
  } else {
    showFeedback(suggestFb, 'AI nápověda není dostupná', FALLBACK_TIPS['suggest-authority'], 'error');
  }
});

// Check relevance (Step 4)
document.getElementById('checkRelevanceBtn')?.addEventListener('click', async () => {
  const btn = document.getElementById('checkRelevanceBtn') as HTMLButtonElement;
  const text = (document.getElementById('requestText') as HTMLTextAreaElement).value;
  if (!relevanceFb) return;

  if (!text.trim()) {
    showFeedback(relevanceFb, 'Zadejte text žádosti', 'Nejprve napište, jaké informace požadujete.', 'error');
    return;
  }

  setLoading(btn, true);
  const response = await callAiAssist('check-relevance', text);
  setLoading(btn, false);

  if (response.success && response.result) {
    const isRelevant = response.result.toLowerCase().includes('relevantní') || response.result.toLowerCase().includes('spadá');
    showFeedback(
      relevanceFb,
      isRelevant ? 'Žádost je relevantní' : 'Upozornění',
      response.result,
      isRelevant ? 'success' : 'error',
    );
  } else {
    showFeedback(relevanceFb, 'AI kontrola není dostupná', FALLBACK_TIPS['check-relevance'], 'error');
  }
});

// Improve wording (Step 4)
document.getElementById('improveWordingBtn')?.addEventListener('click', async () => {
  const btn = document.getElementById('improveWordingBtn') as HTMLButtonElement;
  const textarea = document.getElementById('requestText') as HTMLTextAreaElement;
  const text = textarea.value;
  if (!relevanceFb) return;

  if (!text.trim()) {
    showFeedback(relevanceFb, 'Zadejte text žádosti', 'Nejprve napište, jaké informace požadujete.', 'error');
    return;
  }

  setLoading(btn, true);
  const response = await callAiAssist('improve-wording', text);
  setLoading(btn, false);

  if (response.success && response.result) {
    originalRequestText = text;
    textarea.value = response.result;
    if (undoAiBtn) undoAiBtn.style.display = '';
    updateCharCounter();
    showFeedback(relevanceFb, 'Formulace vylepšena', 'Text žádosti byl přeformulován pro lepší srozumitelnost a úřední korektnost.', 'success');
  } else {
    showFeedback(relevanceFb, 'AI vylepšení není dostupné', FALLBACK_TIPS['improve-wording'], 'error');
  }
});
