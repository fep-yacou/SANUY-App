import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  url = environment.URL;
  idAnnonce: any;

  constructor(
    private http: HttpClient,
  ) { }

  setIdAnnonce(data: any){this.idAnnonce = data}
  getIdAnnonce(){return this.idAnnonce}

    //liste Categorie
    listeCategorie() {
      return this.http.get(this.url + '/listCategorie');
    }
    //ajout Categorie
    ajoutCategorie(formdata: FormData): Observable<any> {
      return this.http.post(this.url + '/ajoutCategorie', formdata);
    }
    //Modifier Categorie
    updateCategorie(id: any, part: any) {
      return this.http.put(this.url + '/modifiercategorie/'+ id, part);
    }
    //Details Categorie
    detailCategorie(id: any) {
      return this.http.get(this.url + '/infoannonce/'+ id);
    }
  
    //Supprimer Categorie
    deleteCategorie(id: any) {
      console.log("delete service");
      return this.http.delete(this.url + '/supprimercategorie/' + id)
    }
}
