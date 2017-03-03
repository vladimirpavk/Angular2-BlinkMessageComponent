/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { CommonComponentsModule } from './modules/commoncomponents/commoncomponents.module';
import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ CommonComponentsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }