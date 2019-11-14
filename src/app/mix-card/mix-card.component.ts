import { Component, Input } from '@angular/core';

import { MixCard } from './mix-card';

@Component({
  selector: 'app-mix-card',
  templateUrl: './mix-card.component.html'
})

export class MixCardComponent {
  @Input() mix: MixCard;
}
