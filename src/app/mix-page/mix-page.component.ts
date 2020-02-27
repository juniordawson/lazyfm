import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { mixes } from '../mixes';

@Component({
  selector: 'app-mix-page',
  templateUrl: './mix-page.component.html',
  styleUrls: ['./mix-page.component.scss']
})
export class MixPageComponent implements OnInit {
  mix;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.mix = mixes[+params.get('mixId')];
    });
  }
}

