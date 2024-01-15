import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";

export class CrudGeneric<T> {

  constructor(
    protected http: HttpClient,
    private API_URL: any
  ) {}

  getList(){
    return this.http.get<T[]>(this.API_URL).pipe(take(1));
  }

  getById(id: any){
    return this.http.get(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T){
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: any){
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  delete(id: T){
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

  save(record: any): Observable<any>{
    if(record['id']){
      return this.update(record);
    }
    return this.create(record);
  }
}
