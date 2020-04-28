let quoteDiv= document.getElementById('quote')
fetch('https://api.kanye.rest')
	.then(res => res.json())
	.then(quote => {
		quotesDiv.innerHtml += '<p> ${quote.quote} </p>'
	})