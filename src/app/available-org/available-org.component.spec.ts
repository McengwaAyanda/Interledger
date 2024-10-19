import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableOrgComponent } from './available-org.component';

describe('AvailableOrgComponent', () => {
  let component: AvailableOrgComponent;
  let fixture: ComponentFixture<AvailableOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableOrgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
