import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeterloginComponent } from './beterlogin.component';

describe('BeterloginComponent', () => {
  let component: BeterloginComponent;
  let fixture: ComponentFixture<BeterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeterloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
