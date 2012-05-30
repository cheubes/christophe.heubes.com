google.load("feeds", "1");

function loadBlogginAtXebiaFr() {
	var feed = new google.feeds.Feed("http://blog.xebia.fr/author/cheubes/feed/");
	feed.setNumEntries(50);
	feed.load(function(result) {
		if (!result.error) {
			var container = document.getElementById("blogginAtXebiaFr");
			var list = document.createElement("ul");
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var listItem = document.createElement("li");
				
				var link = document.createElement("a");
				link.setAttribute("href", entry.link);
				link.appendChild(document.createTextNode(entry.title));
				listItem.appendChild(link);
				list.appendChild(listItem);
			}
			container.appendChild(list);
		}
	});
}

google.setOnLoadCallback(loadBlogginAtXebiaFr);