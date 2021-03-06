import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MixPageComponent } from './mix-page.component';

describe('MixPageComponent', () => {
  let component: MixPageComponent;
  let fixture: ComponentFixture<MixPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MixPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
