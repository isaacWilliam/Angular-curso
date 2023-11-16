import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  idCurso: any;

  constructor(
    private router: Router
  ) {}

  items: MenuItem[] = [];
  activeItem: MenuItem = {};

  ngOnInit() {
    this.items = [
      {
        label: 'Home', icon: 'pi pi-fw pi-home', command: event =>  {
            this.router.navigate(['/']);
          }
        },
      {
        label: 'Login', icon: 'pi pi-fw pi-user', command: event =>  {
          this.router.navigate(['login']);
          }
        },
      {
        label: 'Cursos', icon: 'pi pi-fw pi-file', command: event =>  {
          this.router.navigate(['cursos']);
          }
        },
      {
        label: 'Curso Detalhe', icon: 'pi pi-fw pi-file', command: event =>  {
          this.redirectCurso();
        }
      }
    ];

    this.activeItem = this.items[0];
  }

  redirectCurso(){
    this.router.navigate(['curso', this.idCurso]);
  }

}
