import { Component, OnInit } from '@angular/core';
import{AppserviceService} from '../appservice.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  generalnews:any[]=[];
  constructor(public _AppserviceService:AppserviceService) {
    this._AppserviceService.getPosts().subscribe((data)=>{
      
      this.generalnews=data.articles;
    });
    
   }

  ngOnInit(): void {
  }

}
