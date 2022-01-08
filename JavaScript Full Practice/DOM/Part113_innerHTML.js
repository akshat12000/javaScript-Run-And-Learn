// innerHTML
const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
headline.innerHTML = "<h1>Inner Html Changed</h1>";
headline.innerHTML+= "<button class=\"btn\">Learn More</button>";
console.log(headline.innerHTML);