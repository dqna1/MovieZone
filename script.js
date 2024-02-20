let searchIcon = document.getElementById('search');

searchIcon.addEventListener('click', ()=>{
    document.getElementById('input').style.display = 'block';
    document.getElementById('input').style.marginTop = '3px';
    document.getElementById('menuBar').style.marginRight = '120.5px';
    document.getElementById('icon').style.color = 'black';
})

//slideshow

let imgArr = ["img/petrachi.png", "img/coboi.png"];
let bullets = document.querySelectorAll(".bullet");

for (let i=0;i<imgArr.length;i++){
    for(j=0;j<bullets.length;j++){
        if (bullets[i].addEventListener('click',()=>{
            document.getElementById('slide').innerHTML = '<img src=\"'+imgArr[i % imgArr.length]+'\" class="fade">';
        }));
    };
};

//filtrare

const genreButtons = document.querySelectorAll('.movie-genre button');
genreButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const genre = event.target.id;
    filterMoviesByGenre(genre);
  });
});

function filterMoviesByGenre(genre) {
    const movies = document.querySelectorAll('.button-movie');
    const filteredMoviesContainer = document.querySelector('.filtered-movies-container');
    filteredMoviesContainer.innerHTML = ''; 
  
    movies.forEach((movie) => {
      const movieGenre = movie.querySelector('button').classList;
  
      if (movieGenre.contains(genre)) {
        const clonedMovie = movie.cloneNode(true);
        filteredMoviesContainer.appendChild(clonedMovie);
        document.querySelector('.movies-container').style.display = "none";
    }
    });
  }


 //close menu

function hideMenu(){
    let navLinks = document.getElementById('menuBar');
    navLinks.style.left = "-400px";
    
}
 //show menu
 function showMenu(){
    let navLinks = document.getElementById('menuBar');
    navLinks.style.left = "0";
    
}
