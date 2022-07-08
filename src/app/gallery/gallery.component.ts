import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private api:ApiService) {
    api.viewTodo().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=[] 

}
