export class Image {
    constructor(data) {
        this.imgUrl = data.imgUrl
    }

    get imageTemplate() {
        return `
        <img src="${this.imgUrl}" alt="">`
    }
}


const hello = {

    "url": "https://pixabay.com/get/g3958c549bf18bfd320cf5bd447ec0c96ed33f7d23f9cfb6cf20149b925f67a7a2050d50972e6f0344b952fef99bac335_640.jpg",
    "imgUrl": "https://pixabay.com/get/g3958c549bf18bfd320cf5bd447ec0c96ed33f7d23f9cfb6cf20149b925f67a7a2050d50972e6f0344b952fef99bac335_640.jpg",
    "largeImgUrl": "https://pixabay.com/get/g3365ad70921bee4869a9985986608f0b14c8bc60a9c1f6db78a13fc78eef9ca10452d1bb3807c5bd55e470ef71c7518110d070fee39b781ebf8dbbc329205747_1280.jpg",
    "tags": "mountain, volcano, peak",
    "author": "kimura2",
    "query": "mountain"

}