import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";
import {catchError, map, Observable, of, Subject, take} from "rxjs";
import {MessageLayoutService} from "../shared/services/message.layout.service";
import {ConfirmationService, Message, MessageService} from "primeng/api";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  preserveWhitespaces: true,
  providers: [ConfirmationService, MessageService]
})
export class CursosComponent implements OnInit{

  // cursos: any;
  cursos$: Observable<any> = new Observable<any>;
  error$ = new Subject<boolean>();
  messages: Message[] = [{ severity: 'error', summary: 'Erro de Requisição', detail: 'Algo deu errado, volte a página inicial e verifique com nossos técnicos' }]

  constructor(
    private cursoService: CursosService,
    private messageLayoutService: MessageLayoutService,
  ) {}

  ngOnInit() {

    this.getCursos();

  }

  getCursos(){
     this.cursos$ = this.cursoService.getListCursos()
       .pipe(
         // map(dados => {if (dados) this.showSimpleToast('success', 'Sucesso!!', 'Sua requisição foi concluida')}),
         //todo Quando for tratar erros no Pipe usar sempre por ultimo para que possa alcançar os erros que estão acima
       catchError(err => {
         this.error$.next(true);
         this.showSimpleToast('error', 'Falha!!', 'Sua requisição não foi concluída.')
         console.log(err);
         // return empty();
         return of();
       }),

     );

     //todo Exemplo de como tratar erros no subscribe

     // this.cursoService.getListCursos().subscribe(
     //   dados => {console.log(dados)},
     //   error => {console.log(error)},
     //   () => console.log('completo')
     // )
  }
  removerCurso(id: number | undefined){
    this.cursoService.deleteCurso(id).subscribe(
      remove => {
        this.showSimpleToast('success', 'Sucesso!!', 'Curso removido com sucesso.');
        this.getCursos();
      }
    )
  }

  showSimpleToast(severity: string, summary: string, detail: string){
    this.messageLayoutService.showSimpleToast({severity, summary, detail})
  }

  showConfirm(header: string, message: string, icon: string, id?: number){
    this.messageLayoutService.confirmDilalog({header: header, message: message, icon: icon}).pipe(
      map(result => {
        if (result) {
          this.removerCurso(id);
        }
      }),
      take(1)).subscribe();
  }

}
