import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BillComponent } from './bill.component';
import { BillIndexComponent } from './bill-index/bill-index.component';
import { BillNewComponent } from './bill-new/bill-new.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { BillService } from './bill.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [BillComponent, BillIndexComponent, BillNewComponent, BillEditComponent],
  providers: [BillService]
})
export class BillModule { }
