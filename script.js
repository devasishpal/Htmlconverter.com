const htmlInput = document.getElementById('html');
const cssInput = document.getElementById('css');
const jsInput = document.getElementById('js');
const preview = document.getElementById('preview');

function updatePreview() {
  const html = htmlInput.value;
  const css = cssInput.value;
  const js = jsInput.value;
  const output = `<html><head><style>${css}</style></head><body>${html}<script>${js}<\/script></body></html>`;
  preview.srcdoc = output;
}

htmlInput.addEventListener('input', updatePreview);
cssInput.addEventListener('input', updatePreview);
jsInput.addEventListener('input', updatePreview);
updatePreview();

function download() {
  const blob = new Blob([preview.srcdoc], { type: 'text/html' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'preview.html';
  a.click();
}

function copy() {
  navigator.clipboard.writeText(preview.srcdoc);
  alert('HTML copied to clipboard!');
}
