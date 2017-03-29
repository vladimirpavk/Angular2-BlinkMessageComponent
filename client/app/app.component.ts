/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

    private radioButtonPositionClicked(value: string){
      console.log(value);
    }

    private radioButtonTypeClicked(value: string){
      console.log(value);
    }

    private readSelect(value: any){
      console.log(value);
    }

} 
