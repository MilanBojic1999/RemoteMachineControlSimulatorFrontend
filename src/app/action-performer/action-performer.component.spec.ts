import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionPerformerComponent } from './action-performer.component';

describe('ActionPerformerComponent', () => {
  let component: ActionPerformerComponent;
  let fixture: ComponentFixture<ActionPerformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionPerformerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPerformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
