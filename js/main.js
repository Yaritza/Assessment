'use strict';
google.load("feeds", "1");

/* Use this idea to see if more items can be retrieved from the feed. google.load("feeds", "1",{"callback" : pageLoaded}); */

function initialize() {
  var feed = new google.feeds.Feed("http://feeds2.feedburner.com/tedtalks_video/");


feed.setNumEntries(100);
feed.load(function(result) {
  if (!result.error) {
    var container = $('#feed');
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    // building out the html for the feed titles and respective cotent details
    var entryDiv = '<div class = "entry">' + '<ul class="listing">' + '<li class="title">' +
    entry.title + '<div class="hide">' + entry.content + '</div>' +'<li class="arrow hide"><a class="openInTed" href=' + entry.link + ' target=_blank>'+ '&#10095;' +'</a></li></ul></div>';
    container.append(entryDiv);
      }
    }
  });
};

// Shows and hides listing descriptions. Why didn't I think of using .toggleClass??!! 
$('#feed').on('click', '.entry', function(){
  $(this).find('.hide, .show').each(function(){
   if($(this).hasClass('hide')){
     $(this).removeClass('hide').addClass('show');
   }else{
     $(this).removeClass('show').addClass('hide')
   }
 });
})
 

// View on localhost so google hosted libraries in the script tags can be rendered properly.
 $(document).ready(function() {
 google.setOnLoadCallback(initialize);
 });
