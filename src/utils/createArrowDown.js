export default function createArrowDown(size = 24) {
  const canvas = document.createElement('canvas');
  const originalSize = 24; // Original SVG viewBox size
  const newSize = size; // Desired canvas size

  // Set canvas dimensions
  canvas.width = newSize;
  canvas.height = newSize;

  const ctx = canvas.getContext('2d');

  // Scaling factor to adjust the original SVG to the new canvas size
  const scale = newSize / originalSize;

  // Begin drawing the shape with scaled coordinates
  ctx.beginPath();

  // Draw the arrow shape based on the SVG path data
  ctx.moveTo(7.41 * scale, 8.59 * scale);
  ctx.lineTo(12 * scale, 13.17 * scale);
  ctx.lineTo(16.59 * scale, 8.59 * scale);
  ctx.lineTo(18 * scale, 10 * scale);
  ctx.lineTo(12 * scale, 16 * scale);
  ctx.lineTo(6 * scale, 10 * scale);
  ctx.lineTo(7.41 * scale, 8.59 * scale);

  ctx.closePath();
  ctx.fillStyle = 'white'; // Fill color (you can change it to any color)
  ctx.fill();

  // Return the PNG data URL
  return canvas.toDataURL('image/png');
}


