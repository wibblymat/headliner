function changeLink(link)
{
	"use strict";
	var request = new XMLHttpRequest();
	var url = link.getAttribute("data-expanded-url") || link.href;
	url.replace(/^https?/, "");
	request.open("GET", url);
	request.responseType = "document";
	request.onreadystatechange = function()
	{
		if(request.readyState === 4 && request.status === 200)
		{
			link.title = request.response.title;
		}
	};
	request.send();
}

var links = document.querySelectorAll("a[href*='//bbc.in/'], a[href*='//t.co/'][data-expanded-url*='//bbc.in/']");

for(var i = 0; i < links.length; i++)
{
	changeLink(links[i]);
}

