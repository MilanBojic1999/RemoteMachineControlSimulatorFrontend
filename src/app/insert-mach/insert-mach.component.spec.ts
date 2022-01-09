import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMachComponent } from './insert-mach.component';

describe('InsertMachComponent', () => {
  let component: InsertMachComponent;
  let fixture: ComponentFixture<InsertMachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
