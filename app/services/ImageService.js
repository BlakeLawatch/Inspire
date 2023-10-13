import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js";


class ImageService {

    async getImage() {
        const res = await api.get('api/images')
        AppState.image = new Image(res.data)
        console.log(AppState.image);

    }

}





export const imageService = new ImageService()