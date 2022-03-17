import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {
  url = environment.URL;
  idAnnonce: any;
  notif:any;
  message: any;

  constructor(
    private http : HttpClient,
  ) { }

  setIdAnnonce(data: any){this.idAnnonce = data}
  getIdAnnonce(){return this.idAnnonce}

  setNotify(data: any){this.notif = data}
  getNotify(){return this.notif}

  setMessage(data: any){this.message = data}
  getMessage(){return this.message}

        //liste Annonce
        listeAnnonce(){
          return this.http.get(this.url + '/listAnnonce');
        }
        listeAnnonceByCategorie(categorie: any){
          return this.http.get(this.url + '/annonceByCategorie/' + categorie);
        }
        //ajout Annonce
        ajoutAnnonce(formdata: FormData): Observable<any>{
          return this.http.post(this.url + '/ajouterAnnonce', formdata);
        }
        //Modifier Annonce
        updateAnnonce(id: any, part:any){
          return this.http.put(this.url + `/modifierAnnonce/${id}`, part, {responseType:"text"});
        }
        //Details Annonce
        detailAnnonce(id:any){
          return this.http.get(this.url + `/find/${id}`);
        }
    
        //Supprimer Annonce
        deleteAnnonce(id: any){
          console.log("delete service");
          return this.http.delete(this.url + "/deleteParticipant/"+id);
        }

        //ajout DemandAnnonce
        ajoutDemandeAnnonce(data: any) {
          return this.http.post(this.url + '/ajoutDemandeAnnonce', data);
        }

        //Modifier DemandeDemandeAnnonce
        updateDemandeAnnonce(id: any, demande:any){
          return this.http.put(this.url + `/modifierDemandeAnnonce/${id}`, demande, {responseType:"text"});
        }

        //liste DemandeAnnonce
        listeDemandeAnnonce(){
          return this.http.get(this.url + '/listDemandeAnnonce');
        }

        //Details Annonce
        detailDemandeAnnonce(id:any){
          return this.http.get(this.url + `/getDemandeAnnonce/${id}`);
        }
}
