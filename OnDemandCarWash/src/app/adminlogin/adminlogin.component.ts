import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(private service:AuthenticationService, private route:Router){}

  faReg = faAddressBook;
  admin:any={
    username:'',
    password:''
    }
    errorMessage: string = '';

    loginAdmin(){
      this.service.loginAdmin(this.admin).subscribe((data:any)=>{
        localStorage.setItem('token', data.jwt)
        localStorage.setItem('username',this.admin.username) //new line 
    
        console.log(data);
        this.route.navigate(['admin'])
        
      },
     
      )
    }
}
