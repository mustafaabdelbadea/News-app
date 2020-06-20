import { Component, OnInit } from '@angular/core';
import{AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologynews:any[]=[];
  constructor(public _AppserviceService:AppserviceService) {
    this._AppserviceService.gettechnology().subscribe((data)=>{
      
      this.technologynews=data.articles;
    });
    
   }

  ngOnInit(): void {
  }

}
