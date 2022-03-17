import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { AnnonceServiceService } from 'src/app/Services/annonce-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-valider-annonce',
  templateUrl: './valider-annonce.page.html',
  styleUrls: ['./valider-annonce.page.scss'],
})
export class ValiderAnnoncePage implements OnInit {
  idAnnonce: any;
  annonce: any;
  image = environment.URLPhoto;
  userConnect: any

  constructor(
    private aService : AnnonceServiceService,
    public popover: PopoverController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.userConnect = JSON.parse(localStorage.getItem('userData')); 
    this.idAnnonce = this.aService.getIdAnnonce();    
    this.aService.detailAnnonce(this.idAnnonce).subscribe((dat: any)=>{
      this.annonce = dat;
    });
    this.image;
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Succès',
      message: 'Votre demande est soumise avec succès. Nous vous contacterons une fois la demande validée.',
      buttons: ['ok']
    });
    await alert.present();
  }

  retour(){
    this.popover.dismiss();
  }
  valider(id:any){
    this.aService.detailAnnonce(id).subscribe((dat: any)=>{
     let demandeAnnonce = {
       "utilisateur": this.userConnect,
       "annonce": dat,
       "etatAnnonce": "Encours",
       "userView":"non_lu"
     }
     this.aService.ajoutDemandeAnnonce(demandeAnnonce).subscribe((dem: any)=>{
      this.popover.dismiss();
      this.presentAlert()
     })
    })
  }

}
