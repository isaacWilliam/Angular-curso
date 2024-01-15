import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CursosService} from "../cursos.service";
import {MessageLayoutService} from "../../shared/services/message.layout.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {concatMap, exhaustMap, map, mergeMap, switchMap} from "rxjs";
import {Curso} from "../model/curso";
import {Cursos2Service} from "../cursos2.service";

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.scss'],
  preserveWhitespaces: true
})
export class FormCursosComponent implements OnInit{

  form: FormGroup = new FormGroup({})
  loading = false;

  constructor(
    private fb: FormBuilder,
    private cursoService: Cursos2Service,
    private messageLayoutService: MessageLayoutService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    const curso = this.route.snapshot.data['curso'];

    this.createForm(curso)

    //todo Esse método é mais robusto para ser usado em aberturar de formulários
    // this.route.params.subscribe(
    //   params => {
    //     const id: any = params['id'];
    //     const $curso = this.cursoService.getCursoById(id);
    //     $curso.subscribe( curso => {
    //       this.updateForm(curso);
    //     })
    //   }
    // )

    //todo Esse método é mais simples que o acima porém se usar o resolve ele simplifica ainda mais
    // this.route.params.pipe(
    //   map(params => params['id']),
    //   switchMap(id => this.cursoService.getCursoById(id))
    //
    //   // concatMap -> a ordem das chamadas importam
    //   // mergeMap -> a ordem das chamadas não importam
    //   // exhaustMap -> faz uma chamada até terminar ou retornar algo
    // ).subscribe(curso => this.updateForm(curso),
    //   error => {
    //     this.createForm();
    //   });

  }

  createForm(curso: Curso){
    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(5), Validators.maxLength(14)]]
    })
  }

  //todo esse método foi usado de exemplo para quando não for usado um resolve
  // updateForm(curso: any){
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   })
  // }

  getValidForm(control: any){
    return control.errors && control.touched;
  }

  enviarForm(){

    this.loading = true;

    // setTimeout(() => {
      this.loading = false
      if(this.form.valid){
        let msg = this.form.value.id ? 'Curso editado com sucesso.' : 'Curso criado com sucesso.'
        this.cursoService.save(this.form.value).subscribe(
          success => {
            this.showSimpleToast('success', 'Sucesso!!', msg);
            //todo Usado para voltar ao ponto anterior, no caso a ultima rota que estava
            this.location.back();
          },
        );
      }
    // }, 3000);

  }

  showSimpleToast(severity: string, summary: string, detail: string){
    this.messageLayoutService.showSimpleToast({severity, summary, detail})
  }

}
