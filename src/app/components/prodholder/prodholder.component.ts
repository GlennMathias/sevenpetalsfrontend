import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-prodholder',
  templateUrl: './prodholder.component.html',
  styleUrls: ['./prodholder.component.css']
})
export class ProdholderComponent implements OnInit {
  // prods=["alpha","beta","Cadburry","Donout","Eclair","Frozon Yougurt","GingerBread","HoneyCoumb","Ice Cream Sandwitch","JellyBean","KitKat","Lollypop","Marshmellow","Nougouht","Oreo"];
  prods:Observable<Object[]>;
  plantsService;
  constructor(plantsService:ProductService) {
    this.plantsService=plantsService;
   }

  ngOnInit() {
    try
    {
    this.prods=this.plantsService.getPlants();
    console.log(typeof(this.prods));
    console.log("Logging Plants:");
    console.log(this.prods);
    }
    catch
    {
      console.log("Error");
    }
  }

}
