import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachMovieComponent } from './each-movie.component';

describe('EachMovieComponent', () => {
  let component: EachMovieComponent;
  let fixture: ComponentFixture<EachMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
