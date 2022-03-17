import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from './categorie-service.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Swiper, Zoom } from 'swiper';
import { environment } from 'src/environments/environment';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {
  photo = environment.URLPhoto;
  listCategorie : any;

  constructor(
    private categorieService : CategorieServiceService,
  ) { }

  ngOnInit() {
    this.getCategorie();
  }

  getCategorie(){
    this.categorieService.listeCategorie().subscribe(res=>{
      this.listCategorie = res;
      console.log(this.listCategorie); 
    })
  }

}
