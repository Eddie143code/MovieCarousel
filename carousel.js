const movies =
[
    {
        id :1,
        movie : "Quentin tarantino",
        img : "tarantino.jpg",
        text : "Quentin Tarantino is an American filmmaker, film critic, and actor.",

    },

    {
        id : 2,
        movie : "Pulp Fiction",
        img : "pulpfiction.jpg",
        text : "Pulp Fiction is a 1994 American black comedy crime film written and directed by Quentin Tarantino.",
    },

    {
        id : 3,
        movie : "Kill Bill",
        img : "killbill.jpg",
        text : "Kill Bill:Volume 1 is a 2003 American martial arts film written and directed by Quention Tarantino",

    },

    {
        id : 4,
        movie : "Inglourious Basterds",
        img : "ingbast.jpg",
        text : "Inglourious Basterds is a 2009 war film written and directed by Quentin Tarantino.",
    },

    {
        id : 5,
        movie : "Django Unchained",
        img : "django.jpg",
        text : "Django Unchained is a 2012 American Revisionist Western film wirtten and directed by Quentin Tarantino.",

    },
    
];

const movie = document.getElementById("movie");
const img = document.getElementById("img");
const text = document.getElementById("text");

const previous = document.getElementById("prevbtn");
const next = document.getElementById("nextbtn");
const random = document.getElementById("ranbtn");

let movieid = 0;

function nextMovie(currentmovie)
{
    const movienumber = movies[currentmovie];
    movie.textContent = movienumber.movie;
    img.src = movienumber.img;
    text.textContent = movienumber.text;

}

window.addEventListener("DOMContentLoaded", function()
{
    nextMovie(movieid);
});

previous.addEventListener("click", function()
{
    movieid -= 1;
    if(movieid < 0)
    {
        movieid = 4;
    }
    nextMovie(movieid);
    
    
    
});

next.addEventListener("click", function()
{
    movieid += 1;
    if(movieid > 4)
    {
        movieid = 0;
    }
    nextMovie(movieid);
    
});

random.addEventListener("click", function()
{
    randommovie = Math.floor(Math.random() * 5);
    
    nextMovie(randommovie);
});