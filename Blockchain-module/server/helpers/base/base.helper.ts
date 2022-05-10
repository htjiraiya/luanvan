type UploadFileCallBackType = (err:  Error | null, destination: string) => void

type UserType = {
    username: string
}

export {
    UploadFileCallBackType,
    UserType
}