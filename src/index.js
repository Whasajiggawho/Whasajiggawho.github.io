let quoteDiv= document.getElementById('quote')
fetch('https://api.kanye.rest')
	.then(res => res.json())
	.then(quote => {
		quoteDiv.innerHtml += '<p> ${quote.quote} </p>'
	})