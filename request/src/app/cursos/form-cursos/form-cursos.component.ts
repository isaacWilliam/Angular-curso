import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CursosService} from "../cursos.service";
import {MessageLayoutService} from "../../shared/services/message.layout.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

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
    private cursoService: CursosService,
    private messageLayoutService: MessageLayoutService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(){
    let id;
    id = this.route.snapshot.params['id'];

    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(14)]]
    })
  }

  getValidForm(control: any){
    return control.errors && control.touched;
  }

  enviarForm(){
    this.loading = true;

    setTimeout(() => {
      this.loading = false
      if(this.form.valid){
        this.cursoService.postCurso(this.form.value).subscribe(
          success => {
            this.showSimpleToast('success', 'Sucesso!!', 'Curso adicionado com sucesso.');
            //todo Usado para voltar ao ponto anterior, no caso a ultima rota que estava
            this.location.back();
          },
        );
      }
    }, 3000);

  }

  showSimpleToast(severity: string, summary: string, detail: string){
    this.messageLayoutService.showSimpleToast({severity, summary, detail})
  }

}
