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

  getCidade(value: string){
      return this.http.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${value}/distritos`);
  }
}
