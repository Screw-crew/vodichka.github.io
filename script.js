const themeBtn = document.getElementById('theme-btn');
const cartCount = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('.buy-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
const timerText = document.getElementById('timer-text');
const feedbackForm = document.getElementById('feedback-form');

let count = 0;

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeBtn.textContent = 'Светлая тема';
  } else {
    themeBtn.textContent = 'Темная тема';
  }
});

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;

    const card = button.closest('.card');
    const itemCounter = card.querySelector('.item-count');

    let itemCount = Number(itemCounter.textContent);
    itemCount++;
    itemCounter.textContent = itemCount;
  });
});

minusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    const itemCounter = card.querySelector('.item-count');

    let itemCount = Number(itemCounter.textContent);

    if (itemCount > 0) {
      itemCount--;
      itemCounter.textContent = itemCount;

      if (count > 0) {
        count--;
        cartCount.textContent = count;
      }
    }
  });
});

const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);

function updateTimer() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    timerText.textContent = 'Акция завершена';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerText.textContent = days + ' д ' + hours + ' ч ' + minutes + ' мин ' + seconds + ' сек';
}

updateTimer();
setInterval(updateTimer, 1000);

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Форма отправлена');
  feedbackForm.reset();
});
