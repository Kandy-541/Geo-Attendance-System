// QR Code generation module
// Uses qrcode.js library (https://davidshimjs.github.io/qrcodejs/)

export function generateQRCode(text, elementId) {
  // Clear existing QR code
  const element = document.getElementById(elementId);
  element.innerHTML = '';

  // Create QR code
  new QRCode(element, {
    text: text,
    width: 200,
    height: 200,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

export function displayQRCodeWithText(sessionId, elementId, displayText = null) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';

  // Create wrapper for QR and text
  const wrapper = document.createElement('div');
  wrapper.style.textAlign = 'center';

  // Create QR code container
  const qrContainer = document.createElement('div');
  qrContainer.id = `qr-${Date.now()}`;
  wrapper.appendChild(qrContainer);

  // Add text if provided
  if (displayText) {
    const text = document.createElement('p');
    text.textContent = displayText;
    text.style.marginTop = '10px';
    text.style.fontSize = '14px';
    text.style.color = '#666';
    wrapper.appendChild(text);
  }

  container.appendChild(wrapper);

  // Generate initial QR code
  generateDynamicQRCode(sessionId, qrContainer.id);
}

// Function to generate QR code with dynamic content
export function generateDynamicQRCode(sessionId, elementId) {
  // Create unique QR value using sessionId and current timestamp
  const qrText = `${sessionId}-${Date.now()}`;

  // Clear existing QR code
  const element = document.getElementById(elementId);
  element.innerHTML = '';

  // Create QR code
  new QRCode(element, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Utility to download QR code as image
export function downloadQRCode(filename = 'qrcode.png') {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = filename;
    link.click();
  }
}
