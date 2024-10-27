export default function createPlusInCircleIcon(size = 24) {
    const canvas = document.createElement('canvas');
    const originalSize = 24; // Original SVG viewBox size
    const newSize = size; // Desired canvas size

    // Set canvas dimensions
    canvas.width = newSize;
    canvas.height = newSize;

    const ctx = canvas.getContext('2d');

    // Scaling factor to adjust the original SVG to the new canvas size
    const scale = newSize / originalSize;

    // Draw the green circle
    ctx.beginPath();
    ctx.arc(12 * scale, 12 * scale, 10 * scale, 0, 2 * Math.PI);
    ctx.fillStyle = '#5C815C'; // Circle color
    ctx.fill();
    ctx.closePath();

    // Draw the white plus sign
    ctx.beginPath();
    ctx.fillStyle = '#fff'; // Plus color

    // Vertical line of the plus
    ctx.fillRect(11 * scale, 6 * scale, 2 * scale, 12 * scale);

    // Horizontal line of the plus
    ctx.fillRect(6 * scale, 11 * scale, 12 * scale, 2 * scale);

    ctx.closePath();

    return canvas.toDataURL('image/png');
}
