import {Component, OnInit} from '@angular/core';
import {MenuItem, MenuItemCommandEvent} from "primeng/api";

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
    ];

    this.activeItem = this.items[0];
  }
}
