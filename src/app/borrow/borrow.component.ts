// src/app/borrow-loan/borrow-loan.component.ts
// // borrow-loan.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css'],
  standalone: true,  // Specify that this is a standalone component
  imports: [CommonModule, ReactiveFormsModule, RouterModule] // Import necessary Angular modules
})
export class BorrowComponent {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      reason: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const loanRequest = this.loanForm.value;
      console.log('Loan Request Submitted:', loanRequest);
    }
  }
}
