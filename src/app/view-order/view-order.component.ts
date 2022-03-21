import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    
   public array : any[] =[
     {name : "Medium",
    weight:9,lwh:10*10*10,box:3},
     {name : "Large",weight:9,lwh:10*10*10,box:3},
     {name : "Small",weight:9,lwh:10*10*10,box:3}
   ]


}
