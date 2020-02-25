import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixPageComponent } from './mix-page/mix-page.component';
import { MixCardComponent } from './mix-card/mix-card.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: MixCardComponent },
    { path: 'mixes/:mixId', component: MixPageComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
