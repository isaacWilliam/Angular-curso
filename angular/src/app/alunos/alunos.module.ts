import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AlunosComponent} from "./alunos.component";
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import {AlunosRountingModule} from "./alunos.rounting.module";
import {AlunosService} from "./alunos.service";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {AlunosGuard} from "../auth/alunos.guard";

@NgModule({
  imports: [CommonModule, AlunosRountingModule, SharedModule, FormsModule],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  exports: [],
  providers: [AlunosService, AlunosGuard]
})

export class AlunosModule {}
