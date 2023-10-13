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
   // like button added
   const button= document.createElement('button')
   button.innerText= "🤍"
   button.classList.add('likebtn')
   cardDiv.appendChild(button)

   //add card body content
   const cardBody= document.createElement('div')
   cardBody.classList.add('card-body','hide')
   const title= document.createElement('h5')
   title.classList.add('card-title', 'show');
   title.textContent= cocktail.name;
   //add instruction and ingredients
   const ingredients = document.createElement('p')
   ingredients.classList.add('card-text')
   ingredients.textContent= `Ingredients: ${cocktail.ingredients} `;

   const instructions= document.createElement('p')
   instructions.classList.add('card-text')
   instructions.textContent=`Instructions: ${cocktail.instructions}`;
  
   cardDiv.appendChild(image)
   cardDiv.appendChild(title)
   
   cardBody.appendChild(ingredients)
   cardBody.appendChild(instructions)
   cardDiv.appendChild(cardBody)
   mainDiv.appendChild(cardDiv);
   menu.appendChild(mainDiv);
    
  });
 
  // for like button
  const like= document.querySelectorAll('.likebtn')
  like.forEach(btn => {
    btn.addEventListener('click', (e)=> {
      e.currentTarget.innerText ="❤";
    })
  });

  //show card details
  const titles= document.querySelectorAll('.show')
  titles.forEach(title => {
    title.addEventListener('click', (e) =>{
      e.currentTarget.parentElement.querySelector('.card-body').classList.toggle('hide');
    })
  })
  


};

