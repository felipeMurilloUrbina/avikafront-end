import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  title = '';
  constructor() { }

  ngOnInit() {
  }

  onActivate(event) {
    if (event) {
      this.title = event.title;
    }
  }

}
