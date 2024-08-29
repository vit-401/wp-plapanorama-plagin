export default function createArrowRight(size = 24) {
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

  // Draw the right-pointing arrow shape based on the SVG path data
  ctx.moveTo(8.59 * scale, 16.59 * scale);
  ctx.lineTo(13.17 * scale, 12 * scale);
  ctx.lineTo(8.59 * scale, 7.41 * scale);
  ctx.lineTo(10 * scale, 6 * scale);
  ctx.lineTo(16 * scale, 12 * scale);
  ctx.lineTo(10 * scale, 18 * scale);
  ctx.lineTo(8.59 * scale, 16.59 * scale);

  ctx.closePath();
  ctx.fillStyle = 'white'; // Fill color (you can change it to any color)
  ctx.fill();

  // Return the PNG data URL
  return canvas.toDataURL('image/png');
}


