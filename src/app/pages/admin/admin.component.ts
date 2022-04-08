import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  plant={name:"",cat:""};
  categories=[{name:"herb"},{name:"shrub"}]
  constructor() {
   }

  ngOnInit() {
  }

  addProd()
  {
    console.log(this.plant);
  }

}
