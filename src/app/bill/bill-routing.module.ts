import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BillComponent } from './bill.component';
import { BillIndexComponent } from './bill-index/bill-index.component';
import { BillNewComponent } from './bill-new/bill-new.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';

const billRoutes: Routes = [
  {
    path: 'bill',
    component: BillComponent,
    children: [
      {
        path: '',
        component: BillIndexComponent
      },
      {
        path: 'new',
        component: BillNewComponent
      },
      {
        path: 'edit/:id',
        component: BillEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(billRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BillRoutingModule { }
