const DRAFT_KEY = 'zadost106_draft';

interface Draft {
  type: 'fyzicka' | 'pravnicka';
  delivery: string;
  fields: Record<string, string>;
  savedAt: string;
}

const FIELD_IDS = [
  'fname', 'lname', 'dob', 'address',
  'orgname', 'ico', 'orgaddress',
  'deliveryEmail', 'deliveryAddress', 'deliveryDS',
  'authority', 'authorityAddress', 'requestText',
  'aiTopicInput',
];

function getSelectedType(): 'fyzicka' | 'pravnicka' {
  return document.querySelector('.type-option.selected')?.getAttribute('data-type') as 'fyzicka' | 'pravnicka' ?? 'fyzicka';
}

function getSelectedDelivery(): string {
  return document.querySelector('.delivery-option.selected')?.getAttribute('data-delivery') ?? 'email';
}

function collectDraft(): Draft {
  const fields: Record<string, string> = {};
  for (const id of FIELD_IDS) {
    const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
    if (el) fields[id] = el.value;
  }

  return {
    type: getSelectedType(),
    delivery: getSelectedDelivery(),
    fields,
    savedAt: new Date().toISOString(),
  };
}

function saveDraft() {
  const draft = collectDraft();
  const hasContent = Object.values(draft.fields).some((v) => v.trim().length > 0);
  if (!hasContent) return;

  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  showDraftStatus('Koncept uložen');
}

function loadDraft(): Draft | null {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Draft;
  } catch {
    return null;
  }
}

function restoreDraft(draft: Draft) {
  // Restore type selection
  const typeBtn = document.querySelector(`.type-option[data-type="${draft.type}"]`) as HTMLElement | null;
  if (typeBtn) typeBtn.click();

  // Restore delivery selection
  const deliveryBtn = document.querySelector(`.delivery-option[data-delivery="${draft.delivery}"]`) as HTMLElement | null;
  if (deliveryBtn) deliveryBtn.click();

  // Restore field values
  for (const [id, value] of Object.entries(draft.fields)) {
    const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
    if (el) el.value = value;
  }
}

function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
  showDraftStatus('Koncept smazán');
}

function showDraftStatus(message: string) {
  const status = document.getElementById('draftStatus');
  if (!status) return;
  status.textContent = message;
  status.classList.add('visible');
  setTimeout(() => status.classList.remove('visible'), 2000);
}

function formatDraftTime(iso: string): string {
  const d = new Date(iso);
  return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// Auto-save on field changes (debounced)
let saveTimeout: ReturnType<typeof setTimeout>;

function setupAutoSave() {
  for (const id of FIELD_IDS) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(saveDraft, 1500);
      });
    }
  }
}

// Load draft on page init
function initDraft() {
  const draft = loadDraft();
  const banner = document.getElementById('draftBanner');

  if (draft && banner) {
    const time = formatDraftTime(draft.savedAt);
    const msg = banner.querySelector('.draft-banner__text') as HTMLElement;
    if (msg) msg.textContent = `Máte rozpracovaný koncept z ${time}`;
    banner.classList.add('visible');

    document.getElementById('draftRestore')?.addEventListener('click', () => {
      restoreDraft(draft);
      banner.classList.remove('visible');
      showDraftStatus('Koncept obnoven');
    });

    document.getElementById('draftDiscard')?.addEventListener('click', () => {
      clearDraft();
      banner.classList.remove('visible');
    });
  }

  // Manual save/clear buttons
  document.getElementById('saveDraftBtn')?.addEventListener('click', saveDraft);
  document.getElementById('clearDraftBtn')?.addEventListener('click', () => {
    if (confirm('Opravdu chcete smazat uložený koncept?')) {
      clearDraft();
    }
  });

  setupAutoSave();
}

initDraft();
