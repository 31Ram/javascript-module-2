/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
*/

 const nodoListP = document.querySelectorAll("p");
 console.log(nodoListP);

 const nodoElementDiv = document.querySelector(".site-header"); 
 console.log(nodoElementDiv);

 const nodoElementId = document.querySelector("#jumbotron-text"); 
 console.log(nodoElementId);

 const nodoListAllp = document.querySelector(".primary-content").querySelectorAll("p"); 
 console.log(nodoListAllp);

/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

document.querySelector("#alertBtn").addEventListener("click", alertText);

function alertText(){
  alert("¡Gracias por visitar Bikes for Refugees!");
}

/*
Task 3
=======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
document.querySelector("#bgrChangeBtn").addEventListener("click", ()=> {changeColour()});

function changeColour(colors){
  document.body.style.backgroundColor = colors || "orange";
}

/*
Task 4
======
When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

document.querySelector("#addTextBtn").addEventListener("click", ()=> {addParagraph()});

function addParagraph(text){
  const article = document.createElement("article");
  const paragraph = document.createElement("p");

  article.classList.add("article");
  paragraph.classList.add("article-lead");

  paragraph.textContent = text || "Nuevo parrafo"; 

  article.appendChild(paragraph);
  document.getElementById("mainArticles").appendChild(article);
}
/*
Task 5
======
When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

document.querySelector("#largerLinksBtn").addEventListener("click", changeLinks);

function changeLinks(){
   const elementos = document.querySelectorAll("a");
   elementos.forEach((a)=>{
    a.style.fontSize = "large";
   })
}

/*
Task 6
======
Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

document.querySelector("#addArticleBtn").addEventListener("click", add)

function add(){
  const text = document.querySelector(".addArticle").value.trim();
  document.querySelector(".addArticle").value = "";
  addParagraph(text);
}

/*
Task 7
======
Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let contador = 0;
const colors = ["green", "red", "gray", "blue", "pink"];

document.querySelector("#bgrChangeBtn").addEventListener("click", ()=> change());

function change(){
  if(contador>=colors.length){
    contador = 0;
  }

  changeColour(colors[contador]);
  contador++;
  
}