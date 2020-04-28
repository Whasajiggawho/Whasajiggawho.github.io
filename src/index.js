let quoteDiv=document.getElementById('quote')
quoteDiv.innerHtml += `<p>test</p>`
fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
	quoteDiv.innerHtml += `<p> ${quote.quote} </p>`
})