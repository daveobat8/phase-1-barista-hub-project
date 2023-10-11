const BASE_URL = 'https://api.api-ninjas.com/v1/cocktail?name=cola';

//ensure DOM is loaded

document.addEventListener('DOMContentLoaded', () => {
  getCocktails()


});


// create a headerlist 
const headersList = {
    "Accept": "*/*",
    //"User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "X-Api-Key": "1ivn3UXAQv0kdbLKoqS2ag==0JFIXAWueVMxtr47"
   };

   // fetch details


function getCocktails (){

    fetch( BASE_URL, {
        method: 'GET',
        headers: headersList,
         }).then((res) => res.json())
           .then(renderAllCocktails)
            .catch((err) => {
        console.log(err)
    });
}; 


function renderAllCocktails(cocktails){
  const menu= document.querySelector('.drinks_details')

  
cocktails.forEach((cocktail) => {
      const cocktailName= document.createElement('h1')
      cocktailName.textContent= cocktail.name
       cocktailName.addEventListener ('click',() => {
        console.log(`clicked ${cocktail.name}`)
       }) 
      menu.appendChild(cocktailName);
      
  })
};


