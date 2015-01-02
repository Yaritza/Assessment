'use strict';
google.load("feeds", "1");

/*
 Use this idea to see if more items can be retrieved from the feed.
 google.load("feeds", "1",{"callback" : pageLoaded});
 */

 function initialize() {
  var feed = new google.feeds.Feed("http://feeds2.feedburner.com/tedtalks_video/");
  /* Fix this to yield total count of entries on the Ted site. Use for setNumEntries(num) 
  var num = feed.entries.length;
  */
  feed.setNumEntries(20);
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var div = document.createElement("div");
        div.appendChild(document.createTextNode(entry.title));
        container.appendChild(div);
      }
    }
  });
};

//Psuedo code-ish.  Look up if can use .content on entries.
  // function detailedView() {
  // var headlines = document.getElementById('feed').find('div');
  // headlines.each(function(){
  //   $(this).onclick(function(){
  //           // alert("test");
  //           // builds the slideOut div and toggles it for earch headline
  //           var slideOutPanel = document.createElement('#div');
  //           slideOutPanel.addClass('details');
  //           $(this).appendChild(slideOutPanel.createTextNode(entry.conte));
  //           slideOutPanel.slideToggle("fast");
  //         }) 
  //    }
  // });


document.addEventListener("DOMContentLoaded", function(event) { 
  google.setOnLoadCallback(initialize);
      // detailedView();
      
    });


// Not sure why the "$" yields a undefined here.
//  $(document).ready(function() {
//  google.setOnLoadCallback(initialize);
// console.log("Js loaded");
//  });
