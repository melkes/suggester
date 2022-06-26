function handleRadio(event) {
    event.preventDefault();
    const radioSelection1 = document.querySelector("input[name='use']:checked").value;
  }
  
  window.addEventListener("load", function() {
    document.getElementById("q1").addEventListener("submit", handleRadio);
  });
  console.log("This is a heading element!");