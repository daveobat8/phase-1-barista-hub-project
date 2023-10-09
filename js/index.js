const BASE_URL = 'https://api.api-ninjas.com/v1/cocktail?name=rum'
//ensure DOM is loaded

document.addEventListener('DOMContentLoaded', () => {
  getFirstFilm()
});
// fetch first film data and display on DOM
let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "X-Api-Key": "1ivn3UXAQv0kdbLKoqS2ag==0JFIXAWueVMxtr47"
   }
function getFirstFilm (){

    fetch( BASE_URL, {
        method: 'GET',
        headers: headersList,
         }).then((res) => res.json())
           .then((data) => console.log(data))
            .catch((err) => {
        console.log(err)
    });
}; 