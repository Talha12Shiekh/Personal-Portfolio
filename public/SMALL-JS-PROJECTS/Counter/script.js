const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updatecount = () => {
    const targetcount = +counter.getAttribute("data-target");
    // console.log(targetcount);

    const startingcount = Number(counter.innerHTML);

    const incr = targetcount / 100;

    if (startingcount < targetcount) {
      counter.innerHTML = `${Math.round(startingcount + incr)}`;
      setTimeout(updatecount, 10);
    } else {
      counter.innerHTML = targetcount;
    }
  };
  updatecount();
});
