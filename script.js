document.addEventListener("DOMContentLoaded", function () {
  const countDisplay = document.getElementById("count");
  const errorDisplay = document.getElementById("error");
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");
  const clearBtn = document.getElementById("clear");

  let count = 0;

  // Function to update count display
  function updateCount() {
    countDisplay.textContent = count;
  }

  // Function to handle decrement button click
  decrementBtn.addEventListener("click", function () {
    if (count > 0) {
      count--;
      updateCount();
      errorDisplay.style.display = "none";
    } else {
      errorDisplay.style.display = "block";
    }
  });

  // Function to handle increment button click
  incrementBtn.addEventListener("click", function () {
    count++;
    updateCount();
    errorDisplay.style.display = "none";
  });

  // Function to handle clear button click
  clearBtn.addEventListener("click", function () {
    count = 0;
    updateCount();
    errorDisplay.style.display = "none";
  });

  updateCount();
});
