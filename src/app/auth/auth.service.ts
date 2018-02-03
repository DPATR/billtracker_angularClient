import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()

export class AuthService {
  user: any
  loggedIn: boolean;
  loginFailure: boolean;
  signUpFailure: boolean;
  signOutFailure: boolean;
  changePasswordSuccess: boolean;
  changePasswordFailure: boolean;

  constructor(
    private http: Http,
    public router: Router
  ) { }

  getUserToken() {
    return this.user.token
  }

  setStatus() {
    const token = localStorage.getItem('token')
    console.log('token = ' + token)
    if (token == null) {
      this.loggedIn = false
    } else {
      this.loggedIn = true
    }

    console.log('loggedin = ' + this.loggedIn)
  }

  signIn(email: string, password: string) {
    console.log('email: ' + email)
    console.log('password: ' + password)
    const emailField = <HTMLInputElement>document.getElementById('email-log')
    const passwordField = <HTMLInputElement>document.getElementById('password-log')
    // Create the credentials object.
    let credentials = {
      'credentials': {
        'email': email,
        'password': password
      }
    }

    // Make the post request. environment.apiServer contains the local server address http://localhost:4741
    this.http.post(environment.apiServer + '/sign-in', credentials)
        .subscribe(
        // Save the response to user
        // response => this.user = JSON.parse(response['_body']).user,
        // err => console.log(err)
        response => {
            const user = JSON.parse(response['_body']).user
            localStorage.setItem('token', user.token)
            console.log('token set to: ' + localStorage.getItem('token'))
            localStorage.setItem('id', user.id)
            console.log('id set to: ' + localStorage.getItem('id'))
            localStorage.setItem('user', user.email)
            console.log('user set to: ' + localStorage.getItem('user'))
            this.loginFailure = false
            this.signUpFailure = false
            this.setStatus()
            emailField.value = ''
            passwordField.value = ''
            //this.router.navigate(['/home/'])
        },
        err => {
          this.loginFailure = true
          this.signUpFailure = false
          emailField.value = ''
          passwordField.value = ''
        }
      )
   }

  signUp(email: string, password: string, password_confirmation: string) {
    const newEmailField = <HTMLInputElement>document.getElementById('email-sign')
    const newPasswordField = <HTMLInputElement>document.getElementById('password-sign')
    const passwordConfirmField = <HTMLInputElement>document.getElementById('password-confirm-sign')
    if (password == password_confirmation) {
      // Create the credentials object.
      const credentials = {
        'credentials': {
          'email': email,
          'password': password,
          'password_confirmation': password_confirmation
        }
      }

      // Make the post request. environment.apiServer contains the local server address http://localhost:4741
      this.http.post(environment.apiServer + '/sign-up', credentials)
        .subscribe(
          response => {
            // Send the existing credentials back to the server to log in the new user
            this.signIn(credentials.credentials.email, credentials.credentials.password)
            newEmailField.value = ''
            newPasswordField.value = ''
            passwordConfirmField.value = ''
          },
          //err => console.log(err)
          err => {
            this.signUpFailure = true
            this.loginFailure = false
            newEmailField.value = ''
            newPasswordField.value = ''
            passwordConfirmField.value = ''
          }
        )
      } else {
          this.signUpFailure = true
          this.loginFailure = false
          newEmailField.value = ''
          newPasswordField.value = ''
          passwordConfirmField.value = ''
      }
      console.log('signUpFailure: ' + this.signUpFailure)
      console.log('loginFailure: ' + this.loginFailure)
    }

  signOut() {
    // Create the configuration object to be able to store the Headers > Authentication
    let config = {}

    // Set the headers key
    //config['headers'] = { Authorization:'Token token=' + this.getUserToken()}
    config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}
    // Make the delete request to URL, and add the token from Config.
    this.http.delete(environment.apiServer + '/sign-out/' + localStorage.getItem('id'), config)
      .subscribe(
        // Remove the logged in user.
        data => {
          this.user = null
          localStorage.clear()
          this.setStatus()
          this.signOutFailure = false
        },
        //err => console.log(err)
        err => {
          this.signOutFailure = true
        }
      )
   }

  changePassword(oldPassword: string, newPassword: string) {
    const oldField = <HTMLInputElement>document.getElementById('old')
    const newField = <HTMLInputElement>document.getElementById('new')
    if (oldPassword != newPassword ) {
      // Create the passwords data object to send.
      let passwords = {
        'passwords': {
        'old': oldPassword,
        'new': newPassword
        }
      }

      // Create the configuration object to be able to store the Headers > Authentication
      let config = {}

      // Set the headers key
      config['headers'] = { Authorization:'Token token=' + localStorage.getItem('token')}

      // Make the patch request to URL, add the password data and token from Config.
      this.http.patch(environment.apiServer + '/change-password/' + localStorage.getItem('id'), passwords, config)
        .subscribe(
          //data => console.log('Success'),
          //err => console.log(err)
          response => {
            this.changePasswordSuccess = true
            this.changePasswordFailure = false
            oldField.value = ''
            newField.value = ''
            data => console.log('Success')
          },
          err => {
            this.changePasswordSuccess = false
            this.changePasswordFailure = true
            oldField.value = ''
            newField.value = ''
          }
        )
      } else {
        this.changePasswordSuccess = false
        this.changePasswordFailure = true
        oldField.value = ''
        newField.value = ''
      }
    }
