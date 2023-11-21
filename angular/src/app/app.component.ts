import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  items: MenuItem[] = [];
  activeItem: MenuItem = {};

  ngOnInit() {

    this.authService.mostrarMenuEmitter.subscribe( response => {
       if(response){
         this.items = [
           {
             label: 'Home', icon: 'pi pi-fw pi-home', command: event =>  {
               this.router.navigate(['/']);
             }
           },
           {
             label: 'Cursos', icon: 'pi pi-fw pi-file', command: event =>  {
               this.router.navigate(['cursos']);
             }
           },
           {
             label: 'Alunos', icon: 'pi pi-fw pi-file', command: event =>  {
               this.router.navigate(['alunos']);
             }
           }
         ];
       } else {
         this.items = [
           {
             label: 'Login', icon: 'pi pi-fw pi-user', command: event =>  {
               this.router.navigate(['login']);
             }
           }
         ]
       }

    })

    this.activeItem = this.items[0];
  }

}
