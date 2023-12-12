import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Emails} from "../model/emails";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerificaEmailService {

  emails = Emails

  constructor(
    private http: HttpClient
  ) { }

  getEmail(email: string){
    return this.http.get( '').pipe(
      // map((dados: {emails: any[]}) => dados.emails),
      // map((dados: {email: string}[]) => dados.filter(v => v.email === email))
    );
  }
}
