import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixListComponent } from './mix-list.component';

describe('MixComponent', () => {
  let component: MixListComponent;
  let fixture: ComponentFixture<MixListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
