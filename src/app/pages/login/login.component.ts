import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  payload={};
  userService
  data:Observable<String>= "0" as unknown as Observable<String>;
  data_new;
  constructor(userService:UserService) {this.userService=userService }

  ngOnInit() {
  }

  submit()
  {
    console.log(this.data);
    this.data=this.userService.login(this.payload).subscribe();
    console.log(this.data);
  }

}
