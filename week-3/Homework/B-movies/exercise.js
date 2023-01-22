/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// Task 1: showMovies function
const showMovies =(movies)=>{
  const allMovies = document.getElementById("all-movies");
  allMovies.innerHTML = `<p class="alert alert-info">Number of movies: <span id="movies-number"></span></p>`;
 
  movies.forEach((movie, index)=>{ 
    setTimeout(()=>{ 
      const _p = document.createElement("p");
      _p.textContent = `Pelicula: ${movie.title}, Director: ${movie.director}`;
      _p.classList = 'movie';
      allMovies.appendChild(_p);

      const moviesNumber = document.getElementById('movies-number');
      moviesNumber.textContent = index+1;
    }, 500*(index+1));
  });
}

// Task 2: create a new movie object for your favorite movie
const newMovie=(title, director, type, haveWatched)=>{
  const myMoviefavorite = {
    title: title,
    director: director,
    type: type,
    haveWatched: haveWatched,
  }
  return (myMoviefavorite);
}

// Task 2: create addMovies function
const addMovie=(movie)=>{
 // document.querySelectorAll('p.movie').forEach((p)=>{p.remove()});
  setTimeout(()=>{ 
    movies.push(movie)
    showMovies(movies);
  }, 2000); 
}

// Task 3:
addMovie(newMovie('ghost in the shell', 'Masamune Shirow','Ciberpunk', true));

// Task 4:
const sendForm = (event) => {
  event.preventDefault();
  const {title, director, type, checkBox} = event.target;

  if(title.value.length>0 && director.value.length>0 && type.value.length>0){ 
    const data = newMovie(title.value, director.value, type.value, checkBox.checked);
    title.value ='';
    director.value ='';
    type.value ='';
    addMovie(data);
  }
}

const form = document.getElementById('form');
form.addEventListener("submit", sendForm);
