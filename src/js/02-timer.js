import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timerDate = document.querySelector('.timer [data-days]')
const timerHours = document.querySelector('.timer [data-hours]')
const timerMinutes = document.querySelector('.timer [data-minutes]')
const timerSeconds = document.querySelector('.timer [data-seconds]')
const timerStartBtn = document.querySelector('button[data-start]')


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDateInMs = selectedDates[0].getTime();
    
    if (selectedDateInMs < options.defaultDate.getTime()) {
      Notify.failure('Please choose a date in the future');
      return
    } 
    
    const startTimer = () => {
      timerStartBtn.removeEventListener('click', startTimer)

      const intervalId = setInterval(() => {
        const currentDate = new Date;
        const currentDateInMs = currentDate.getTime();
        let deltaOfDatesInMs = selectedDateInMs - currentDateInMs;
    
        if (deltaOfDatesInMs <= 0) {
          deltaOfDatesInMs = 0;
          clearInterval(intervalId)
        }
    
        const { days, hours, minutes, seconds } = convertMs(deltaOfDatesInMs);
        
        timerDate.textContent = addLeadingZero(days);
        timerHours.textContent = addLeadingZero(hours);
        timerMinutes.textContent = addLeadingZero(minutes);
        timerSeconds.textContent = addLeadingZero(seconds);
      }, 1000)
    }
  
    timerStartBtn.addEventListener('click', startTimer)
  },
};

flatpickr("#datetime-picker", options);

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
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0')
};

  