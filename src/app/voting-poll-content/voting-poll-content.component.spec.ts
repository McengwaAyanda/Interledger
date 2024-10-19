import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingPollContentComponent } from './voting-poll-content.component';

describe('VotingPollContentComponent', () => {
  let component: VotingPollContentComponent;
  let fixture: ComponentFixture<VotingPollContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotingPollContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VotingPollContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
