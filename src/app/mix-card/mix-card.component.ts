import { Component, Input } from '@angular/core';

import { MixCard } from './mix-card';
import { mixes } from '../mixes';

@Component({
  selector: 'app-mix-card',
  templateUrl: './mix-card.component.html'
})

export class MixCardComponent {
  mixes = mixes;
}
