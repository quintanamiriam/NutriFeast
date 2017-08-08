$( document ).ready(function() {
     $(".button-collapse").sideNav();
});

$(document).ready(function(){
      $('.parallax').parallax();
    });

    //       //  $.get(url, function(data)  {
    //       //          $.each (data, function(){
    //       //              $(".recipesField").append( );
    //       //              console.log(data);
    //       //          });


 $('.submit').on('submit', function(event) {
   event.preventDefault()
        var search = $("#search").val();
      var url = "https://api.edamam.com/search?q=" + search + "&app_id=93065f52&app_key=f299940d568086c4a1e38fd8254db4bc";

//       //  $.get(url, function(data)  {
//       //          $.each (data, function(){
//       //              $(".recipesField").append( );
//       //              console.log(data);
//       //          });
$.ajax({
  type: "GET",
  url: url,
  dataType: 'json',
  success: function(data) {
    // console.log(data.hits);
for (var i = 0; i < data.q.length; i++) {
  // console.log(data.q.hits);
  var recipeLabel = data.hits[i].recipe.label;
  var recipeImage = data.hits[i].recipe.image;
  var recipeLink;
  var recipeIngredientLines = data.hits[i].recipe.ingredientLines;
  var recipeTotalNutrients = data.hits[i].recipe.totalNutrients;
  var recipeUrl = data.hits[i].recipe.url;


  // console.log(recipeLabel);
  // console.log(recipeImage);
  // console.log(recipeIngredientLines);
  // console.log(recipeTotalNutrients);
  // console.log(recipeUrl);
$(".recipesField").append(`

    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" style="width: 50%" src=${recipeImage}>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
        <p><a target="blank" href=${recipeUrl}>Check out the recipe</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
    </div>
  </div>`)



}
}
})
});
// <div>
// <h1>${recipeLabel}</h1>
// <img src=${recipeImage}>
// <a
