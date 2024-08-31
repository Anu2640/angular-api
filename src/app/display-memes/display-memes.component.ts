import { Component } from '@angular/core';
import { ApiServerService } from '../api-server.service';

@Component({
  selector: 'app-display-memes',
  templateUrl: './display-memes.component.html',
  styleUrls: ['./display-memes.component.css']
})
export class DisplayMemesComponent {
    public photos:any = []

    constructor(private photoService:ApiServerService){
      photoService.getMemesData().subscribe(
        (MemesData:any)=> {
          this.photos = MemesData.data.memes
        },
        (err:any)=>{
          alert("check your connection")
        }
      )
    }
}
