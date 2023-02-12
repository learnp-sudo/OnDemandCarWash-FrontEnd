import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import {  ActivatedRoute, Router } from '@angular/router';

import { Order } from 'src/app/model/order';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-customer-my-orders',
  templateUrl: './customer-my-orders.component.html',
  styleUrls: ['./customer-my-orders.component.css']
})
export class CustomerMyOrdersComponent implements OnInit {
  OrderList: Array<Order> = [];
  currentUser: Customer = new Customer();
  
  user:any={
    username:'',
    password:''
  }

  
  constructor(private service:OrderService, private authentication:AuthenticationService, private router:Router){
    
  }
   username=this.authentication.getUsername()||''
  ngOnInit(): void {
   console.log(this.username)
    this.getOrderbyUsername(this.username);
  }
  getOrderbyUsername(username:string){

    this.service.getOrderbyUsername(this.username).subscribe((data:any)=>{
      this.OrderList=data;

    })
  }

  CancelOrder(orderId:any)
  {
    console.log(orderId)
    this.service.cancelOrder(orderId).subscribe((data:any)=>{
      window.alert('order cancelled')
      this.router.navigate(['user'])
     
    });
  }

}
