import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordService } from './Service/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(
    private service: PasswordService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  onLogin(loginForm:any) {
    this.service.verifier(loginForm.login, loginForm.password)
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            localStorage.setItem('userData', JSON.stringify(data))
           this.route.navigateByUrl('tabs/tabs/tab1');
          }
        }
      )
  }




}
