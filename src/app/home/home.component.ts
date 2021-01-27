import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any ;
  episode:any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/jsons/episode.json").subscribe(data =>{
      console.log(data);
      this.episode = data;
    })
  
    this.httpClient.get("assets/jsons/morelink.json").subscribe(data =>{
      console.log(data);
      this.products = data;
    });
   
}
  

}
