import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catholder',
  templateUrl: './catholder.component.html',
  styleUrls: ['./catholder.component.css']
})
export class CatholderComponent implements OnInit {
  cats=["alpha","beta","Cadburry","Donout","Eclair","Frozon Yougurt","GingerBread","HoneyCoumb","Ice Cream Sandwitch","JellyBean","KitKat","Lollypop","Marshmellow","Nougouht","Oreo"];
  constructor() { }

  ngOnInit() {
  }

}
