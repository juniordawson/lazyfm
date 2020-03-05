import { Component, Input } from '@angular/core';
import { mixes } from '../mixes';

@Component({
  selector: 'app-mix-list',
  templateUrl: './mix-list.component.html'
})

export class MixListComponent {
  mixes = mixes;
  layout;
}
