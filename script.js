





const loadFirstImages = (object) => {
    const buttonLoad = document.getElementsByClassName("btn btn-primary my-2")[0]
    buttonLoad.addEventListener("click", () => {


        const images = document.querySelectorAll(".bd-placeholder-img.card-img-top")

        // const photos = object.photos
        // for (let i = 0; i < images.length; i++) {
        //     const urlPhoto = photos[i].src.medium
        //     images[i].src = urlPhoto
        // }

        images.forEach( (image,i) => {
            const urlImage =  object.photos[i].src.medium
            images[i].src = urlImage
        })
    })
}

const loadSecondImages = (object) => {
    const buttonLoad = document.getElementsByClassName("btn btn-secondary my-2")[0]
    buttonLoad.addEventListener("click", () => {


        const images = document.querySelectorAll(".bd-placeholder-img.card-img-top")

        // const photos = object.photos
        // for (let i = 0; i < images.length; i++) {
        //     const urlPhoto = photos[i].src.medium
        //     images[i].src = urlPhoto
        // }

        images.forEach( (image,i) => {
            const urlImage =  object.photos[i].src.medium
            images[i].src = urlImage
        })
    })
}


fetch("https://api.pexels.com/v1/search?query=monkeys", {
    headers: {
        authorization: "ifbuQCuGTrbmEOof10n9yXGfVaWjUFcpLwodmFpq5GtLg0BZxQJcDjHy"
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
    loadSecondImages(obj)
})



.catch( () => {
    console.log("boooogh")
})