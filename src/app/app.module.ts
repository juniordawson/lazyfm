import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MixListComponent } from './mix-list/mix-list.component';
import { MixPageComponent } from './mix-page/mix-page.component';
import { MixCardComponent } from './mix-card/mix-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MixListComponent,
    MixPageComponent,
    MixCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
