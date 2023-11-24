import {Component, numberAttribute, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  items: MenuItem[] | undefined;

  activeItem: number | null = null;

  ngOnInit() {
    this.items = [
      { label: 'Template Driven', icon: 'pi pi-fw pi-home', command: event =>  {
          this.activeItem = 0}
      },
      { label: 'Data Driven', icon: 'pi pi-fw pi-calendar', command: event =>  {
          this.activeItem = 1}
      },
    ];

  }
}
