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

    if (!response.ok) {
      return { result: '', success: false };
    }

    return await response.json() as AiResponse;
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

function showFeedback(
  feedbackEl: HTMLElement,
  titleEl: HTMLElement,
  descEl: HTMLElement,
  title: string,
  desc: string,
  type: 'success' | 'error',
) {
  feedbackEl.classList.remove('success', 'error');
  feedbackEl.classList.add('visible', type);
  titleEl.textContent = title;
  descEl.textContent = desc;
}

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

// Undo AI text - stores original before AI modifies it
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

// Fallback tips when AI is not available
const FALLBACK_TIPS = {
  'suggest-authority': 'Pro dotazy o obci se obraťte na obecní/městský úřad. Pro ministerstva na příslušné ministerstvo podle tématu. Pro kraje na krajský úřad.',
  'check-relevance': 'Zákon 106 pokrývá informace o činnosti povinných subjektů. Nepokrývá osobní údaje třetích osob, obchodní tajemství ani utajované informace.',
  'improve-wording': 'Tip: Buďte konkrétní – uveďte přesné období, subjekt a typ informace. Vyhněte se obecným formulacím.',
};

// Suggest authority (Step 3)
document.getElementById('suggestAuthorityBtn')?.addEventListener('click', async () => {
  const btn = document.getElementById('suggestAuthorityBtn') as HTMLButtonElement;
  const topic = (document.getElementById('aiTopicInput') as HTMLTextAreaElement).value;
  const feedbackEl = document.getElementById('suggestFeedback')!;
  const titleEl = document.getElementById('suggestFeedbackTitle')!;
  const descEl = document.getElementById('suggestFeedbackDesc')!;

  if (!topic.trim()) {
    showFeedback(feedbackEl, titleEl, descEl, 'Zadejte téma', 'Popište, o jaké informace máte zájem, a my vám navrhneme správný úřad.', 'error');
    return;
  }

  setLoading(btn, true);
  const response = await callAiAssist('suggest-authority', topic);
  setLoading(btn, false);

  if (response.success && response.result) {
    showFeedback(feedbackEl, titleEl, descEl, 'Doporučený úřad', response.result, 'success');
  } else {
    showFeedback(feedbackEl, titleEl, descEl, 'AI nápověda není dostupná', FALLBACK_TIPS['suggest-authority'], 'error');
  }
});

// Check relevance (Step 4)
document.getElementById('checkRelevanceBtn')?.addEventListener('click', async () => {
  const btn = document.getElementById('checkRelevanceBtn') as HTMLButtonElement;
  const text = (document.getElementById('requestText') as HTMLTextAreaElement).value;
  const feedbackEl = document.getElementById('relevanceFeedback')!;
  const titleEl = document.getElementById('relevanceFeedbackTitle')!;
  const descEl = document.getElementById('relevanceFeedbackDesc')!;

  if (!text.trim()) {
    showFeedback(feedbackEl, titleEl, descEl, 'Zadejte text žádosti', 'Nejprve napište, jaké informace požadujete.', 'error');
    return;
  }

  setLoading(btn, true);
  const response = await callAiAssist('check-relevance', text);
  setLoading(btn, false);

  if (response.success && response.result) {
    const isRelevant = response.result.toLowerCase().includes('relevantní') || response.result.toLowerCase().includes('spadá');
    showFeedback(
      feedbackEl, titleEl, descEl,
      isRelevant ? 'Žádost je relevantní' : 'Upozornění',
      response.result,
      isRelevant ? 'success' : 'error',
    );
  } else {
    showFeedback(feedbackEl, titleEl, descEl, 'AI kontrola není dostupná', FALLBACK_TIPS['check-relevance'], 'error');
  }
});

// Improve wording (Step 4)
document.getElementById('improveWordingBtn')?.addEventListener('click', async () => {
  const btn = document.getElementById('improveWordingBtn') as HTMLButtonElement;
  const textarea = document.getElementById('requestText') as HTMLTextAreaElement;
  const text = textarea.value;

  if (!text.trim()) {
    const feedbackEl = document.getElementById('relevanceFeedback')!;
    const titleEl = document.getElementById('relevanceFeedbackTitle')!;
    const descEl = document.getElementById('relevanceFeedbackDesc')!;
    showFeedback(feedbackEl, titleEl, descEl, 'Zadejte text žádosti', 'Nejprve napište, jaké informace požadujete.', 'error');
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
    const feedbackEl = document.getElementById('relevanceFeedback')!;
    const titleEl = document.getElementById('relevanceFeedbackTitle')!;
    const descEl = document.getElementById('relevanceFeedbackDesc')!;
    showFeedback(feedbackEl, titleEl, descEl, 'Formulace vylepšena', 'Text žádosti byl přeformulován pro lepší srozumitelnost a úřední korektnost.', 'success');
  } else {
    const feedbackEl = document.getElementById('relevanceFeedback')!;
    const titleEl = document.getElementById('relevanceFeedbackTitle')!;
    const descEl = document.getElementById('relevanceFeedbackDesc')!;
    showFeedback(feedbackEl, titleEl, descEl, 'AI vylepšení není dostupné', FALLBACK_TIPS['improve-wording'], 'error');
  }
});
