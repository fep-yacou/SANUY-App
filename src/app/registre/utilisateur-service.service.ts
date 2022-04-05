import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  url = environment.URL;

  constructor(
    private http: HttpClient,
  ) { }

      //liste Utilisateur
      listeUtilisateur(){
        return this.http.get(this.url + '/listUtilisateur');
      }
      //ajout Utilisateur
      ajoutUtilisateur(data: any){
        return this.http.post(this.url + '/ajoutUtilisateur', data);
      }
      //Modifier Utilisateur
      updateUtilisateur(id: any, part:any){
        return this.http.put(this.url + '/modifierUtilisateur/' + id, part, {responseType:"text"});
      }
      //Details Utilisateur
      detailUtilisateur(id_utilisateur:any){
        return this.http.get(this.url + '/findUtilisateur/' + id_utilisateur);
      }
  
      //Supprimer Utilisateur
      deleteUtilisateur(id: any){
        console.log("delete service");
        return this.http.delete(this.url + "/deleteUtilisateur/" + id);
      }
}
