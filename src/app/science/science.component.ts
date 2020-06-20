import { Component, OnInit } from '@angular/core';
import{AppserviceService} from '../appservice.service';
@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  sciencenews:any[]=[];
  constructor(public _AppserviceService:AppserviceService) {
    this._AppserviceService.getscience().subscribe((data)=>{
      this.sciencenews=data.articles;
    });
    
   }


  ngOnInit(): void {
  }

}
