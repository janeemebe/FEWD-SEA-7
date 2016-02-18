(function instaSearchView() {
  instasearch.view = function(resultsArray) {

    // this is a sample object
    // that the instagram API
    // will return to us
    // var sampleImage = {
    //   images: {
    //     low_resolution: {
    //       url: "https://2vyk4sqq0.igsonar.com/hphotos-ak-xaf1/t51.2885-15/s306x306/e15/11093074_423356687833105_1178379884_n.jpg",
    //       width: 306,
    //       height: 306
    //     },
    //     thumbnail: {
    //       url: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11093074_423356687833105_1178379884_n.jpg",
    //       width: 150,
    //       height: 150
    //     },
    //     standard_resolution: {
    //       url: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11093074_423356687833105_1178379884_n.jpg",
    //       width: 640,
    //       height: 640
    //     }
    //   }
    // };

    // console.log(sampleImage);

    var sampleArray = [{images:{low_resolution:{url:"https://2vyk4sqq0.igsonar.com/hphotos-ak-xaf1/t51.2885-15/s306x306/e15/11093074_423356687833105_1178379884_n.jpg",width:306,height:306},thumbnail:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11093074_423356687833105_1178379884_n.jpg",width:150,height:150},standard_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11093074_423356687833105_1178379884_n.jpg",width:640,height:640}}},{images:{low_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s306x306/e15/11111283_853666244722658_1067200035_n.jpg",width:306,height:306},thumbnail:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11111283_853666244722658_1067200035_n.jpg",width:150,height:150},standard_resolution:{url:"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11111283_853666244722658_1067200035_n.jpg",width:640,height:640}}}];

    function formatResults(sampleArray) {
      var resultsHTML = "";
      for(var i = 0; i < sampleArray.length; i++){
        resultsHTML += imageTemplate(sampleArray[i]);
      };
      return resultsHTML;
    };

    function imageTemplate(imageObject){
      var returnHTML;
      returnHTML += '<div class="col-sm-6 col-md-4>';
      returnHTML += '<div class="thumbnail">';
      returnHTML += '<img src="'
      returnHTML += imageObject.images.standard_resolution.url;
      returnHTML += '" />';
      returnHTML += '</div></div>';
      return returnHTML;
      console.log(returnHTML);
    };

    // Add your imageTemplate() function here
    // It should take in the SampleImage object and
    // return the following HTML:
    // <div class="col-sm-6 col-md-4">
    //   <div class="thumbnail">
    //     <img src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11311148_443877009144792_468293480_n.jpg">
    //  </div>
    // </div>

    // Call function here
    // imageTemplate(sampleImage);
  
  var results = formatResults(sampleArray);
  $("#searchResults").html(results);

  };

  instasearch.view();
})();
