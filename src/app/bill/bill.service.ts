import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class BillService {

  createBillFailure:  boolean;
  updateBillFailure:  boolean;
  deleteBillFailure:  boolean;
  deleteBillSuccess:  boolean;

  getAllBills() {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiServer + '/bills', config);
  }

  getOneBill(billId) {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiServer + '/bills/' + billId, config);
  }

  deleteBill(bill) {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.delete(environment.apiServer + '/bills/' + bill.id, config)
  }

  saveBill(newBill) {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    let billCreateParams = {
      "bill": {
        "creditor": newBill.creditor,
        "billing_month": newBill.billing_month,
        "amount_due": newBill.amount_due,
        "user_id": localStorage.getItem('id')
      }
    }
    return this.http.post(environment.apiServer + '/bills', billCreateParams, config);
  }

  updateBill(updatedBill) {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    let billUpdateParams = {
      "bill": {
        "creditor": updatedBill.creditor,
        "billing_month": updatedBill.billing_month,
        "amount_due": updatedBill.amount_due,
        "user_id": localStorage.getItem('id')
      }
    }
    return this.http.put(environment.apiServer + '/bills/' + updatedBill.bill.id, billUpdateParams, config);
  }

  constructor(private http: Http) { }

}
