let hours_needle = document.querySelector(".hour"),
      minutes_needle = document.querySelector(".minutes"),
      seconds_needle = document.querySelector(".seconds");

    setInterval(() => {
      let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        h_rotation = 30 * hours + minutes / 2,
        m_rotation = 6 * minutes,
        s_rotation = 6 * seconds;
      hours_needle.style.transform = `rotate(${h_rotation}deg)`;
      minutes_needle.style.transform = `rotate(${m_rotation}deg)`;
      seconds_needle.style.transform = `rotate(${s_rotation}deg)`;
    }, 1000);