import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class BillService {

  // createBillFailure:  boolean;
  // updateBillFailure:  boolean;
  // deleteBillFailure:  boolean;

  getAllBills() {
    let config = {}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    return this.http.get(environment.apiServer + '/bills', config);
  }

  constructor(private http: Http) { }

}
