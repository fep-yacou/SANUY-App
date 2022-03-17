import { Component, OnInit } from '@angular/core';
import { AnnonceServiceService } from '../Services/annonce-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  userConnect:any;
  tab: any = [];
  tab2: any = [];
  nbreMessage: any;

  constructor(private aService : AnnonceServiceService,) {}
  ngOnInit() {
    this.userConnect = JSON.parse(localStorage.getItem('userData'));
    this.aService.listeDemandeAnnonce().subscribe((dem:any)=>{
      for(let i = 0; i< dem.length; i++){
        if(dem[i].utilisateur.id == this.userConnect.id && dem[i].etatAnnonce != 'Encours' && dem[i].userView == 'non_lu'){
          this.tab.push(dem[i]);
        }
      }
      this.nbreMessage = this.tab.length;

      for(let i = 0; i< dem.length; i++){
        if(dem[i].utilisateur.id == this.userConnect.id && dem[i].etatAnnonce != 'Encours'){
          this.tab2.push(dem[i]);
        }
      }
      this.aService.setNotify(this.tab2);
    })
  }
}

