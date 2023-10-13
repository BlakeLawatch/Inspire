import { AppState } from "../AppState.js"
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawImage() {
    const image = AppState.image
    document.body.style.backgroundImage = `url(${image?.imgUrl})`
    // setHTML('backImage', image?.imageTemplate)
}





export class ImageController {
    constructor() {

        AppState.on('image', _drawImage)
        this.getImage()
    }


    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.log(error);
            Pop.error(error)

        }
    }
}