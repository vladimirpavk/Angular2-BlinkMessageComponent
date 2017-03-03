import { Component, OnInit, Input } from '@angular/core';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'blink-message',    
    templateUrl: 'blinkmessage.component.html',
    styleUrls: ['blinkmessage.component.css']
})
export class BlinkMessageComponent implements OnInit{

    @Input() setTimeout: number= 2000;
    @Input() popUpText: string = "All of these elements will be faded out using a CSS3 opacity transition.";
    @Input() ok: boolean = false;

    private _title:string;
    private isShown: boolean = true;

    constructor(){}

    ngOnInit(){
        this._title="PopUp Component";
    }    

    public flashOnce(): void{        
        this.isShown=!this.isShown;

        setTimeout(()=> {            
            this.isShown=!this.isShown;        
        }, this.setTimeout);
    }

    public startFlashing(): void{
        this.isShown=!this.isShown;

        setInterval(()=> {            
            this.isShown=!this.isShown;        
        }, this.setTimeout);
    }
}