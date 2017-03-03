/// <reference path="../../../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlinkMessageComponent }   from './components/blinkmessage/blinkmessage.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BlinkMessageComponent ],
  exports: [ BrowserModule, BlinkMessageComponent ]
})
export class CommonComponentsModule { }