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
    var entryDiv = '<div class = "entry">' + '<ul class="listing">' + '<li class="title">' +
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

// Hides description of talk and arrow directing to Ted.com
 $(this).find('.hide, .show').each(function(){
   if($(this).hasClass('hide')){
     $(this).removeClass('hide').addClass('show');
   }else{
     $(this).removeClass('show').addClass('hide')
   }
 });


// View on localhost so we can use the google hosted libraries in the script tags.
 $(document).ready(function() {
 google.setOnLoadCallback(initialize);
 });
