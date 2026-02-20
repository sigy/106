interface Template {
  id: string;
  title: string;
  desc: string;
  authority: string;
  authorityAddress: string;
  requestText: string;
}

const TEMPLATES: Template[] = [
  {
    id: 'rozpocet-obce',
    title: 'Rozpočet obce',
    desc: 'Informace o hospodaření obce – příjmy, výdaje, investice',
    authority: '',
    authorityAddress: '',
    requestText: 'Žádám o poskytnutí informace o schváleném rozpočtu obce pro rok 2025, včetně:\n\n1. Celkových příjmů a výdajů\n2. Rozpisu investičních akcí a jejich plánovaných nákladů\n3. Výše dotací přijatých od státu a kraje',
  },
  {
    id: 'platy-vedeni',
    title: 'Platy vedení',
    desc: 'Odměny a platy vedoucích pracovníků veřejné instituce',
    authority: '',
    authorityAddress: '',
    requestText: 'Žádám o poskytnutí informace o platech a odměnách vedoucích pracovníků Vašeho úřadu za rok 2024, konkrétně:\n\n1. Hrubé měsíční platy vedoucích odborů\n2. Mimořádné odměny vyplacené v roce 2024\n3. Celkové osobní náklady na vedoucí pracovníky',
  },
  {
    id: 'verejne-zakazky',
    title: 'Veřejné zakázky',
    desc: 'Informace o zadaných veřejných zakázkách',
    authority: '',
    authorityAddress: '',
    requestText: 'Žádám o poskytnutí informací o veřejných zakázkách zadaných Vaším úřadem v roce 2024:\n\n1. Seznam všech veřejných zakázek s hodnotou nad 500 000 Kč\n2. Názvy vítězných dodavatelů a vysoutěžené ceny\n3. Počet nabídek podaných v jednotlivých řízeních',
  },
  {
    id: 'stavebni-rizeni',
    title: 'Stavební řízení',
    desc: 'Informace o konkrétním stavebním záměru',
    authority: '',
    authorityAddress: '',
    requestText: 'Žádám o poskytnutí informací týkajících se stavebního řízení k záměru [doplňte název/adresu stavby]:\n\n1. Datum podání žádosti o stavební povolení\n2. Aktuální stav řízení\n3. Kopii rozhodnutí, pokud bylo vydáno',
  },
  {
    id: 'dotace',
    title: 'Dotace a granty',
    desc: 'Informace o poskytnutých dotacích',
    authority: '',
    authorityAddress: '',
    requestText: 'Žádám o poskytnutí informací o dotacích poskytnutých Vaším úřadem v roce 2024:\n\n1. Seznam příjemců dotací a výše poskytnutých částek\n2. Účel, na který byly dotace poskytnuty\n3. Informace o tom, zda bylo provedeno vyúčtování dotací',
  },
  {
    id: 'zivotni-prostredi',
    title: 'Životní prostředí',
    desc: 'Informace o stavu životního prostředí v okolí',
    authority: '',
    authorityAddress: '',
    requestText: 'Žádám o poskytnutí informací o stavu životního prostředí v katastrálním území [doplňte název]:\n\n1. Výsledky měření kvality ovzduší za poslední rok\n2. Seznam provozoven s povolením k vypouštění znečišťujících látek\n3. Informace o plánovaných opatřeních ke zlepšení kvality životního prostředí',
  },
];

function initTemplates() {
  const picker = document.getElementById('templatePicker');
  const overlay = document.getElementById('templateOverlay');
  const openBtn = document.getElementById('openTemplatesBtn');

  if (!picker || !overlay || !openBtn) return;

  // Build template cards
  const list = picker.querySelector('.template-picker__list');
  if (!list) return;

  for (const t of TEMPLATES) {
    const card = document.createElement('button');
    card.className = 'template-card';
    card.dataset.templateId = t.id;

    const title = document.createElement('span');
    title.className = 'template-card__title';
    title.textContent = t.title;

    const desc = document.createElement('span');
    desc.className = 'template-card__desc';
    desc.textContent = t.desc;

    card.appendChild(title);
    card.appendChild(desc);
    list.appendChild(card);
  }

  // Open
  openBtn.addEventListener('click', () => {
    overlay.classList.add('visible');
    picker.classList.add('visible');
  });

  // Close
  overlay.addEventListener('click', () => {
    overlay.classList.remove('visible');
    picker.classList.remove('visible');
  });

  document.getElementById('closeTemplatesBtn')?.addEventListener('click', () => {
    overlay.classList.remove('visible');
    picker.classList.remove('visible');
  });

  // Select template
  list.addEventListener('click', (e) => {
    const card = (e.target as HTMLElement).closest('[data-template-id]');
    if (!card) return;

    const id = card.getAttribute('data-template-id');
    const template = TEMPLATES.find((t) => t.id === id);
    if (!template) return;

    // Fill form fields
    const requestText = document.getElementById('requestText') as HTMLTextAreaElement | null;
    if (requestText) requestText.value = template.requestText;

    if (template.authority) {
      const authority = document.getElementById('authority') as HTMLInputElement | null;
      if (authority) authority.value = template.authority;
    }

    if (template.authorityAddress) {
      const addr = document.getElementById('authorityAddress') as HTMLInputElement | null;
      if (addr) addr.value = template.authorityAddress;
    }

    // Close picker
    overlay.classList.remove('visible');
    picker.classList.remove('visible');
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && picker.classList.contains('visible')) {
      overlay.classList.remove('visible');
      picker.classList.remove('visible');
    }
  });
}

initTemplates();
