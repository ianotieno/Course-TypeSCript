export class Course{
    id:number
    name:string
    duration:string
    tuition :string
    mode:string

    constructor(id:number,name:string,duration:string,tuition:string,mode:string){
        this.id=id,
        this.name=name,
        this.duration=duration
        this.tuition=tuition
        this.mode=mode

    }
}