(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    function formatResults(resultsArray) {
      function imageTemplate(imageObject){
        var imageUrl = imageObject.images.standard_resolution.url;
        var returnHTML = '<div class="col-sm-6 col-md-4">';
        returnHTML += '<div class="thumbnail">';
        returnHTML += '<img src="';
        returnHTML += imageUrl;
        returnHTML += '" />';
        returnHTML += '</div></div>';
        return returnHTML;
        console.log(returnHTML);
      };

      var resultsHTML = "";
      for(var i = 0; i < resultsArray.length; i++){
        resultsHTML += imageTemplate(resultsArray[i]);
      };
      return resultsHTML;
    };
  
    var results = formatResults(resultsArray);
    $("#searchResults").html(results);

  };

})();
