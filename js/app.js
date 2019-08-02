//SETUP COUNTDOWN FUNCTION
function countdown(endDate) {
  //SET VARIABLES
  let days, hours, minutes, secondes;

  //DATE
  endDate = new Date(endDate).getTime();

  //RUN CALCTIME FUNCTION EACH SECOND
  setInterval(calcTime, 1000);

  //SETUP CALCTIME FUNCTION
  function calcTime() {
    //TODAY [ CURRENT DATE ]
    let today = new Date().getTime();

    //TIME REMAINING BETWEEN THE CURRENT DATE AND END DATE.
    let timeRemaining = parseInt((endDate - today) / 1000);

    if (timeRemaining >= 0) {
      //GET DAYS [ DAY = 86400 SECONDS ]
      days = parseInt(timeRemaining / 86400);
      timeRemaining = timeRemaining % 86400;

      //GET HOURS [ HOUR = 3600 SECONDS ]
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = timeRemaining % 3600;

      //GET MINUTES [ MIN = 60 SECONDS  ]
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = timeRemaining % 60;

      //GET SECONDS
      secondes = parseInt(timeRemaining);

      //SELECT ELEMENTS
      const countDays = document.querySelector('.countdown-days');
      const countHours = document.querySelector('.countdown-hours');
      const countMinutes = document.querySelector('.countdown-minutes');
      const countSeconds = document.querySelector('.countdown-seconds');

      //SETUP ADDZERO FUNCTION
      function addZero(n) {
        return n < 10 ? '0' + n : n;
      }

      //RESULT
      countDays.textContent = addZero(days);
      countHours.textContent = addZero(hours);
      countMinutes.textContent = addZero(minutes);
      countSeconds.textContent = addZero(secondes);
    } else {
      clearInterval(calcTime);
    }
  }
}

//SET THE END DATE
countdown('2019/12/30 00:00:00');
