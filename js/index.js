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
  const menu= document.getElementById('drinks_details');
  menu.innerHTML="";
  cocktails.forEach((cocktail) => {

   //menu.innerHTML +=`<li>${cocktail.name}</li>`
   const mainDiv= document.createElement('div')
   mainDiv.classList.add('col')
   //create the 2nd Div
   const cardDiv= document.createElement('div')
   cardDiv.classList.add('card', 'h-30')
   //append the image before appending the card to the mainDiv
   const image= document.createElement('img');
   image.classList.add('card-img-top');
   image.src =cocktail.image;
   image.alt =cocktail.name;
   //add card body content
   const cardBody= document.createElement('div')
   cardBody.classList.add('card-body')
   const title= document.createElement('h5')
   title.classList.add('card-title');
   title.textContent= cocktail.name;
   //add instruction and ingredients
   const ingredients = document.createElement('p')
   ingredients.classList.add('card-text')
   ingredients.textContent= `Ingredients: ${cocktail.ingredients} `;

   con

   cardBody.appendChild(ingredients)
   cardBody.appendChild(title)
   cardDiv.appendChild(cardBody)
   cardDiv.appendChild(image)
   mainDiv.appendChild(cardDiv);
   menu.appendChild(mainDiv);
    
  });
 
      

};

