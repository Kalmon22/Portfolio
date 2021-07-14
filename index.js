//alert('k');


let i = 0;
let txt = 'I have a desire to never stop learning..';
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}


function footer() {
  const year = new Date().getFullYear();
  document.getElementById("footerPar").innerHTML="&copy; Kalmon " + year
  }
  footer()
