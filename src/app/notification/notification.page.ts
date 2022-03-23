import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceServiceService } from '../Services/annonce-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
notify: any;
  constructor(public service: AnnonceServiceService, public router: Router) { }

  ngOnInit() {
    this.notify = this.service.getNotify();
  }

  lirenotify(id:any){
    this.service.detailDemandeAnnonce(id).subscribe((data:any)=>{
      console.log(data);
      
      data.userView = 'lu';
      this.service.updateDemandeAnnonce(data.id, data).subscribe((det:any)=>{
        this.service.setMessage(JSON.parse(det));
        this.router.navigate(['lire-message']);
      })
    })
  }

}
