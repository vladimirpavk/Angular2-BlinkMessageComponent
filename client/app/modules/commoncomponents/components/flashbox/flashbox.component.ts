import { Component, OnInit, Input } from '@angular/core';

let __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'flash-box',    
    templateUrl: 'flashbox.component.html',
    styleUrls: ['flashbox.component.css']
})
export class FlashBoxComponent implements OnInit{
   
    private isShown: boolean = true;
    //counter handler
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
    
    private _setTimeout: number = 2000;    
    @Input("setTimeout")
    set setTimeout(value : number){
        this._setTimeout= value;      
    }

    private type_default: boolean = false;
    private type_primary: boolean = false;
    private type_success: boolean = false;
    private type_info: boolean = false;
    private type_warning: boolean = false;
    private type_danger: boolean = false;

    private style_type: boolean[] = [false, false, false, false, false, false];

    private position_tr: boolean = false;
    private position_tm: boolean = false;
    private position_tl: boolean = false;
    private position_cr: boolean = false;
    private position_cm: boolean = false;
    private position_cl: boolean = false;
    private position_br: boolean = false;
    private position_bm: boolean = false;
    private position_bl: boolean = false;

    private style_position: boolean[] = [false, false, false, false, false, false, false, false, false];

    constructor(){}

    ngOnInit(){
        this.setType();
        this.setPosition();
    }    

    private setType(): void{
        switch(this._type){
            case "default":
            {
                //this.type_default = true;
                this.style_type= [true, false, false, false, false, false];
                break;
            };
            case "primary":
            {
                this.style_type= [false, true, false, false, false, false];
                //this.type_primary = true;
                break;
            };
            case "success":
            {
                this.style_type= [false, false, true, false, false, false];
                //this.type_success = true;
                break;
            };
            case "info":
            {
                this.style_type= [false, false, false, true, false, false];
                //this.type_info = true;
                break;
            };
            case "warning":
            {
                this.style_type= [false, false, false, false, true, false];
                //this.type_warning = true;
                break;                
            };
            case "danger":
            {
                this.style_type= [false, false, false, false, false, true];
                //this.type_danger = true;
                break;
            }
        }
    }

    private setPosition(): void{
        switch(this._position){
            case "tr":{
                this.style_position= [true, false, false, false, false, false, false, false, false];
                //this.position_tr = true;
                break;
            };
            case "tm":{
                this.style_position= [false, true, false, false, false, false, false, false, false];               
                //this.position_tm = true;
                break;
            };
            case "tl":{
                this.style_position= [false, false, true, false, false, false, false, false, false];  
               // this.position_tl = true;
                break;
            };
            case "cr":{
                this.style_position= [false, false, false, true, false, false, false, false, false];  
                //this.position_cr = true;
                break;
            };
            case "cm":{
                 this.style_position= [false, false, false, false, true, false, false, false, false];  
                //this.position_cm = true;
                break;
            };
            case "cl":{
                this.style_position= [false, false, false, false, false, true, false, false, false];  
                //this.position_cl = true;
                break;
            };
            case "br":{
                this.style_position= [false, false, false, false, false, false, true, false, false];  
                //this.position_br = true;
                break;
            };
            case "bm":{
                this.style_position= [false, false, false, false, false, false, false, true, false];  
                //this.position_bm = true;
                break;
            };
            case "bl":{
                this.style_position= [false, false, false, false, false, false, false, false, true];  
               // this.position_bl = true;
                break;
            };
        }
    }

    public flashOnce(): void{        
        this.isShown=!this.isShown;

        setTimeout(()=> {            
            this.isShown=!this.isShown;        
        }, this._setTimeout);
    }

    public show(): void{
        this.isShown=false;
    }

    public hide(): void{
         this.isShown=true;
    }

    public startFlashing(): void{
        //if already blinking do nothing
        if(this.intervalCounter!=0) return;

        this.isShown=!this.isShown;

        this.intervalCounter=setInterval(()=> {            
            this.isShown=!this.isShown;        
        }, this._setTimeout);
    }

    public stopFlashing(){
        if(this.intervalCounter != 0){
            clearInterval(this.intervalCounter);
            this.intervalCounter=0;
            //check if left in state visible
            if(!this.isShown) this.isShown=true;
        }
    }

}