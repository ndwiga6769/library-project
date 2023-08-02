const books = document.getElementById("books");



//fetch movies to display in the movie sites
    fetch("http://localhost:3000/books")
    .then(res => res.json())
    .then(data => displayBooks(data))

    //A fetch function will display images
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
