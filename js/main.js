'use strict';
google.load("feeds", "1");

/* Use this idea to see if more items can be retrieved from the feed. google.load("feeds", "1",{"callback" : pageLoaded}); */

function initialize() {
  var feed = new google.feeds.Feed("http://feeds2.feedburner.com/tedtalks_video/");
/* Fix this to yield total count of entries on the Ted site. Use for setNumEntries(num) 
var num = feed.entries.length;
*/

feed.setNumEntries(70);
feed.load(function(result) {
  if (!result.error) {
  // var container = document.getElementById("feed");
  var container = $('#feed');
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    // debugger;
    // building out the html for the feed titles and respective cotent details
    var entryDiv = '<div class = "entry">' + '<ul class="listing">' + '<li class=title>' +
    entry.title + '<div class="hide">' + entry.content + '</div>' +'<li class="arrow hide"><a class="openInTed" href=' + entry.link + ' target=_blank>'+ '&#10095;' +'</a></li></ul></div>';
    container.append(entryDiv);
      }
    }
  });
};

// shows listing description
$('#feed').on('click', '.entry', function(){
  // alert('u clicked .entry');
  $(this).find('.hide').removeClass('hide').addClass('show');
  // $(this).find('.arrow .hide').removeClass('hide').addClass('show');
})

// FIx hide function!!!!!!! It's triggering code form line 30th ******

// $('#feed').on('click', '.entry .listing', function(event){
//   //.stopPropagation will keep click event from bubbling up back to feed;
//   event.stopPropagation();
//   // $(this).find('.show').removeClass('show').addClass('hide');
//    $(this).find('.arrow.show').removeClass('show').addClass('hide');
//     alert("you are in the hide function");
//     debugger;
// });


// View on localhost so we can use the google hosted libraries in the script tags.
 $(document).ready(function() {
 google.setOnLoadCallback(initialize);
 });
