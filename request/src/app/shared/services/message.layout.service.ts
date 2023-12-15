import {Injectable} from "@angular/core";
import {Message} from "primeng/api";
import { Subject} from "rxjs";

@Injectable()
export class MessageLayoutService {

  messageChange = new Subject<Message>();

  // private messageChange = new Subject<Message>();
  // public messageChange$ = this.messageChange.asObservable();

  showSimpleToast(messages: Message) {
    this.messageChange.next(messages);
  }

}
