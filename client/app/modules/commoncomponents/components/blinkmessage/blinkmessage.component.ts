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

    private intervalCounter: number = 0;

    private _type: string = "primary";
    @Input("type")
    set type(value: string){
        this._type= value;
        this.setType();
    }
    private _position: string = "tm";
    @Input("position")
    set position(value: string){
        this._position= value;
        this.setPosition();
    }
    private _maxwidth: string = "300px";
    @Input("maxwidth")
    set maxwidth(value: string){
        this._maxwidth= value;
    }

    @Input() neki_broj: number = 20;

    private type_default: boolean = false;
    private type_primary: boolean = false;
    private type_success: boolean = false;
    private type_info: boolean = false;
    private type_warning: boolean = false;
    private type_danger: boolean = false;

    private position_tr: boolean = false;
    private position_tm: boolean = false;
    private position_tl: boolean = false;
    private position_cr: boolean = false;
    private position_cm: boolean = false;
    private position_cl: boolean = false;
    private position_br: boolean = false;
    private position_bm: boolean = false;
    private position_bl: boolean = false;

    constructor(){}

    ngOnInit(){
        this._title="PopUp Component";
        this.setType();
        this.setPosition();
    }    

    private setType(): void{
        switch(this.type){
            case "default":
            {
                this.type_default = true;
                break;
            };
            case "primary":
            {
                this.type_primary = true;
                break;
            };
            case "success":
            {
                this.type_success = true;
                break;
            };
            case "info":
            {
                this.type_info = true;
                break;
            };
            case "warning":
            {
                this.type_warning = true;
                break;                
            };
            case "danger":
            {
                this.type_danger = true;
                break;
            }
        }
        console.log("Type primary : "+this.type_primary);
    }

    private setPosition(): void{
        switch(this.position){
            case "tr":{
                this.position_tr = true;
                break;
            };
            case "tm":{
                this.position_tm = true;
                break;
            };
            case "tl":{
                this.position_tl = true;
                break;
            };
            case "cr":{
                this.position_cr = true;
                break;
            };
            case "cm":{
                this.position_cm = true;
                break;
            };
            case "cl":{
                this.position_cl = true;
                break;
            };
            case "br":{
                this.position_br = true;
                break;
            };
            case "bm":{
                this.position_bm = true;
                break;
            };
            case "bl":{
                this.position_bl = true;
                break;
            };
        }
        console.log("This position : "+this.position_tr);
    }

    public blinkOnce(): void{        
        this.isShown=!this.isShown;

        setTimeout(()=> {            
            this.isShown=!this.isShown;        
        }, this.setTimeout);
    }

    public startBlinking(): void{
        //if already blinking do nothing
        if(this.intervalCounter!=0) return;

        this.isShown=!this.isShown;

        this.intervalCounter=setInterval(()=> {            
            this.isShown=!this.isShown;        
        }, this.setTimeout);
    }

    public stopBlinking(){
        if(this.intervalCounter != 0){
            clearInterval(this.intervalCounter);
            this.intervalCounter=0;
        }
    }

}