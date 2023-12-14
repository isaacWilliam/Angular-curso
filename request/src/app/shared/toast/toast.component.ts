import {Component, OnInit} from '@angular/core';
import {Message, MessageService} from "primeng/api";
import {MessageLayoutService} from "../services/message.layout.service";

@Component({
  selector: 'app-toast',
  template: '<p-toast [breakpoints]="{\'920px\': {width: \'100%\', right: \'0\', left: \'0\'}}"></p-toast>',
  providers: [MessageLayoutService, MessageService]
})

export class ToastComponent implements OnInit{

  constructor(
    public messageService: MessageService,
    public messageLayoutService: MessageLayoutService,
  ) {
    this.messageLayoutService.toastChange.subscribe(
      message => this.messageService.add(message)
    )
  }

  ngOnInit() {
    this.messageLayoutService.toastChange.subscribe(
       message => this.messageService.add(message)
    )
  }

}
