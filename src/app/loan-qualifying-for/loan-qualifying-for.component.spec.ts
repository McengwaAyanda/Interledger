import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanQualifyingForComponent } from './loan-qualifying-for.component';

describe('LoanQualifyingForComponent', () => {
  let component: LoanQualifyingForComponent;
  let fixture: ComponentFixture<LoanQualifyingForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanQualifyingForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanQualifyingForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
