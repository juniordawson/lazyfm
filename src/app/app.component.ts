import { Component } from '@angular/core';

import { MixCard } from './mix-card/mix-card';

import allRecordings from '../assets/data/all-recordings.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'lazyfm';
  mixList: MixCard[] = allRecordings.mixes;
}


