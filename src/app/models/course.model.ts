export class Course {
    id:string;
    name: string;
    method: string;
    start: string;
    end: string;
    flagship: boolean;
    teachers:string[];
    active: boolean;
    description: string;
    content: string[];
    duration: number;
    schedule:number;
    constructor(){
        this.id='';
        this.active=true;
        this.name='';
        this.content=[];
        this.start='';
        this.end='';
        this.method='Hybrid';
        this.flagship=true;
        this.teachers=['Shailesh','Narendra','Tom'];
        this.description="<TO DO>";
        this.duration=100;
        this.schedule=6;
    }

}