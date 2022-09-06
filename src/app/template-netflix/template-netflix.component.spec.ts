import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateNetflixComponent } from './template-netflix.component';

describe('TemplateNetflixComponent', () => {
  let component: TemplateNetflixComponent;
  let fixture: ComponentFixture<TemplateNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateNetflixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
