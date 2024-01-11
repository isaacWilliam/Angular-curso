import {Component, OnDestroy} from '@angular/core';
import {MessageService} from "primeng/api";
import {UploadFileService} from "./upload-file.service";
import {Subscription} from "rxjs";

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  providers: [MessageService]
})
export class UploadFileComponent implements OnDestroy{

  uploadedFiles: any[] = [];
  fileSet: Set<File> = new Set<File>();

  sub: Subscription = new Subscription();

  constructor(
    private uploadFileService: UploadFileService
  ) {}

  onUpload(event: any) {

    console.log(event)

    for(let file of event.files) {
      this.uploadedFiles.push(file);
      this.fileSet.add(file);

    }
     if(this.fileSet && this.fileSet.size > 0){
       this.sub = this.uploadFileService.upload(this.fileSet, 'api/uploads').subscribe(
         (response: any) => {
           console.log(response, 'Arquivos enviados com sucesso.');
         }
       )
     }
    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
