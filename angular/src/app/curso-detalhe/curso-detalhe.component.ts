import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id: number | string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}



  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
