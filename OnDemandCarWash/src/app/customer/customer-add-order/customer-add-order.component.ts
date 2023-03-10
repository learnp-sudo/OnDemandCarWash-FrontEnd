import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/model/order';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { OrderService } from 'src/app/service/order.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-add-order',
  templateUrl: './customer-add-order.component.html',
  styleUrls: ['./customer-add-order.component.css']
})
export class CustomerAddOrderComponent implements OnInit {
  orderDetails:  Order = new Order();
  errorMessage: string | undefined;
  customer:any={
    id:'',
    email:'',
    fullName:'',
    phoneNumber:0,
    username:''
  };
  sb = faShoppingBasket;

  constructor(private service:OrderService, private service1:CustomerService  ,private route:Router, private auth:AuthenticationService){}
  username=this.auth.getUsername()||''
  
  ngOnInit(): void {
    this.getCustomerByusername(this.username);
  }
  getCustomerByusername(username:any){
    this.service1.getCustomerByUsername(this.username).subscribe((data:any)=>{
      this.customer=data;
    })
  }

  placeOrder(orderDetails:Order)
  {
    this.service.placeOrder(this.orderDetails).subscribe((data)=>{
      console.log(data);
      this.route.navigate(['user/home'])
      window.alert("Order Placed Successfully")
    })
  }

}
