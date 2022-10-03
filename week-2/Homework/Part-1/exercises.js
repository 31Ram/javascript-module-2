
function exerciseOne(arrayOfPeople) {
  arrayOfPeople.forEach((person) => {
    let _h1 = document.createElement("h1");
    let _h2 = document.createElement("h2");

    _h1.textContent = person.name;
    _h2.textContent = person.job;

    const content = document.getElementById("content");
    content.appendChild(_h1);
    content.appendChild(_h2);
  });
}

function exerciseTwo(shopping) {
  shopping.forEach((item) => {
    let _li = document.createElement("li");
    _li.textContent = item;

    let content = document.getElementById("content");
    content.appendChild(_li);
  });
}

function exerciseThree(books) {
  let content = document.getElementById("content");
  let _ul = document.createElement("ul");

  books.forEach((book) => {
    let _li = document.createElement("li");
    let _p = document.createElement("p");

    _p.textContent = `${book.title} - ${book.author}`;
    let _img = document.createElement("img");
    _img.setAttribute('src', book.portada);

    _li.appendChild(_p);
    _li.appendChild(_img);
    _ul.appendChild(_li);

    if (book.alreadyRead) {
      _li.style.backgroundColor = "green";
    } else {
      _li.style.backgroundColor = "red";
    }
  });

  content.appendChild(_ul);
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    portada: "https://i.postimg.cc/y6yQmckY/The-Design-of-Everyday-Things.jpg",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    portada: "https://i.postimg.cc/26QDFyZR/The-Most-Human-Human.jpg",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    portada: "https://i.postimg.cc/FzYxXdgw/The-Pragmatic-Programmer.jpg",
    alreadyRead: true,
  },
];

exerciseThree(books);
