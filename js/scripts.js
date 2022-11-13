function resetResults() {
  document.getElementById('quiz').style = "display:block";
  document.getElementById('html').style = "display:none";
  document.getElementById('csharp').style = "display:none";
  document.getElementById('python').style = "display:none";
  document.getElementById('fortran').style = "display:none";
   };
 //hide results
window.onload = function () {
  const html = document.getElementById('html')
  const cSharp = document.getElementById('csharp')
  const python = document.getElementById('python')
  const fortran = document.getElementById('fortran')
  const quiz = document.getElementById('quiz')

  html.style = "display:none";
  cSharp.style = "display:none";
  python.style = "display:none";
  fortran.style = "display:none";

  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    
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




// function hideQuiz() {
//   quiz.style = "display:none";
//   };

// const btn = document.querySelector("button");  
// function resetQ (event) {

//  quiz.style = "display:yes";
// }
// btn.onclick = resetQ();
};



// document.querySelector("#reset").on = function (event) {
//   event.preventDefault();
// const reset = document.getElementById('reset')
// console.log('reset')
// }

// function hideResults() {
//   const reset = document.querySelector('#reset')
//   return reset;

// 