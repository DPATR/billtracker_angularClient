import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.css']
})
export class BillEditComponent implements OnInit {

  updatedBill  = <any>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public billService: BillService
  ) { }

  ngOnInit() {
    const creditor = <HTMLInputElement>document.getElementById('update-creditor')
    const billingmonth = <HTMLInputElement>document.getElementById('update-billing-month')
    const amountdue = <HTMLInputElement>document.getElementById('update-amount-due')
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    } else {
      this.route.params.forEach( param => {
        console.log(param.id)
        this.billService.getOneBill(param.id)
        .subscribe(response => {
          console.log(response.json());
          this.updatedBill = response.json();
          creditor.value = this.updatedBill.bill.creditor;
          billingmonth.value = this.updatedBill.bill.billing_month;
          amountdue.value = this.updatedBill.bill.amount_due;
        });
      });
    }
  }

  updateBill(updatedBill) {
    this.billService.updateBill(updatedBill)
    .subscribe(
      response => {
        let data = response.json();
        this.router.navigate(['bill']);
      },
      err => {
        this.billService.updateBillFailure = true
      }
    )
  }

}
