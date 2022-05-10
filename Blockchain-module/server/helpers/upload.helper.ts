import multer, { StorageEngine } from "multer";
import { UploadFileCallBackType } from "./base/base.helper";
import {Request} from 'express'


export default class UploadHelper {
    storage: StorageEngine
    upload: multer.Multer

    constructor(folder: string = '') {
        this.storage = multer.diskStorage({
            destination: function (req: Request, file: Express.Multer.File, cb: UploadFileCallBackType){
                cb(null, `public/${folder}`)
            },
            filename: function (req: Request, file: Express.Multer.File, cb: UploadFileCallBackType) {
                cb(null, Date.now() + '-' + file.originalname)
            }
        })

        this.upload = multer({ storage: this.storage })
    }

    uploadImage(name: string) {
        return this.upload.single(name)
    }
}