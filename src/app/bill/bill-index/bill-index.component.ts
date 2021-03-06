import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-index',
  templateUrl: './bill-index.component.html',
  styleUrls: ['./bill-index.component.css']
})
export class BillIndexComponent implements OnInit {

  allBills = [];

  constructor(
    public router: Router,
    public billService: BillService
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/'])
    } else {
      this.billService.getAllBills()
      .subscribe(response => {
        this.allBills = response.json()['bills']
        console.log(this.allBills);
      });
    }
  }

  deleteBill(deletedBill) {
    this.billService.deleteBill(deletedBill)
    .subscribe(
      response => {
        let billIndex = this.allBills.indexOf(deletedBill);
        this.allBills.splice(billIndex, 1);
        this.billService.deleteBillSuccess = true
        this.billService.deleteBillFailure = false
      },
      err => {
        this.billService.deleteBillSuccess = false
        this.billService.deleteBillFailure = true
      }
    );
  }

}
