import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuC } from '../menu/handler';
import { appRouting } from '../root/routing';
import { UserMD } from '../users/module';
import { AppC } from './component';

@NgModule( {
  bootstrap: [ AppC ],
  declarations: [
    AppC,
    MenuC,
  ],
  imports: [
    appRouting,
    BrowserModule,
    HttpClientModule,
    UserMD,
  ],
  providers: [ ],
} )
export class AppMD { }
