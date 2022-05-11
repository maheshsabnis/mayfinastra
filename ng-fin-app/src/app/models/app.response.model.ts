export class ResponseData{
  constructor(
    public message:string,
    public data:any,
    public token:string
  ){}
}

export class User {
  constructor(
    public username:string,
    public password:string
    ){
  }
}
