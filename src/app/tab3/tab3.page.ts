import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  loginData: any;
  user: any;

  constructor() {}

  ngOnInit(): void {
    this.loginData = localStorage['userData']
    console.log('login', this.loginData);
    this.user= JSON.parse(localStorage.getItem("userData"))
    console.log('user ', this.user);
  }

}