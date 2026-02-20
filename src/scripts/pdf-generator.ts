import { jsPDF } from 'jspdf';

document.getElementById('downloadPdfBtn')?.addEventListener('click', () => {
  const wizard = (window as unknown as { __wizard?: { getFormData: () => any; generateRequestText: () => string; formatDate: () => string; getDateLine: () => string } }).__wizard;
  if (!wizard) return;

  const data = wizard.getFormData();
  const dateLine = wizard.getDateLine();

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginLeft = 25;
  const marginRight = 25;
  const marginTop = 30;
  const marginBottom = 25;
  const contentWidth = pageWidth - marginLeft - marginRight;
  let y = marginTop;

  function checkPage(needed: number) {
    if (y + needed > pageHeight - marginBottom) {
      doc.addPage();
      y = marginTop;
    }
  }

  // --- Header: Sender info (top-left) ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);

  let senderLines: string[];
  if (data.type === 'fyzicka') {
    senderLines = [data.name, `nar. ${data.dob}`, data.address];
  } else {
    senderLines = [data.name, `ICO: ${data.ico}`, data.address];
  }

  for (const line of senderLines) {
    doc.text(line, marginLeft, y);
    y += 4;
  }

  // Delivery info
  if (data.deliveryDetail) {
    y += 1;
    const deliveryLabels: Record<string, string> = {
      email: 'E-mail',
      post: 'Korespondenční adresa',
      datovka: 'Datová schránka',
    };
    doc.text(`${deliveryLabels[data.delivery] ?? ''}: ${data.deliveryDetail}`, marginLeft, y);
    y += 4;
  }

  y += 6;

  // --- Recipient (authority) ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(data.authority, marginLeft, y);
  y += 5;

  if (data.authorityAddress) {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    const addrLines = doc.splitTextToSize(data.authorityAddress, contentWidth);
    for (const line of addrLines) {
      doc.text(line, marginLeft, y);
      y += 4;
    }
  }

  y += 10;

  // --- Date line (right-aligned) ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(dateLine, pageWidth - marginRight, y, { align: 'right' });
  y += 10;

  // --- Title ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);
  doc.text('Žádost o poskytnutí informací', marginLeft, y);
  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('dle zákona č. 106/1999 Sb., o svobodném přístupu k informacím', marginLeft, y);
  y += 3;

  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(marginLeft, y, pageWidth - marginRight, y);
  y += 10;

  // --- Salutation ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text('Vážení,', marginLeft, y);
  y += 8;

  // --- Legal basis ---
  const legalText = 've smyslu zákona č. 106/1999 Sb., o svobodném přístupu k informacím, žádám o poskytnutí následujících informací:';
  const legalLines = doc.splitTextToSize(legalText, contentWidth);
  for (const line of legalLines) {
    checkPage(6);
    doc.text(line, marginLeft, y);
    y += 5;
  }
  y += 5;

  // --- Request body ---
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const bodyLines = doc.splitTextToSize(data.requestText, contentWidth);
  for (const line of bodyLines) {
    checkPage(6);
    doc.text(line, marginLeft, y);
    y += 5;
  }
  y += 5;

  // --- Delivery preference ---
  if (data.deliveryDetail) {
    checkPage(12);
    const deliveryTexts: Record<string, string> = {
      email: `Informace žádám zaslat na emailovou adresu: ${data.deliveryDetail}`,
      post: `Informace žádám zaslat poštou na adresu: ${data.deliveryDetail}`,
      datovka: `Informace žádám zaslat do datové schránky: ${data.deliveryDetail}`,
    };
    const deliveryLine = deliveryTexts[data.delivery] ?? '';
    const dlLines = doc.splitTextToSize(deliveryLine, contentWidth);
    for (const line of dlLines) {
      checkPage(6);
      doc.text(line, marginLeft, y);
      y += 5;
    }
    y += 5;
  }

  // --- Closing ---
  checkPage(30);
  y += 5;
  doc.text('S pozdravem', marginLeft, y);
  y += 10;

  // Signature line
  doc.setDrawColor(180, 180, 180);
  doc.setLineWidth(0.2);
  doc.line(marginLeft, y, marginLeft + 60, y);
  y += 5;

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text(data.name, marginLeft, y);

  // --- Footer on each page ---
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(160, 160, 160);
    doc.text(
      `Žádost dle zákona c. 106/1999 Sb. — Strana ${i}/${totalPages}`,
      pageWidth / 2,
      pageHeight - 12,
      { align: 'center' },
    );
  }

  doc.save('zadost-106.pdf');

  // Show success animation
  const toast = document.getElementById('draftStatus');
  if (toast) {
    toast.textContent = 'PDF úspěšně staženo';
    toast.classList.add('visible', 'success-toast');
    setTimeout(() => {
      toast.classList.remove('visible', 'success-toast');
    }, 3000);
  }
});
