const texts = ["Developer", "Desiner", "Full Stack"];

const textContainer = document.querySelector(".animated-text");

let textIndex = 0;
let charIndex = 0;

const typeTextSpeed = 100;
const pause = 1500;
const delitingtextSpeed = 50;

function typeText() {
  const text = texts[textIndex];

  textContainer.textContent = text.slice(0, charIndex++);

  if (charIndex <= text.length) {
    setTimeout(typeText, typeTextSpeed);
  } else {
    setTimeout(eraseText, pause);
  }
}

function eraseText() {
  const text = texts[textIndex];
  textContainer.textContent = text.slice(0, charIndex--);

  if (charIndex >= 0) {
    setTimeout(eraseText, delitingtextSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(typeText, pause);
  }
}

typeText();
