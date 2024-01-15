import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(
    private http: HttpClient
  ) { }

  upload(files: Set<File>, url: string){

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name ));
    // const request = new HttpRequest('POST', url, formData );

    return this.http.post(url, formData, {
      observe: "events", reportProgress: true
    });
  }

  download(url: string){
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

  handleFile(response: any, nameFile: string){
    const file = new Blob([response], {
      type: response.type
    })

    const nav = (window.navigator as any);
    if(window.navigator && nav.msSaveOrOpenBlob){
      nav.msSaveOrOpenBlob(file);
      return;
    }

    const blob = window.URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = blob;
    link.download = nameFile;


    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }))
    // link.click();

    setTimeout(()=> {
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }

}
