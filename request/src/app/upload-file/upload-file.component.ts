import {Component, OnDestroy} from '@angular/core';
import {MessageService} from "primeng/api";
import {UploadFileService} from "./upload-file.service";
import {Subscription} from "rxjs";
import {environment} from "../../environments/environment";
import {MessageLayoutService} from "../shared/services/message.layout.service";

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  providers: [MessageService],
  preserveWhitespaces: true
})
export class UploadFileComponent implements OnDestroy{

  uploadedFiles: any[] = [];
  fileSet: Set<File> = new Set<File>();
  progressValue: number = 0;
  sub: Subscription = new Subscription();

  constructor(
    private uploadFileService: UploadFileService,
    private messageLayoutService: MessageLayoutService
  ) {}

  onUpload(event: any) {

    for(let file of event.files) {
      this.uploadedFiles.push(file);
      this.fileSet.add(file);

    }
     if(this.fileSet && this.fileSet.size > 0){
       this.sub = this.uploadFileService.upload(this.fileSet, environment.BASE_URL + '/uploads').subscribe(
         (response: any) => {
           if(response.type == 4) {
             this.progressValue = 0;
             this.showSimpleToast('success', 'Sucesso!!', 'Arquivos enviados com sucesso.');
           }
         }
       )
     }
    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onDownloadPdf(){
    this.sub = this.uploadFileService.download(`${environment.BASE_URL}/downloadPdf`).subscribe(
      response => {
        this.uploadFileService.handleFile(response, 'report.pdf');
      }
    )
  }

  onDownloadExcel(){
    this.sub = this.uploadFileService.download(`${environment.BASE_URL}/downloadExcel`).subscribe(
      response => {
        this.uploadFileService.handleFile(response, 'report.xlsx');
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showSimpleToast(severity: string, summary: string, detail: string){
    this.messageLayoutService.showSimpleToast({severity, summary, detail})
  }
}
