$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
});

var API = "https://api.edamam.com/search?q="
var API_KEY_ID = "&app_id=93065f52&app_key=f299940d568086c4a1e38fd8254db4bc"

$('.submit').on('submit', function(event) {
  event.preventDefault()
  var search = $("#search").val();
  var API_URL = API + search + API_KEY_ID;


  $.ajax({
    type: "GET",
    url: API_URL,
    dataType: 'json',
    success: function(data) {
      console.log(data);
      var recipes = []
      for (var i = 0; i < data.q.length; i++) {
        recipes.push(data.hits[i])
      }
// console.log(recipes);
      for (var i = 0; i < Object.keys(recipes).length; i++) {
        var recipeLabel = recipes[i].recipe.label;
        var recipeImage = recipes[i].recipe.image;
        var recipeUrl = recipes[i].recipe.url;
        var recipeTotalNutrients = recipes[i].recipe.totalNutrients;
// console.log(recipeTotalNutrients);

const label_name = recipeTotalNutrients[i].label
const quantity_name = data.hits.recipe.totalNutrients[i].quantity
const unit_name = data.hits.recipe.totalNutrients[i].unit
console.log(label_name);
      //
      // for (var j = 0; j < Object.keys(recipeTotalNutrients)[i].length; j++){
      //   var nutrients = Object.keys(recipeTotalNutrients)[j]
// console.log(nutrients)
//
// for(var propName in nutrients) {
//     if(nutrients.hasOwnProperty(propName)) {
//         var propValue = nutrients[propName];
//         console.log(propValue)
//     }
// }

// }


        $(".recipesField").append(`
            <div class="card">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" style="width: 50%" src=${recipeImage}>
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${recipeLabel}<i class="material-icons right">more_vert</i></span>
                <p><a target="blank" href=${recipeUrl}>Check out the recipe</a></p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${recipeLabel}<i class="material-icons right">close</i></span>
                <p>${recipeTotalNutrients}.</p>
              </div>
            </div>
          </div>`)
      }
    }
  })
});
