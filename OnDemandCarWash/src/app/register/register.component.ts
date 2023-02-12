import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  //Icons
  faReg = faAddressBook;
  //Roles
  roles = ['USER', 'WASHER', 'ADMIN'];
  roleHasError = true;
  errorMessage: string = '';
  ngOnInit(): void {
    // if (this.authenticationService.currentUserValue?.id) {
    //   this.router.navigate(['/home']);
    // }
  }
  validateRole(value: string) {
    if (value === 'default') {
      this.roleHasError = true;
    } else {
      this.roleHasError = false;
    }
  }
 
  user: any={
    id:'',
    email:'',
    password:'',
    fullName:'',
    phoneNumber:'',
    role:'',
    username:''    
  };
  register() {
    this.authenticationService.register(this.user).subscribe(
      (data: any) => {
        console.log(data);
       window.alert('wel come to Green Wash')
        this.router.navigate(['/login']);
      },
      (err: { status: number; errorMessage: string; }) => {
        if (err?.status === 400) {
          this.errorMessage = 'User Exists Already';
        } else {
          this.errorMessage =
            'Unexpected error occurred. Error is: ' + err?.errorMessage;
          console.log(err);
        }
      }
    );
  }
}