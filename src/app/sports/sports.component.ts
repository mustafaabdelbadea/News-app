import { Component, OnInit } from '@angular/core';
import{AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsnews:any[]=[];
  constructor(public _AppserviceService:AppserviceService) {
    this._AppserviceService.getSports().subscribe((data)=>{
      
      this.sportsnews=data.articles;
    });
    
   }

  ngOnInit(): void {
  }

}
