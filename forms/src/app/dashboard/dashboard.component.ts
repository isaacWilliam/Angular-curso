import {Component, OnInit} from '@angular/core';
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

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Template Driven', icon: 'pi pi-fw pi-home', command: event =>  {
          this.router.navigate(['/'])}
      },
      { label: 'Data Driven', icon: 'pi pi-fw pi-calendar', command: event =>  {
          this.router.navigate(['/'])}
      },
    ];

    this.activeItem = this.items[0];
  }
}
