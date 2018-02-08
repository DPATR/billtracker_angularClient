import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';

import { BillComponent } from './bill/bill.component';
import { BillIndexComponent } from './bill/bill-index/bill-index.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'bill',
    component: BillComponent,
    children: [
      {
        path: '',
        component: BillIndexComponent
      }
    ]
  },
  {
    path: 'auth/change-password',
    component: ChangePasswordComponent
  }
]

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
