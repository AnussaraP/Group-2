
// const incrementNumber = document.getElementById("incrementValue");

let count = 0;

// incrementNumber.innerHTML = count;

// Function to increment count
const incrementValue = () => {

    count++;
    const basketAmount = document.getElementById("basketAmount");
    basketAmount.style.display = "block"
    basketAmount.innerHTML = count;
  };

//   incrementNumber.addEventListener("click", handleIncrement);