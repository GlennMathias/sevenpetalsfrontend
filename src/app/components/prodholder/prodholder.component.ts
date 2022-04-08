import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodholder',
  templateUrl: './prodholder.component.html',
  styleUrls: ['./prodholder.component.css']
})
export class ProdholderComponent implements OnInit {
  prods=["alpha","beta","Cadburry","Donout","Eclair","Frozon Yougurt","GingerBread","HoneyCoumb","Ice Cream Sandwitch","JellyBean","KitKat","Lollypop","Marshmellow","Nougouht","Oreo"];
  constructor() { }

  ngOnInit() {
  }

}
