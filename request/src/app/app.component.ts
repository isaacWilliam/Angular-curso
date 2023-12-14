import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {MessageLayoutService} from "./shared/services/message.layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: MenuItem[] = [];

  activeItem: MenuItem = {};

  constructor(
    private messageLayoutService: MessageLayoutService,
    private messageService: MessageService
  ) {
    this.messageLayoutService.toastChange.subscribe(
      message => this.messageService.add(message)
    );
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/', routerLinkActiveOptions: true},
      { label: 'Cursos', icon: 'pi pi-fw pi-calendar',  routerLink: 'cursos', routerLinkActiveOptions: true},
      { label: 'Unsub. Rxjs', icon: 'pi pi-fw pi-list',  routerLink: 'unsub', routerLinkActiveOptions: true},
    ];

    this.messageLayoutService.toastChange.subscribe(
      message => this.messageService.add(message)
    );
  }
}
