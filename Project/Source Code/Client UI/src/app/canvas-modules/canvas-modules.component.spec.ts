import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasModulesComponent } from './canvas-modules.component';

describe('CanvasModulesComponent', () => {
  let component: CanvasModulesComponent;
  let fixture: ComponentFixture<CanvasModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
