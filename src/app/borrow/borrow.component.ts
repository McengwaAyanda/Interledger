// src/app/borrow-loan/borrow-loan.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-borrow-loan',
  templateUrl: './borrow-loan.component.html',
  styleUrls: ['./borrow-loan.component.css'],
  imports: [AppComponent, BorrowLoanComponent, FormBuilder,  FormGroup, Validators, Component]

})
export class BorrowLoanComponent implements OnInit {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form with amount and reason fields
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      reason: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {}

  // Handle form submission
  onSubmit(): void {
    if (this.loanForm.valid) {
      const loanRequest = this.loanForm.value;
      console.log('Loan Request Submitted:', loanRequest);
      // Logic for sending loan request to the backend service
      // e.g., this.loanService.requestLoan(loanRequest).subscribe()
    }
  }
}
