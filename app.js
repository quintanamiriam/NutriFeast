$(document).ready(function() {
  $(".button-collapse").sideNav();
  $(".parallax").parallax();
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
      // console.log(data);
      var recipes = []
      for (var i = 0; i < data.q.length; i++) {
        recipes.push(data.hits[i])
      }
// console.log(recipes)
      for (var i = 0; i < Object.keys(recipes).length; i++) {
        var recipeLabel = recipes[i].recipe.label;
        var recipeImage = recipes[i].recipe.image;
        var recipeUrl = recipes[i].recipe.url;
        var recipeYield = recipes[i].recipe.yield;
        var recipeDietLables = recipes[i].recipe.dietLabels[0];
        var recipeTotalNutrients = [];
               const name = data.hits[i].recipe.totalNutrients;
               const rec = data.hits[i];
               for (var key in name) {
                 recipeTotalNutrients.push((name[key].label + " " + Math.round(name[key].quantity) + " " + name[key].unit + '<br>'));
               }



      //
      //
      //
      //   var ingredients = []
      //   var ingredientLines = recipes[i].recipe.ingredientLines;
      // for (var j = 0; j < Object.keys(ingredients).length; j++) {
      //   ingredients.push(ingredientLines[i])
      // }

// ____________________________________________________________________________________________
//       var ingredients = []
//       for (var j = 0; j < recipeIngredientLines.length; j++) {
//         ingredients.push('<span>' + recipeIngredientLines[i] + '</span>')
//       }
//       $(".element").html(ingredients.join(""));
//
//       console.log(ingredients);
//
//       var ingredients = [recipeIngredientLines];
// console.log(Object.keys(ingredients));

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
                <p>Recipe Yield: ${recipeYield} <br> <br> Diet Label: ${recipeDietLables} <br> <br> Nutritional Values: <br> ${recipeTotalNutrients.join("")}<p>
              </div>
            </div>
          </div>`)
      }
    }
  })
});
