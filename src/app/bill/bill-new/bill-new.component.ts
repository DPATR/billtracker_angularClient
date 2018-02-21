import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.css']
})
export class BillNewComponent implements OnInit {

  newBill = <any>{};

  constructor(
    public router: Router,
    public billService: BillService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    }
  }

  saveBill(newBill) {
    const newCreditor = <HTMLInputElement>document.getElementById('new-creditor')
    const newBillingMonth = <HTMLInputElement>document.getElementById('new-billing-month')
    const newAmountDue = <HTMLInputElement>document.getElementById('new-amount-due')
    this.billService.saveBill(newBill)
    .subscribe(
      response => {
        let data = response.json();
        this.router.navigate(['bill']);
      },
      err => {
        this.billService.createBillFailure = true
        newCreditor.value = ''
        newBillingMonth.value = ''
        newAmountDue.value = ''
      })
  }

}
