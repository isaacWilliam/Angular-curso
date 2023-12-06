import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../data-form/model/estado";

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private http: HttpClient
  ) {
  }

  getCep(value: string) {
    return this.http.get("https://viacep.com.br/ws/" + value + "/json");
  }


}
