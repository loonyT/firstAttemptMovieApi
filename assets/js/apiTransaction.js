// provides every single actions to do with the API 

//initial values 

const API_KEY = '28a86afd95ea9e771bc47287ee94e3c1';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=28a86afd95ea9e771bc47287ee94e3c1&query=furious';






// here it is the function to get the video preview of the movie 

function generateUrl(path) {

    const url = `https://api.themoviedb.org/3/$(path)?api_key=28a86afd95ea9e771bc47287ee94e3c1&query=furious` ;
    return url;
    
    }
    
    function requestMovies (url, oncComplete, onError)   { 
    
    fetch(url)
    
    .then ((res) => res.json())
    .then(onComplete)
    .catch ((OnError) ;
    
    
    
    
    
    //we want JS that will select the output coming from that code snippet
    
    //this is the function that displays the movies searched by the user
    function movieSection(movies) {
        return movies.map ((movie) => {
        if (movie.poster_path) {
    
            return ` 
            <img src= $(IMAGE_URL  movie.poster_path) data-movie-id=$(movie.id)/>
            `;
    
        }
           
           
           
            
        })
    
    }
    
    
    //takewhatevervalue and then bind that value 
    function createMovieContainer () {
        const movieElement = document.createElement('div'); 
        movieElement.setAttribute('class', 'movie');
    // we hare here constructing the function to loop through all the movies
        const movieTemplate = `         
        
        <section class="section">
    ${movieSection(movies)}
            </section>
    
            <div class="content">
                <p id="content-close">X</p> 
            </div>
    
         `;
    
    movieElement.innerHTML = movieTemplate;
    return movieElement;
    
    }
    
    
    function  renderSearchMovies(data) {
    //removes whats inside the container 
    movieSearchable.innerHTML = '';
        const movies = data.results; 
        const movieBlock =  createMovieContainer(movies);
        movieSearchable.appendChild(movieBlock);
            console.log('Data:', data); //thats where were collecting datas from the huge json file array
    
    }
    
    //how to search the movies ? 
    
    function renderMovies(data) {
    
    
    const path = '/search/movie';    
    const newUrl = generateUrl (path) +'&query=' + value;;
    
    requestMovies(url,renderSearchMovies,handleError)
    
    }

     
    function getUpcomingMovies() {
    
        const path = '/movie/top_rated';    
        const newUrl = generateUrl(path);
    
        requestMovies(url,renderSearchMovies,handleError)
        
        }   
    
    
        function getPopularMovies() {
    
            const path = '/movie/popular';    
            const newUrl = generateUrl(path);
        
            requestMovies(url,renderSearchMovies,handleError)
            
            }   