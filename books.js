
const books = document.getElementById("books");



//fetch books to display in the library site
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => displayBooks(data))

    //A fetch function will display the relevant data
function displayBooks (data) {
    data.map(i => {
        let myBooks = document.createElement('div')
        myBooks.innerHTML = `
        <card id="mycard">
            <img src="${i.imageLink}">
            <h4>${i.title}</h4>
            <a href="${i.link}">Book Summary</a>
            <p>Author: ${i.author}</p>
            <p>Pages: ${i.pages}</p>
            <p>Language: ${i.language}</p>
        </card>
        `;
        books.appendChild(myBooks);
})

}
// post books to the site
let addBook = (event) => {
    event.preventDefault()
    let id = document.getElementById('idNumber').value
    let author = document.getElementById('author').value
    let imageLink = document.getElementById('imageLink').value
    let link = document.getElementById('link').value
    let title = document.getElementById('title').value
    let country = document.getElementById('country').value
    let language = document.getElementById('language').value
    let pages = document.getElementById('pages').value
    let year = document.getElementById('year').value

const entryData = {
    id:id,
    author:author,
    country:country,
    imageLink:imageLink,
    language:language,
    link:link,
    pages:pages,
    title:title,
    year:year,
}
console.log(entryData)
fetch("http://localhost:3000/books",{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        //Accept: 'application/json',
    },
    body:JSON.stringify(entryData)
})
.then(res => res.json())
.then(data => console.log(data))
}
let add = document.getElementById('add')
add.addEventListener('submit',addBook)
