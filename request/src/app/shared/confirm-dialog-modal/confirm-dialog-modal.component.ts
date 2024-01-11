import {Component} from "@angular/core";

@Component({
  selector: 'app-confirm-dialog',
  template: ' <p-confirmDialog #cd [breakpoints]="{\'1500px\': \'50vw\',\'960px\': \'75vw\', \'640px\': \'100vw\'}" [style]="{width: \'30vw\'}"><ng-template pTemplate="footer">\n' +
    '<button type="button" pButton icon="pi pi-times" class="p-button-outlined" label="Não" (click)="cd.reject()"></button>\n' +
    '<button type="button" pButton icon="pi pi-check" label="Sim" (click)="cd.accept()"></button>\n' +
    '</ng-template></p-confirmDialog>',
})

export class ConfirmDialogModalComponent{}
