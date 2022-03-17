import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../annonce/service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  service: any;
  categorie: any;
  constructor( private services: ServiceService) {
    
   }

  ngOnInit() {
    this.allCategories();
  }
  allCategories(){
    return this.services.getAllcategorie().subscribe((data:any)=>{
      console.log(data)
      this.categorie = data;
    })
  }
}
  
