import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BillComponent } from './bill.component';
import { BillIndexComponent } from './bill-index/bill-index.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [BillComponent, BillIndexComponent]
})
export class BillModule { }
