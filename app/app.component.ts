import { Component, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular 4';
  randomColor: any;
  dynData: any;
  
  constructor(private elRef: ElementRef) {
    this.dynData = [ 
      { "id": "a123", "color": "yellow", "content": "1st div" }, 
      { "id": "b456", "color": "green", "content": "2nd div" }, 
      { "id": "c789", "color": "blue", "content": "3rd div" } 
    ];
  }

  ngAfterViewInit() {
      this.dynData.forEach(
        x=>{
          console.log('Color -> ', x.color, x.id);
          this.elRef.nativeElement.querySelector('#' + x.id).style.backgroundColor = x.color;
        }
      )
  }

}
