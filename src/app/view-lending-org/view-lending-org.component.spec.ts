import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLendingOrgComponent } from './view-lending-org.component';

describe('ViewLendingOrgComponent', () => {
  let component: ViewLendingOrgComponent;
  let fixture: ComponentFixture<ViewLendingOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLendingOrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLendingOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
