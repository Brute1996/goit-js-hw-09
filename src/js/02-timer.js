import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";

const timerDate = document.querySelector('.timer [data-days]')
const timerHours = document.querySelector('.timer [data-hours]')
const timerMinutes = document.querySelector('.timer [data-minutes]')
const timerSeconds = document.querySelector('.timer [data-seconds]')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDateInMs = selectedDates[0].getTime();
    
    const intervalId = setInterval(() => {
      const currentDate = new Date;
      const currentDateInMs = currentDate.getTime();
      console.log(currentDateInMs);
      const deltaOfDatesInMs = selectedDateInMs - currentDateInMs;
      
      if (deltaOfDatesInMs === 0) {
        clearInterval(intervalId)
      }
      
      const { days, hours, minutes, seconds } = convertMs(deltaOfDatesInMs);
      
      timerDate.textContent = days;
      timerHours.textContent = hours;
      timerMinutes.textContent = minutes;
      timerSeconds.textContent = seconds;
    }, 1000)
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
}


