import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MixPageComponent } from './mix-page/mix-page.component';
import { MixListComponent } from './mix-list/mix-list.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: MixListComponent },
    { path: 'mixes/:mixId', component: MixPageComponent }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }


