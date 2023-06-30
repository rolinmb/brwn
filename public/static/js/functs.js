window.addEventListener('popstate', (event) => {
	if (event.state === null) { 
		let id = "index-content";
		window.history.pushState({id}, null, "index.html#index-content");
		return; 
	}
	// console.log("Browser Navigated To: ",event.target);
	let contentId = event.state.id;
	// console.log("Browser Nav Event State Content Id: ",contentId);
	var stateBanner;
	switch (contentId.split("-")[0]) {
		case "index":
			stateBanner = "static/img/ban1.jpg";
			break;
		case "why":
			stateBanner = "static/img/ban4.jpg";
			break;
		case "review":
			stateBanner = "static/img/ban5.jpg";
			break;
		case "services":
			stateBanner = "static/img/ban1.jpg";
			break;
		case "experts":
			stateBanner = "static/img/ban4.jpg";
			break;
		case "sbio":
			stateBanner = "static/img/ban5.jpg";
			break;
		case "kbio":
			stateBanner = "static/img/ban3.jpg";
			break;
		case "contact":
			stateBanner = "static/img/ban2.jpg";
			break;
	}
	// Maybe overkill since handleClick is already called;
	// but all we're really doing is hiding content
	let contents = document.getElementsByClassName("text-content");
	for (let i = 0; i < contents.length; i++) {
		contents[i].style.display  = "none";
	}
	document.getElementById(event.state.id).style.display = "block";
	let banner = document.getElementById("banner");
	if (banner.src != stateBanner) {
		banner.src = stateBanner;
	}
});

handleClick = (state) => {
	let id = state["contentId"];
	window.history.pushState({id}, null, 'index.html#'+id);
	let contents = document.getElementsByClassName("text-content");
	for (let i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}
	document.getElementById(id).style.display = "block";
	let banner = document.getElementById("banner");
	if (banner.src != state['bannr']) {
		banner.src = state['bannr'];
	}
}

init = () => {
	window.onload = () => {
		document.getElementById("index-btn").click();
	}
}

indexState = {
	"contentId": "index-content",
	"bannr": "static/img/ban1.jpg"
}

whyState = {
	"contentId": "why-content",
	"bannr": "static/img/ban4.jpg"
}

reviewState = {
	"contentId": "review-content",
	"bannr": "static/img/ban5.jpg"
}

serviceState = {
	"contentId": "services-content",
	"bannr": "static/img/ban1.jpg"
}

expertState = {
	"contentId": "experts-content",
	"bannr": "static/img/ban4.jpg"
}

sbioState = {
	"contentId": "sbio-content",
	"bannr": "static/img/ban5.jpg"
}

kbioState = {
	"contentId": "kbio-content",
	"bannr": "static/img/ban3.jpg"
}

contactState = {
	"contentId": "contact-content",
	"bannr": "static/img/ban2.jpg"
}