import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'bs-nav',
  templateUrl: './bs-nav.component.html',
  styleUrls: ['./bs-nav.component.scss']
})

export class BsNavComponent implements OnInit {
  AlignmentMode: String = 'right';
  Vertical:Boolean = false;
  VerticalMobile:Boolean = false;
  Tabs:Boolean = false;
  Pills:Boolean = false;
  
  constructor() { 
    this.Pills = true;
    this.VerticalMobile = true;
  }

  ngOnInit() {
  }

}
