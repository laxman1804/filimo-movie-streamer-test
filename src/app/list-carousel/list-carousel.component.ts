import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-list-carousel',
  templateUrl: './list-carousel.component.html',
  styleUrls: ['./list-carousel.component.scss']
})
export class ListCarouselComponent implements OnInit {
  @Input() products: any;
  listtitle:any ="";
  constructor() { }

  ngOnInit(): void {
  }

}
