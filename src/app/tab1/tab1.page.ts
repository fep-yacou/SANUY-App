import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnnonceServiceService } from '../Services/annonce-service.service';
import { IonSlides, PopoverController } from '@ionic/angular';
import { ValiderAnnoncePage } from './ValiderAnnonce/valider-annonce/valider-annonce.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  photo = environment.URLPhoto;
  annonce : any;
  id : number;

  @ViewChild('picSlider',  {static: false}) viewer: IonSlides;
  constructor(
    private aService : AnnonceServiceService,
    public popover: PopoverController,
    public route: ActivatedRoute
  ) { }
  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    speed: 400,
    autoplay:true,

  };
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getAnnonce();
    console.log(this.id);
    
  }

  getAnnonce(){
    this.aService.listeAnnonceByCategorie(this.id).subscribe(data =>{
      this.annonce = data;
    })
  }
  


  async obtenir(id: any){
    this.aService.setIdAnnonce(id);
    const popover = await this.popover.create({
      component: ValiderAnnoncePage,
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
  }

}


