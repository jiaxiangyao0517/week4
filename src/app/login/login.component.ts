import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email="";
  password="";

  users = [ 
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3'}
  ];

  constructor(private router: Router){}

  login() {
    const user = this.users.find(u => u.username === this.email && u.password === this.password);

    if(user){
      this.router.navigate(['/account']);
    }else{
      console.log('Invalid username or password.');
    }
  }

}
