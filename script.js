//http://localhost:3000
//https://vercel-db-json.vercel.app

let dataUrl = 'https://vercel-db-json.vercel.app/records'

let addExperience = (event) =>{
    event.preventDefault()
    let title = document.getElementById('title').value
    let date = document.getElementById('date').value
    let experience = document.getElementById('experience').value
  

    const entryObj = {
        title:title,
        date:date,
        experience:experience,
    }
    // two parameters
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


