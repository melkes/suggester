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
  const cSharp = document.getElementById('csharp')
  const fortran = document.getElementById('fortran')
  js.style = "display:none";
  cSharp.style.display = "none";
  fortran.style.display = "none";

  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();

    const use = document.querySelector("input[name='use']:checked").value;
   
    if (use === "yes") {
      js.style = "display:block";
      cSharp.style = "display:none";
      fortran.style = "display:none";
    } else if (use === "no") {
      cSharp.style = "display:block";
      js.style = "display:none";
      fortran.style = "display:none";
    }  else if (use === "sec-yes") {
      fortran.style = "display:block";
      js.style = "display:none";
      cSharp.style = "display:none";
    }
    // const sec = document.querySelector("input[name='sec']:checked").value;

   

    // click listener that runs hid results 

    // const bttn = document.getElementById('bttn');

// const form = document.getElementById('questions');

// form.addEventListener('submit', function handleSubmit(event) {
//   event.preventDefault();
//   form.reset();
// });
// handleSubmit();

  };
};
