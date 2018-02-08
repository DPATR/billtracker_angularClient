import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BillComponent } from './bill.component';
import { BillIndexComponent } from './bill-index/bill-index.component';

const billRoutes: Routes = [
  {
    path: 'bill',
    component: BillComponent,
    children: [
      {
        path: '',
        component: BillIndexComponent
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
