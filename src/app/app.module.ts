import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MixListComponent } from './mix-list/mix-list.component';
import { MixPageComponent } from './mix-page/mix-page.component';
import { MixFilterClass } from './pipes/search/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MixListComponent,
    MixPageComponent,
    MixFilterClass
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
