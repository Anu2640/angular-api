import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMemesComponent } from './display-memes.component';

describe('DisplayMemesComponent', () => {
  let component: DisplayMemesComponent;
  let fixture: ComponentFixture<DisplayMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
