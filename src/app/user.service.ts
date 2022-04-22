import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="https://blushing-invincible-fuel.glitch.me/";
  constructor(private http:HttpClient) {
   }

  login(payload):Observable<Object>{
      let data=payload;
      let endpoint_url=this.baseUrl+"login";
      console.log(endpoint_url);
      console.log(data);
      
      let string_data = JSON.stringify(data);
      // let options ={ headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

      console.log(string_data);
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      console.log(headers)
      console.log(headers['Content-Type']);
      let options ={ headers: headers };

      return this.http.post(endpoint_url,string_data,options);
   }
}
