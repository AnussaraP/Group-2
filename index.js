let count = 0;

const incrementValue = () => {

    count++;
    const basketAmount = document.getElementById("basketAmount");
    basketAmount.style.display = "block"
    basketAmount.innerHTML = count;
  };



