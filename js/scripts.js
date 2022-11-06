//hide results
window.onload = function () {
  const html = document.getElementById('html')
  const cSharp = document.getElementById('csharp')
  const python = document.getElementById('python')
  const fortran = document.getElementById('fortran')
  html.style = "display:none";
  cSharp.style = "display:none";
  python.style = "display:none";
  fortran.style = "display:none";

  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    
    const quiz = document.getElementById('quiz')
    let webDev = document.querySelector("input[name='question1']:checked").value;
    let data = document.querySelector("input[name='data']:checked").value;
    let sec = document.querySelector("input[name='sec']:checked").value;
    if (webDev === "yes") {
      html.style = "display:block";
      cSharp.style = "display:none";
      python.style = "display:none";
      fortran.style = "display:none";
      quiz.style = "display:none";

    } else if (sec === "sec-yes") {
      html.style = "display:none";
      cSharp.style = "display:none";
      python.style = "display:none";
      fortran.style = "display:block";
      quiz.style = "display:none";


    } else if (data === "yes") {
      html.style = "display:none";
      cSharp.style = "display:none";
      python.style = "display:yes";
      fortran.style = "display:none";
      quiz.style = "display:none";

    } else {
      html.style = "display:none";
      cSharp.style = "display:block";
      python.style = "display:none";
      fortran.style = "display:none";
      quiz.style = "display:none";

    }

};
};