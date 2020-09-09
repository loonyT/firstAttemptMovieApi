
//selecting elements from the DOM 
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movies-searchable');
const imgElement = document.querySelector( 'img');
const moviesContainer = document.querySelector('#movies-container'); 



buttonElement.onclick = function(event) { 
    //here we have to prevent the browser from loading the event 
    event.preventDefault();
    const value = inputElement.value;
    searchMovie(value); 
   // here it is to send the terms typed by the user to the API sothe path is generated dynamically
   // here im gonna get the videos preview for the movies:
   
   /*
   const path = '/search/movie'; 
   const newUrl = generateUrl(path)  + '&query='  + values; 
*/
 
// here it would be how to get the datas from the API when we are clicking on the search button 

/*

fetch(newUrl)
/* here wepass the url to get the datas from the JSon response file */
//data here is represented as an object.
//to get all the data from that object and store them in an array : data.results [] 
/*
.then((res) => res.json() )
.then((data) => {
/*

})

//just in case there is an error

.catch((error) => {
    console.log('Error:', error);
});


*/



inputElement.value = '';
console.log('Value : ', value);




//function to place the videos previews from youtube 


function createIframe(video){

const iframe = document.createElement('iframe');
iframe.src = `https://www.youtube.com/embed/${video.key}`;
iframe.src = 360;
iframe.src = 315;
iframe.src = true;


return iframe;



}

function createVideoTemplate(videos, content) {

//TODO
//displaymovie videos 
//replace everythings that is inside the container 
content.innerHTML = '<p id ="content-close"></p>'; 
console.log('Videos:', data);
const videos = data.results;
const lenght = videos.length > 4 ? 4 : videos.length; //display no more than 4 videos
const iframeContainer = document.createElement('div');
//we dont wanna loop through every results


for (let i = 0; i < videos.length; i++) {

const video = video [i]; //represents every videos that we have 
const iframe = createIframe(video);
iframeContainer.appendChild(iframe); 
content.appendChild(iframeContainer); 


}






}










//Event delegation
document.onclick = function(event) {

    const target = event.target; 
    if (target.tagName.toLowerCase() === 'img' ){ 
        console.log('hello world');
        console.log ('Event:' , event);
        const movieId = target.dataset.movieId;
        console.log('movieId');
        const section = event.target.parentElement; // section
        const content = section.nextElementSibling; //content
        content.classList.add('content-display');

const path = ` /movie/${movieId}/videos`;
const url = generateUrl(path); 

//fetch movie videos 

fetch(url)
.then((res) => res.json())
.then((data) => createVideoTemplate (data, content)) 





)
.catch(error) => {

    console.log('Error: ', error); 
}


    }



if (target.id  === 'content-close' ) {
const content = target.parentElement;
content.classList.remove('content-display');

}



}


