import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMachComponent } from './show-mach.component';

describe('ShowMachComponent', () => {
  let component: ShowMachComponent;
  let fixture: ComponentFixture<ShowMachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
