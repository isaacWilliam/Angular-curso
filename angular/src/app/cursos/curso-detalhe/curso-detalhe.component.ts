import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

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
    this.activatedRoute.paramMap.subscribe((res => this.id = res.get('id')))
  }
}
