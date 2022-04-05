import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet, PopoverController } from '@ionic/angular';
import { AnnonceServiceService } from 'src/app/Services/annonce-service.service';
import { ValiderAnnoncePage } from 'src/app/tab1/ValiderAnnonce/valider-annonce/valider-annonce.page';
import { environment } from 'src/environments/environment';
import { CategorieServiceService } from '../categorie-service.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.page.html',
  styleUrls: ['./detail-categorie.page.scss'],
})
export class DetailCategoriePage implements OnInit {
  photo = environment.URLPhotoAnnonce;
  annonce: any;
  id: number;
  modalController: any;
  navCtrl: any;

  constructor(
    public routerOutlet: IonRouterOutlet,
    private service: AnnonceServiceService,
    private aService: CategorieServiceService,
    public route: ActivatedRoute,
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getAnnonceByCategorie();
    console.log(this.id);
  }

  // getAnnonce() {
  //   this.aService.detailCategorie(this.id).subscribe(data => {
  //     this.annonce = data;
  //   })
  // }

  getAnnonce(){
    this.service.listeAnnonce().subscribe(data =>{
      this.annonce = data;
    })
  }

  getAnnonceByCategorie() {
    this.service.listeAnnonceByCategorie(this.id).subscribe(data =>{
      this.annonce = data;
    })
  }



  async obtenir(id: any) {
    this.aService.setIdAnnonce(id);
    const popover = await this.popover.create({
      component: ValiderAnnoncePage,
      translucent: false
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  closeModal() {
    this.navCtrl.pop();
  }
}
