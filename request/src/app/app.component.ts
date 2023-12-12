import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/', routerLinkActiveOptions: true},
      { label: 'Cursos', icon: 'pi pi-fw pi-calendar',  routerLink: 'cursos', routerLinkActiveOptions: true},
      { label: 'Unsub. Rxjs', icon: 'pi pi-fw pi-list',  routerLink: 'unsub', routerLinkActiveOptions: true},
    ];

  }
}
