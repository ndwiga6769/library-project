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



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor neque vitae justo rutrum, id volutpat lorem tempor. Fusce eget nisl et ex cursus consequat. Phasellus condimentum, velit eu tristique consequat, metus sapien congue ex, a lacinia elit nulla non sapien. Nullam id risus in ex consectetur tempor nec eu risus. Suspendisse feugiat lacus nec tincidunt ultricies. Integer quis dolor nec odio condimentum faucibus. Duis ultricies quam eget quam laoreet, ac convallis lacus viverra. Sed sit amet lectus eget lacus egestas dignissim. Vivamus in purus nec eros suscipit hendrerit a id turpis. Integer fermentum dui at risus lacinia, in mattis magna ullamcorper. Maecenas congue odio sed mauris finibus, at tincidunt ligula consequat. Vivamus et urna nec magna vestibulum bibendum. Maecenas dictum euismod tellus, in pharetra velit vestibulum non. Sed malesuada nec nunc eget lacinia.

Etiam dapibus velit sed erat consectetur varius. Donec scelerisque, lacus vel posuere fermentum, metus sapien commodo ipsum, sit amet ultricies quam felis ac nunc. Quisque malesuada accumsan tellus, eget suscipit est. Vivamus vestibulum vestibulum odio, ac efficitur sapien vestibulum non. Duis lobortis, ipsum id eleifend cursus, nisi nisi tempus purus, nec consectetur ligula tortor eu ex. Duis tempor tellus a ex vulputate, vel auctor elit vestibulum. Sed eleifend, turpis ac hendrerit vulputate, metus quam fermentum arcu, a lobortis nulla purus sit amet nisi. Suspendisse potenti. Suspendisse potenti. Nunc nec augue aliquet, tempor sapien nec, hendrerit velit. Suspendisse et ipsum orci. Ut scelerisque mauris eget metus cursus, a volutpat sem pharetra. Etiam luctus ex nec tortor ultricies, et convallis risus luctus. Sed rutrum magna non ante dictum, vel volutpat nunc lacinia. Sed tristique sapien vel nunc pharetra, vel euismod tellus suscipit.

In consequat, nisl ut sollicitudin tempor, arcu eros vehicula purus, at elementum magna nunc nec mi. Cras tincidunt, nunc a pharetra fermentum, nisi mauris aliquet nunc, sit amet vehicula magna turpis id nisi. Integer vel enim commodo, consectetur risus nec, consectetur purus. Sed auctor pharetra purus, vel convallis libero placerat et. Praesent ut libero sed sem fermentum cursus. Aenean faucibus turpis in dui elementum, vitae tristique mi dignissim. Integer eget metus auctor, dapibus mi ut, accumsan mauris. Morbi at mauris et velit tincidunt hendrerit eu nec risus. Sed ut aliquet odio. Vivamus quis lacinia purus. Nam eleifend lobortis elit. Vivamus vel consectetur est. Phasellus ultricies ante in dui efficitur, vitae lacinia ipsum viverra. Sed dapibus ligula vel leo aliquet bibendum. Curabitur et vehicula sapien.






