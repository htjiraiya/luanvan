import multer, { StorageEngine } from "multer";

export default class UploadHelper {
    storage: StorageEngine
    upload: multer.Multer

    constructor(folder: string = '') {
        this.storage = multer.diskStorage({
            destination: function (req: any, file: any, cb: any) {
                cb(null, `public/${folder}`)
            },
            filename: function (req: any, file: any, cb: any) {
                cb(null, Date.now() + '-' + file.originalname)
            }
        })

        this.upload = multer({ storage: this.storage })
    }

    uploadImage(name: string) {
        return this.upload.single(name)
    }
}