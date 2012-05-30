google.load("feeds", "1");

function loadBlogginAtXebiaFr() {
	var feed = new google.feeds.Feed("http://blog.xebia.fr/author/cheubes/feed/");
	feed.setNumEntries(50);
	feed.load(function(result) {
		if (!result.error) {
			var container = document.getElementById("blogginAtXebiaFr");
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var div = document.createElement("div");
				var icone = document.createElement("i");
				icone.setAttribute("class", "icon-play-circle");
				div.appendChild(icone);
				var link = document.createElement("a");
				link.setAttribute("href", entry.link);
				link.appendChild(document.createTextNode(" " + entry.title));
				div.appendChild(link);
				container.appendChild(div);
			}
		}
	});
}

google.setOnLoadCallback(loadBlogginAtXebiaFr);