
/*
The File ContentDisposition =>  form-data; name="Image"; filename="fitToCmposite.jpeg"
The File ContentType =>  image/jpeg
The File Header Values =>  System.Collections.Generic.Dictionary`2+ValueCollection[System.String,Microsoft.Extensions.Primitives.StringValues]
The File Header Count =>  2
The File Header ContentLength =>
The File Leangth =>  154334
The File Name =>  Image
The File FileName =>  fitToCmposite.jpeg

*/ 
export default interface IFile {
    contentDisposition:string
    contentType:string
    length:number
    name:string
    fileName: string
}