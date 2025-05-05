const { createCanvas } = require('canvas');

// Generate a placeholder hero background image
const canvas = createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, '#2563eb');
gradient.addColorStop(1, '#1e40af');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Add some abstract tech-looking elements
ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
ctx.lineWidth = 2;

// Grid lines
for (let i = 0; i < canvas.width; i += 50) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(i, canvas.height);
  ctx.stroke();
}

for (let i = 0; i < canvas.height; i += 50) {
  ctx.beginPath();
  ctx.moveTo(0, i);
  ctx.lineTo(canvas.width, i);
  ctx.stroke();
}

// Add some circles and dots
for (let i = 0; i < 50; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 30 + 5;
  
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
  ctx.stroke();
}

// Add some connecting lines
ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
ctx.lineWidth = 1;
for (let i = 0; i < 30; i++) {
  const x1 = Math.random() * canvas.width;
  const y1 = Math.random() * canvas.height;
  const x2 = Math.random() * canvas.width;
  const y2 = Math.random() * canvas.height;
  
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// Export the canvas as a PNG buffer
const fs = require('fs');
const out = fs.createWriteStream(__dirname + '/../images/hero-bg.jpg');
const stream = canvas.createJPEGStream({
  quality: 0.95
});
stream.pipe(out);
out.on('finish', () => console.log('Hero background image created successfully!'));
