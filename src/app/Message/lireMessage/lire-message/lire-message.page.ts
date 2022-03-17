import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from 'src/app/Services/annonce-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lire-message',
  templateUrl: './lire-message.page.html',
  styleUrls: ['./lire-message.page.scss'],
})
export class LireMessagePage implements OnInit {
message: any
image = environment.URLPhoto
  constructor(public service: AnnonceServiceService) { }

  ngOnInit() {
    this.message = this.service.getMessage();
    this.image;
  }

}
