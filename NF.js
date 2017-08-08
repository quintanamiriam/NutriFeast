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

    console.log(data);
  }
})
});
