// function handleRadio(event) {
//   event.preventDefault();
//   const radioSelection1 = document.querySelector("input[name='use']:checked").value;
// }
// window.addEventListener("load", function () {
//   document.getElementById("q1").addEventListener("submit", handleRadio);
// });

// function hideResults() {
// }

window.onload = function () {
  const js = document.getElementById('js')
  const fortran = document.getElementById('fortran')
  js.style.display = "none";
  fortran.style = 'display:none';

  document.querySelector("form").onsubmit = function (event) {
    // hideResults();
    event.preventDefault();
    const use = document.querySelector("input[name='use']:checked").value;
    // const fortran = document.querySelector("input[name='fortran']:checked").value;

    if (use === "yes") {
      js.style = "display:block";
    }
    // click listener that runs hid results 
  };
};
