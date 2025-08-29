import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-image',
  templateUrl: './slide-image.component.html',
  styleUrls: ['./slide-image.component.scss'],
  standalone: false,
})
export class SlideImageComponent implements OnInit {

  @Input() listaSlides! : Array<any>;

  constructor() { }

  ngOnInit() { 
  }

}
