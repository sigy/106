const TOTAL_STEPS = 5;
let currentStep = 1;

function getEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element #${id} not found`);
  return el as T;
}

function updateProgress() {
  const segments = document.querySelectorAll('.progress-bar__segment');
  segments.forEach((seg, i) => {
    seg.classList.toggle('active', i < currentStep);
  });

  const label = getEl<HTMLParagraphElement>('stepLabel');
  label.textContent = `Krok ${currentStep} z ${TOTAL_STEPS}`;
  label.classList.toggle('complete', currentStep === TOTAL_STEPS);

  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.setAttribute('aria-valuenow', String(currentStep));
  }
}

function showStep(step: number) {
  document.querySelectorAll('.step').forEach((el) => {
    el.classList.remove('active');
    el.setAttribute('aria-hidden', 'true');
  });
  const target = document.getElementById(`step-${step}`);
  if (target) {
    target.classList.add('active');
    target.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const heading = target.querySelector<HTMLElement>('.step__title');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  }
  currentStep = step;
  updateProgress();

  const announcer = document.getElementById('srAnnouncer');
  if (announcer) {
    announcer.textContent = `Krok ${step} z ${TOTAL_STEPS}`;
  }

  if (step === TOTAL_STEPS) {
    renderPreview();
  }
}

// Validation
function validateStep(step: number): boolean {
  const stepEl = document.getElementById(`step-${step}`);
  if (!stepEl) return true;

  let fields: NodeListOf<HTMLElement>;
  if (step === 2) {
    const isFyzicka = document.querySelector('.type-option.selected')?.getAttribute('data-type') === 'fyzicka';
    const activeFieldsId = isFyzicka ? 'fields-fyzicka' : 'fields-pravnicka';
    const delivery = document.querySelector('.delivery-option.selected')?.getAttribute('data-delivery') ?? 'email';
    const deliveryFieldId = `field-${delivery}`;

    const personFields = document.getElementById(activeFieldsId)?.querySelectorAll<HTMLElement>('[data-validate]') ?? [];
    const deliveryField = document.getElementById(deliveryFieldId)?.closest<HTMLElement>('[data-validate]');

    fields = personFields as NodeListOf<HTMLElement>;

    let allValid = validateFields(fields);
    if (deliveryField) {
      if (!validateField(deliveryField)) allValid = false;
    }
    return allValid;
  }

  fields = stepEl.querySelectorAll<HTMLElement>('[data-validate]');
  return validateFields(fields);
}

function validateFields(fields: NodeListOf<HTMLElement> | HTMLElement[]): boolean {
  let allValid = true;
  for (const field of fields) {
    if (!validateField(field)) allValid = false;
  }
  return allValid;
}

function validateField(field: HTMLElement): boolean {
  const input = field.querySelector<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
  if (!input) return true;

  const rule = field.dataset.validate;
  let valid = true;

  if (rule === 'required') {
    valid = input.value.trim().length > 0;
  } else if (rule === 'email') {
    valid = input.value.trim().length === 0 || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    if (field.style.display !== 'none' && field.offsetParent !== null) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
    }
  }

  field.classList.toggle('has-error', !valid);

  if (!valid) {
    input.addEventListener('input', function handler() {
      field.classList.remove('has-error');
      input.removeEventListener('input', handler);
    });
  }

  return valid;
}

// Navigation
document.querySelectorAll('[data-next]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (currentStep < TOTAL_STEPS && validateStep(currentStep)) {
      showStep(currentStep + 1);
    }
  });
});

document.querySelectorAll('[data-prev]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (currentStep > 1) {
      showStep(currentStep - 1);
    }
  });
});

// Type selector with ARIA
document.querySelectorAll('.type-option').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.type-option').forEach((b) => {
      b.classList.remove('selected');
      b.setAttribute('aria-checked', 'false');
    });
    btn.classList.add('selected');
    btn.setAttribute('aria-checked', 'true');

    const type = (btn as HTMLElement).dataset.type;
    const fyzickaFields = getEl<HTMLDivElement>('fields-fyzicka');
    const pravnickaFields = getEl<HTMLDivElement>('fields-pravnicka');

    if (type === 'fyzicka') {
      fyzickaFields.style.display = '';
      pravnickaFields.style.display = 'none';
    } else {
      fyzickaFields.style.display = 'none';
      pravnickaFields.style.display = '';
    }
  });
});

// Delivery option selector with ARIA
document.querySelectorAll('.delivery-option').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.delivery-option').forEach((b) => {
      b.classList.remove('selected');
      b.setAttribute('aria-checked', 'false');
    });
    btn.classList.add('selected');
    btn.setAttribute('aria-checked', 'true');

    const delivery = (btn as HTMLElement).dataset.delivery;
    getEl<HTMLDivElement>('field-email').style.display = delivery === 'email' ? '' : 'none';
    getEl<HTMLDivElement>('field-post').style.display = delivery === 'post' ? '' : 'none';
    getEl<HTMLDivElement>('field-datovka').style.display = delivery === 'datovka' ? '' : 'none';
  });
});

// Form data types
interface FyzickaFormData {
  type: 'fyzicka';
  name: string;
  dob: string;
  address: string;
  delivery: string;
  deliveryDetail: string;
  authority: string;
  authorityAddress: string;
  requestText: string;
}

interface PravnickaFormData {
  type: 'pravnicka';
  name: string;
  ico: string;
  address: string;
  delivery: string;
  deliveryDetail: string;
  authority: string;
  authorityAddress: string;
  requestText: string;
}

type FormData = FyzickaFormData | PravnickaFormData;

function getFormData(): FormData {
  const isFyzicka = document.querySelector('.type-option.selected')?.getAttribute('data-type') === 'fyzicka';
  const delivery = document.querySelector('.delivery-option.selected')?.getAttribute('data-delivery') ?? 'email';

  if (isFyzicka) {
    return {
      type: 'fyzicka',
      name: `${getEl<HTMLInputElement>('fname').value} ${getEl<HTMLInputElement>('lname').value}`,
      dob: getEl<HTMLInputElement>('dob').value,
      address: getEl<HTMLInputElement>('address').value,
      delivery,
      deliveryDetail: getDeliveryDetail(delivery),
      authority: getEl<HTMLInputElement>('authority').value,
      authorityAddress: getEl<HTMLInputElement>('authorityAddress').value,
      requestText: getEl<HTMLTextAreaElement>('requestText').value,
    };
  }

  return {
    type: 'pravnicka',
    name: getEl<HTMLInputElement>('orgname').value,
    ico: getEl<HTMLInputElement>('ico').value,
    address: getEl<HTMLInputElement>('orgaddress').value,
    delivery,
    deliveryDetail: getDeliveryDetail(delivery),
    authority: getEl<HTMLInputElement>('authority').value,
    authorityAddress: getEl<HTMLInputElement>('authorityAddress').value,
    requestText: getEl<HTMLTextAreaElement>('requestText').value,
  };
}

function getDeliveryDetail(delivery: string): string {
  switch (delivery) {
    case 'email': return getEl<HTMLInputElement>('deliveryEmail').value;
    case 'post': return getEl<HTMLInputElement>('deliveryAddress').value;
    case 'datovka': return getEl<HTMLInputElement>('deliveryDS').value;
    default: return '';
  }
}

function getDeliveryText(delivery: string, detail: string): string {
  switch (delivery) {
    case 'email': return `Informace žádám zaslat na emailovou adresu: ${detail}`;
    case 'post': return `Informace žádám zaslat poštou na adresu: ${detail}`;
    case 'datovka': return `Informace žádám zaslat do datové schránky: ${detail}`;
    default: return '';
  }
}

function formatDate(): string {
  const now = new Date();
  const months = [
    'ledna', 'února', 'března', 'dubna', 'května', 'června',
    'července', 'srpna', 'září', 'října', 'listopadu', 'prosince',
  ];
  return `${now.getDate()}. ${months[now.getMonth()]} ${now.getFullYear()}`;
}

function extractCity(address: string): string {
  const parts = address.split(',').map((s) => s.trim());
  if (parts.length >= 2) {
    const last = parts[parts.length - 1];
    return last.replace(/^\d{3}\s?\d{2}\s*/, '').trim() || 'Praze';
  }
  return 'Praze';
}

function getDateLine(): string {
  const data = getFormData();
  const city = extractCity(data.address);
  return `V ${city} dne ${formatDate()}`;
}

function generateRequestText(): string {
  const data = getFormData();
  const deliveryLine = data.deliveryDetail ? `\n\n${getDeliveryText(data.delivery, data.deliveryDetail)}` : '';

  let senderBlock: string;
  if (data.type === 'fyzicka') {
    senderBlock = `${data.name}\nnar. ${data.dob}\n${data.address}`;
  } else {
    senderBlock = `${data.name}\nIČO: ${data.ico}\n${data.address}`;
  }

  return `${data.authority}${data.authorityAddress ? '\n' + data.authorityAddress : ''}

Vážení,

ve smyslu zákona č. 106/1999 Sb., o svobodném přístupu k informacím, žádám o poskytnutí následujících informací:

${data.requestText}${deliveryLine}

S pozdravem
${senderBlock}`;
}

function renderPreview() {
  const body = getEl<HTMLDivElement>('previewBody');
  const date = getEl<HTMLDivElement>('previewDate');
  body.textContent = generateRequestText();
  date.textContent = getDateLine();
}

// Copy text
getEl<HTMLButtonElement>('copyTextBtn').addEventListener('click', async () => {
  const text = generateRequestText();
  try {
    await navigator.clipboard.writeText(text);
    const btn = getEl<HTMLButtonElement>('copyTextBtn');
    btn.textContent = 'Zkopírováno!';
    setTimeout(() => { btn.textContent = 'Kopírovat text'; }, 2000);
  } catch {
    alert('Nepodařilo se zkopírovat text. Zkuste to ručně.');
  }
});

// Send via email (mailto)
getEl<HTMLButtonElement>('sendEmailBtn').addEventListener('click', () => {
  const body = generateRequestText();
  const subject = encodeURIComponent('Žádost o informace dle zákona č. 106/1999 Sb.');
  const encodedBody = encodeURIComponent(body + `\n\n${getDateLine()}`);
  window.location.href = `mailto:?subject=${subject}&body=${encodedBody}`;
});

// Expose for PDF generator and AI assist
interface WizardAPI {
  generateRequestText: () => string;
  getFormData: () => FormData;
  formatDate: () => string;
  getDateLine: () => string;
}

(window as unknown as { __wizard: WizardAPI }).__wizard = {
  generateRequestText,
  getFormData,
  formatDate,
  getDateLine,
};
