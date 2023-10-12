const BASE_URL = 'http://localhost:3000/cocktails';

//ensure DOM is loaded

document.addEventListener('DOMContentLoaded', () => {
  getCocktails()


});


   // fetch details


function getCocktails (){

    fetch( BASE_URL, {
        method: 'GET',
         }).then((res) => res.json())
           .then(renderAllCocktails)
            .catch((err) => {
        console.log(err)
    });
}; 

// render cocktails to the webpage
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


