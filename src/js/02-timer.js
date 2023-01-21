import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
      return;
    }
    if (selectedDates) {
      startButton.disabled = false;
      startButton.addEventListener('click', onClick);
    }
  },
};

flatpickr('#datetime-picker', options);
const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button');
const timer = document.querySelector('.timer');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');
let timerId = null;

startButton.disabled = true;

function onClick() {
  timerId = setInterval(() => {
    let countBack = new Date(input.value) - new Date();
    if (countBack >= 0) {
      let time = convertMs(countBack);
      timer.style.color = 'green';
      dataDays.textContent = addLeadingZero(time.days);
      dataHours.textContent = addLeadingZero(time.hours);
      dataMinutes.textContent = addLeadingZero(time.minutes);
      dataSeconds.textContent = addLeadingZero(time.seconds);
    } else {
      timer.style.color = 'red';
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
