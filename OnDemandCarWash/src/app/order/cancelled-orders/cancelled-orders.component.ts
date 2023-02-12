import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cancelled-orders',
  templateUrl: './cancelled-orders.component.html',
  styleUrls: ['./cancelled-orders.component.css']
})
export class CancelledOrdersComponent implements OnInit{
OrderList: any;
constructor(private service:OrderService, private route:Router, private location:Location){}
  ngOnInit(): void {
   this.getCancelledOrders();
  }
  getCancelledOrders()
  {
  this.service.getCancelledOrders().subscribe((data)=>{
    this.OrderList=data;
  })
  }
  back()
  {
    // this.route.navigate(['/orders']); 
    this.location.back(); 
  
  }


}
