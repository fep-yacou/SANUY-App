import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../Model/utilisateur';
import { UtilisateurServiceService } from './utilisateur-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {
  users = { nom: '', prenom: '', telephone: '', email: '', login: '', password: '' }
  user = new Utilisateur();
  utilis: any;
  usr: any;
  verifieLogin: any;
  errorLogin = '';
  errorEmail = '';

  nom: any;
  prenom: any;
  login: any;
  password: any;
  telephone: any;
  email: any;
  etat: any;
  adminConnect: any;

  constructor(
    public service: UtilisateurServiceService,
    public router: Router,
    public formBuilder: FormBuilder,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.service.listeUtilisateur().subscribe((datas: any) => {
      this.verifieLogin = datas;
      console.log("Utilisateur..........", this.verifieLogin);
    })
  }


  ajoutUtilisateur(form: NgForm) {

    this.nom = form.value['nom'];
    this.prenom = form.value['prenom'];
    this.telephone = form.value['telephone'];
    this.email = form.value['email'];
    this.etat = "disponible";
    this.login = form.value['login'];
    this.password = form.value['password'];

    this.user.nom = this.nom;
    this.user.prenom = this.prenom;
    this.user.tel = this.telephone;
    this.user.email = this.email;
    this.user.etat = this.etat;
    this.user.login = this.login;
    this.user.password = this.password;

    for (let i = 0; i < this.verifieLogin.length; i++) {
      if (this.verifieLogin[i].login == form.value['login']) {
        this.errorLogin = "Ce Login existe déjà !"
      }
      if (this.verifieLogin[i].email == form.value['email']) {
        this.errorEmail = "Cet email est déjà utilisé !"
      }
    }
    if (this.errorLogin == '') {
      if (this.errorEmail == '') {
        this.service.ajoutUtilisateur(this.user).subscribe((data: any) => {
          this.usr = data;
          console.log("-----------", this.usr);
           this.router.navigate(['password']);
           this.successToast();
        })
      } else {
        this.errorEmail = "Cet email est déjà utilisé !"
      }
    } else {
      this.errorLogin = "Ce Login existe déjà !"
    }

  }

  async successToast() {
    const toast = await this.toast.create({
      message: 'Compte créer avec succès, Connectez-vous avec votre login et mot de passe',
      duration: 4000,
      position: 'middle',
      color:'success'
    });
    toast.present();
  }

}
