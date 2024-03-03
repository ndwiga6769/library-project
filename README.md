# Kabarak Online Website Library Assistant
## Functionality
The following is a website for kabarak university which mainly
 incorporates the library part of the website its main purpose  
is to make surethat the readers can have a preview of the book  
before they can borrow the book. The book in site allows you to 
see a summary of who the writer is and what has he incorporated
his or her piece of art the summarry of the book mainly incorporates 
the title of the book, the outhor of the book and the pages of the 
book it also incorporates the year when the book was released and allows
### Block of codes
The site has a number of functionalities we will be able
 to take a deep dive into the functionalities of the site
 the application within the site will be able to fetch books 
 from a local API
 the application will also be able to post books in the API
The applictaion will also be able get users feedback and allows
 for the administrator to see what the users


#### The below code is used to fetch books from a local API and
//fetch books to display in the library site
    fetch("https://vercel-db-json.vercel.app/books")
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
#### The other code below is a code to post users info into the json server
 fetch(dataUrl,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }, 
        body: JSON.stringify(entryObj)
    })
.then(res => res.json())
.then(data => console.log(data))

}
postform.addEventListener('submit',addExperience)
#### The code below is to post a review of a book into the site
let addBook = (event) => {
    event.preventDefault()

    let author = document.getElementById('author').value
    let imageLink = document.getElementById('imageLink').value
    let link = document.getElementById('link').value
    let title = document.getElementById('title').value
    let country = document.getElementById('country').value
    let language = document.getElementById('language').value
    let pages = document.getElementById('pages').value
    let year = document.getElementById('year').value

const entryData = {
    author:author,
    imageLink:imageLink,
    link:link,
    title:title,
    country:country,
    language:language,
    pages:pages,
    year:year,
}
fetch("https://vercel-db-json.vercel.app/books",{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    body:JSON.stringify(entryData)
})
.then(res => res.json())
.then(data => console.log(data))
}
let add = document.getElementById('add')
add.addEventListener('submit',addBook)
#### Contribution
To make contributions to my project log in to my github page ndwiga6769
an check the public repository of phase-1 project clone and make
contributions to the webite for a better looking application
#### LICENSE
This project is licensed under the [MIT License](LICENSE.txt). 
Please see the [LICENSE.txt](LICENSE.txt) file for more details.
