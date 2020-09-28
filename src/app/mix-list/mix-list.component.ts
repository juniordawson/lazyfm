import { Component, Input } from '@angular/core';
import { mixes } from '../mixes';

@Component({
  selector: 'app-mix-list',
  templateUrl: './mix-list.component.html'
})

export class MixListComponent {
  mixes = mixes;
  layout;
  search;
  finalResult: any = [];

  transform(event){
    if(event != '' ) {
      this.finalResult = [];
      return this.mixes.filter(e => {
        e.tracklist.filter(ee => {
        console.log(ee);
        if(ee.artist.toLowerCase().startsWith(event) === true) {
          this.finalResult.push(e);
        } else if(e.mixId.toLowerCase().startsWith(event) === true) {
          this.finalResult = [];
          this.finalResult.push(e);
        }
      })
    })
  }
}
}