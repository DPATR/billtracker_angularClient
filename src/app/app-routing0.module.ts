import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
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
