import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-adm-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: any;

  constructor() {
    this.sidenav.opened = true;
   }

  ngOnInit() {
  }
}
