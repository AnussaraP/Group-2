let count = 0;

const incrementValue = () => {

    count++;
    const basketAmount = document.getElementById("basketAmount");
    basketAmount.style.display = "block"
    basketAmount.innerHTML = count;
   

  };
  
  let loveCount = 0;

  const loveIncrementValue = () => {
    loveCount++;
    const loveItems = document.getElementById("loveItems");
    loveItems.style.display = "block"
    loveItems.innerHTML = loveCount;

    console.log(loveCount);
  }
  


