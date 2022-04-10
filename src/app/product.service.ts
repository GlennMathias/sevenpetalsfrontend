import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http
  baseUrl="https://blushing-invincible-fuel.glitch.me/";
  constructor(http:HttpClient) {
    this.http=http;
   }

   getPlants():Observable<Object>
   {
     let plantsUrl=this.baseUrl+"plants";
     console.log("Getting Plants from :"+plantsUrl)
     return this.http.get(plantsUrl);
   }
}
