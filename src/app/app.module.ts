import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MixCardComponent } from './mix-card/mix-card.component';
import { MixPageComponent } from './mix-page/mix-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MixCardComponent,
    MixPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
