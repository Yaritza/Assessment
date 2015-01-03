'use strict';
google.load("feeds", "1");

/* Use this idea to see if more items can be retrieved from the feed. google.load("feeds", "1",{"callback" : pageLoaded}); */

function initialize() {
  var feed = new google.feeds.Feed("http://feeds2.feedburner.com/tedtalks_video/");
/* Fix this to yield total count of entries on the Ted site. Use for setNumEntries(num) 
var num = feed.entries.length;
*/

feed.setNumEntries(20);
feed.load(function(result) {
  if (!result.error) {
  // var container = document.getElementById("feed");
  var container = $('#feed');
  for (var i = 0; i < result.feed.entries.length; i++) {
    var entry = result.feed.entries[i];
    // building out the html for the feed titles and repective cotent details
    var entryDiv = '<div class = "entry">' + '<div class="title">' + 
    entry.title + '<div class="details">' + entry.content + '</div> </div>'
    container.append(entryDiv);
      }
    }
  });
};

$('#feed').on('click', '.entry .title', function(){
  //alert('u clicked me');
  $(this).find('.details').removeClass('details').addClass('details-show');
})

$('#feed').on('click', '.entry .details-show', function(){
  alert('u clicked me');
  $(this).find('.details-show').removeClass('details-show').addClass('details');
});

document.addEventListener("DOMContentLoaded", function(event) {
  // console.log("Js is loading"); 
  google.setOnLoadCallback(initialize);
});




// Not sure why the "$" yields a undefined here.
//  $(document).ready(function() {
//  google.setOnLoadCallback(initialize);
// console.log("Js loaded");
//  });
