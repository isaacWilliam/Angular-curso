import {Injectable} from "@angular/core";
import {Message} from "primeng/api";
import {Subject} from "rxjs";

@Injectable()
export class MessageLayoutService {

  toastChange = new Subject<Message>();
  constructor() {}

  showSimpleToast(messages: Message) {
    this.toastChange.next(messages);
  }

}
