import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLenderComponent } from './admin-lender.component';

describe('AdminLenderComponent', () => {
  let component: AdminLenderComponent;
  let fixture: ComponentFixture<AdminLenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
