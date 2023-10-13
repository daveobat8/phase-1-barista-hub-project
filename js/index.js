const BASE_URL = 'http://localhost:3000/cocktails';

//ensure DOM is loaded 
document.addEventListener('DOMContentLoaded', () => {
  getCocktails();

});

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
  const menu= document.querySelector('.drinks_details');

  cocktails.forEach((cocktail) => {
    menu.innerHTML +=`<li>${cocktail.name}</li>`
    
  });
 
      

};

