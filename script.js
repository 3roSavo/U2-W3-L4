





const loadFirstImages = (object) => {
    
    const photos = object.photos

    for (let i = 0; i< 9; i++) {
        const urlPhoto = photos[i].src.medium
        const image = document.getElementsByTagName("img")[i]
        image.src = urlPhoto


        console.log(urlPhoto)
    }
        

}


fetch("https://api.pexels.com/v1/search?query=monkeys", {
    headers: {
        Authorization: "ifbuQCuGTrbmEOof10n9yXGfVaWjUFcpLwodmFpq5GtLg0BZxQJcDjHy"
    }
})

.then( (response) => {
    if (response.ok) {
        return response.json()
    } else {
        throw new Error
    }

})

.then( (obj) => {
    console.log(obj)

    loadFirstImages(obj)
})



.catch( () => {
    console.log("boooogh")
})