const searchFood = () => {
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value; 

    console.log(searchText);
    // clear data 
    searchfield.value = '';

    // load data 
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

     fetch(url)
    .then(res => res.json())
    .then(foods => displayFoods(foods.meals))
};
searchFood();
 
const displayFoods = foods => {
    const searchFood = document.getElementById('search-food');
    searchFood.innerHTML = '';
    // if (meals.length == 0) {
    //     alert('food not found')
    // } else {
        
    // }
    foods.forEach(food => {
        // console.log(food);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div style="border: none; padding-bottom: 20px" class="card h-100">
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h1 class="card-title">
                ${food.strMeal}
            </h1>
          <h5>${food.strArea} Food.</h5>
          <h6>Category: ${food.strCategory}</h6>
          <br>
          </div>
          <div class="card-footer">
            <button onclick = 'foodDetail(${food.idMeal})' type="button" class="btn btn-success mb-2 w-100">Explore</button>
            <button onclick = 'foodOrder(${food.idMeal})' type="button" class="btn btn-danger mb-2 w-100">Order</button>
        </div>
      </div>
  `;
        searchFood.appendChild(div);
    });
}

const foodOrder = foodId => {
    const foods = document.getElementById('foods');
    if (foods.style.display !== "none") {
        foods.style.display = "none"
    } else {
        foods.style.display = "block"
    }
    console.log(foodId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayOrder(data.meals[0]))
}

const displayOrder = food => {
    console.log(food);

    const singleOrder = document.getElementById('food-cart');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${food.strMealThumb}" class="card-img-top img-fluid" alt="Responsive image">
    <div class="card-body">
      <h3 class="card-title">${food.strMeal}</h3>
      <p class="card-text">${food.strArea} Food</p>
    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-danger mb-2 w-100">Tk. 299</button>
    </div>
    `;
    singleOrder.appendChild(div);
    // singleOrder('window.location.href = "orderGallery.html"');

}


const foodDetail = foodId => {
    const foods = document.getElementById('foods');
    if (foods.style.display !== "none") {
        foods.style.display = "none"
    } else {
        foods.style.display = "block"
    }
    console.log(foodId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayFoodDetail(data.meals[0]))
}

const displayFoodDetail = food => {
    console.log(food);
    const singleFoodDetails = document.getElementById('food-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${food.strMealThumb}" class="card-img-top img-fluid" alt="Responsive image">
    <div class="card-body">
      <h3 class="card-title">${food.strMeal}</h3>
      <br>
      <h5>NECCESSARIES: </h5>

        <p>${food.strIngredient1} ${food.strMeasure1}</p>
        <p>${food.strIngredient2} ${food.strMeasure2}</p>
        <p>${food.strIngredient3} ${food.strMeasure3}</p>
        <p>${food.strIngredient4} ${food.strMeasure4}</p>
        <p>${food.strIngredient5} ${food.strMeasure5}</p>
        <p>${food.strIngredient6} ${food.strMeasure6}</p>
        <p>${food.strIngredient7} ${food.strMeasure7}</p>
        <p>${food.strIngredient8} ${food.strMeasure8}</p>
        <p>${food.strIngredient9} ${food.strMeasure9}</p>
     <br>
     <h5>INSTRUCTION:</h5>
      <p class="card-text">${food.strInstructions}</p>
      <a href="${food.strYoutube}" class="btn btn-danger">Check Video</a>
    </div>
    `;
    singleFoodDetails.appendChild(div);
}