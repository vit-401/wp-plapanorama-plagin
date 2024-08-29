export default function createCircleWithBorder() {
  const canvas = document.createElement('canvas');
  const size = 100; // Adjust this size as needed
  const borderWidth = 10; // Border width

  // Set canvas dimensions
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');

  // Draw the outer circle (the border)
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, (size / 2) - borderWidth, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fillStyle = 'white';
  ctx.fill();

  // Draw the inner circle (empty space)
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, (size / 2) - borderWidth * 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();

  // Return the PNG data URL
  return canvas.toDataURL('image/png');
}



