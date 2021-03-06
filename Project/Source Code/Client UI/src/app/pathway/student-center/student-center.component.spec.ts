import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCenterComponent } from './student-center.component';

describe('StudentCenterComponent', () => {
  let component: StudentCenterComponent;
  let fixture: ComponentFixture<StudentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
