import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieServiceService } from '../categorie/categorie-service.service';
import { AnnonceServiceService } from '../Services/annonce-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listeCategorie: any;
  public imgfile: any = File;
  submitted = false;
  formulaire: FormGroup;
  user: any;

  constructor(
    public categorieService: CategorieServiceService,
    public service: AnnonceServiceService,
    public router: Router,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listerCategorie();
    this.formulaire = this.formBuilder.group({
      description: ['', Validators.required],
      categorie: ['', Validators.required],
      ville: [''],
      quartier: [''],
    });
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log(this.user);
  }

  // get errorControl() {
  //   return this.annonce.controls; 
  // }

  imgSelect(event) {
    const img = event.target.files[0];
    this.imgfile = img;
  }


  submitForm() {

    const file = new FormData();
    const dataAnnonce = this.formulaire.value;

    file.append('file', this.imgfile, this.imgfile.name);
    file.append('dataA', JSON.stringify(dataAnnonce));
    console.log("file==========", file);

    let description = this.formulaire.value['description'];
    let categorie = this.formulaire.value['categorie'];
    let ville = this.formulaire.value['ville'];
    let quartier = this.formulaire.value['quartier'];

    this.service.ajoutAnnonce(file).subscribe((data) => {
     
      data.description = description,
        data.categorie = {
          idcat: categorie
        },
        data.ville = ville,
        data.quartier = quartier

      if (this.user.type == 'SimpleUtilisateur') {
        data.utilisateur = this.user
      }
      if (this.user.type == 'Administrateur') {
        data.admin = this.user
      }
      console.log(data);

      data.email = this.user.email
      console.log("localstorage : ", this.user.email);

      console.log("dataSave============", data);


      this.service.updateAnnonce(data.id_annonce, data).subscribe((data) => {
        console.log("dataUpdate============", data);
        this.router.navigate(['/tabs/tabs/tab1'])
      })
    })
  }


  listerCategorie() {
    this.categorieService.listeCategorie().subscribe((dataa) => {
      console.log(dataa);
      return this.listeCategorie = dataa;
    })
  }
}
