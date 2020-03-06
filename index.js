window.addEventListener('DOMContentLoaded', automateCounter, false);
function automateCounter(){
const counters = document.querySelectorAll(".counter");
const speed = 500; // Lower number equal faster count up animation

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed; // Lower inc = faster counting, higher to slower counting

    console.log(inc);
    console.log(count);

    // Check if target is reached
    if (count < target) {
      counter.innerText = count + inc; // Add inc to count and output in counter
      setTimeout(updateCount, 1); // Call function every ms
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
};
