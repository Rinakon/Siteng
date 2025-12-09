function createSnowflakes() {
  const container = document.getElementById('snowflakes');
  const count = 120;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');

    const size = Math.random() * 5 + 2;
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.opacity = Math.random() * 0.5 + 0.4;

    const duration = Math.random() * 6 + 6;
    const delay = Math.random() * 5;
    flake.style.animation = `fall ${duration}s ${delay}s linear infinite`;

    container.appendChild(flake);
  }

  if (!document.getElementById('snow-style')) {
    const style = document.createElement('style');
    style.id = 'snow-style';
    style.textContent = `
      @keyframes fall {
        0% { transform: translateY(-10px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 0.8; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

window.addEventListener('load', createSnowflakes);
