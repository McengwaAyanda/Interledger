import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-poll',
  standalone: true,
  imports: [],
  templateUrl: './voting-poll.component.html',
  styleUrl: './voting-poll.component.css'
})
export class VotingPollComponent {
voteResult: string | null = null;

submitVote(voteForm: any) {
const vote = voteForm.value.vote;
this.voteResult = vote === 'approve' ? 'Approved' : 'Rejected'; 
}
voteForm: any;

}
