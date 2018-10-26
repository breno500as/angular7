import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-adm-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.css']
})
export class CapaComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: any;
  teste: string;

  constructor() { }

  ngOnInit() {
    this.sidenav.opened = true;
  }
}
