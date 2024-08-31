import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentCardComponent } from './create-student-card.component';

describe('CreateStudentCardComponent', () => {
  let component: CreateStudentCardComponent;
  let fixture: ComponentFixture<CreateStudentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
