
const quote = document.getElementById("quote");
const authors = document.getElementById("author");
const button  = document.getElementById("btn");

fetch("https://type.fit/api/quotes")
.then(result=>result.json()).then(result=> {
    let max = result.length
    let min = 0

    button.onclick = ()=>{
        let k = Math.floor(Math.random()*(max))
        console.log(result[k])
        quote.innerHTML = result[k].text
        if (result[k].author != null){
            authors.innerHTML = `-${result[k].author}`
        }
    }
})
