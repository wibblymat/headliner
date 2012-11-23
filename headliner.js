function changeLink(link)
{
	"use strict";
	var request = new XMLHttpRequest();
	request.open("GET", link.href);
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

var links = document.querySelectorAll("a[href*='http://bbc.in/']");

for(var i = 0; i < links.length; i++)
{
	changeLink(links[i]);
}

