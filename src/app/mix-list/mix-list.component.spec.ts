import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MixListComponent } from './mix-list.component';

describe('MixComponent', () => {
  let component: MixListComponent;
  let fixture: ComponentFixture<MixListComponent>;

  beforeEach(waitForAsync(() => {
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
