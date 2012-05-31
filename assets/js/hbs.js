// Xebia Blog integration -------------

google.load("feeds", "1");

function loadBloggingAtXebiaFr() {
	var feed = new google.feeds.Feed("http://blog.xebia.fr/author/cheubes/feed/");
	feed.setNumEntries(50);
	feed.load(function(result) {
		if(!result.error) {
			var container = document.getElementById("blogginAtXebiaFr");
			for(var i = 0; i < result.feed.entries.length; i++) {
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

google.setOnLoadCallback(loadBloggingAtXebiaFr);

// En of Xebia Blog integration -------

// Github integration -----------------

// Raw
$(document).ready(function() {

	$.ajax({
		url : "https://api.github.com/users/cheubes/repos",
		dataType : "jsonp",
		success : function(returndata) {
			var container = document.getElementById("github");
			var originalsDiv = document.createElement("div");
			var forkedDiv = document.createElement("div");
			for(var i = 0; i < returndata.data.length; i++) {
				var entryDiv = document.createElement("div");
				console.log(returndata.data[i]);
				var icone = document.createElement("i");
				icone.setAttribute("class", "icon-play-circle");
				entryDiv.appendChild(icone);
				var link = document.createElement("a");
				link.setAttribute("href", returndata.data[i].html_url);
				link.appendChild(document.createTextNode(" " + returndata.data[i].name));
				entryDiv.appendChild(link);
				if(returndata.data[i].fork) {
					forkedDiv.appendChild(entryDiv);
				} else {
					originalsDiv.appendChild(entryDiv);
				}
			}
			container.appendChild(originalsDiv);
			container.appendChild(document.createElement("hr"));			
			container.appendChild(forkedDiv);
		}
	});

});

// End of Github integration ----------

