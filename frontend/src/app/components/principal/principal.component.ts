import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ocultar() {
    var item = document.getElementsByClassName('nav-link');
    var menu = document.getElementsByClassName('navbar-nav');

    for (var i = 0; i < item.length; i++) {
      item[i].classList.toggle('desaparece');
    }
    menu[0].classList.toggle('desaparece');
  }
}

