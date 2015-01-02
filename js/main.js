google.load("feeds", "1");
google.load("jquery", "1.4.2");

/*
 Use this idea to see if more items can be retrieved from the feed.
 google.load("feeds", "1",{"callback" : pageLoaded});
 */

 function initialize() {
  var feed = new google.feeds.Feed("http://feeds2.feedburner.com/tedtalks_video/");
      // feed = feed.setNumEntries(6);
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
     // feed.setNumEntries(6);
   });
    };

    document.addEventListener("DOMContentLoaded", function(event) { 
      google.setOnLoadCallback(initialize);
    });

/* 
Not sure why the "$" yields a undifined here.
 $(document).ready(function() {
 google.setOnLoadCallback(initialize);
 });
 */