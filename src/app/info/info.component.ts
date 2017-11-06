import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { CadastroProdutoService } from '../cadastro-produto.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  infoArray= {};
  _id;
  infoDoId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cadastrar : CadastroProdutoService,
    private http : HttpClient
  ) {

    // this.infoArray = cadastrar.arrayProdutos;
    // this._id = cadastrar.id;
    // console.log(this._id)
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id)

    this.http
    .get(`http://localhost:3000/produtos/produto/${this._id}`)
    .subscribe((res) => {
      this.infoArray = res;
      console.log(this.infoArray);
      console.log(typeof this.infoArray);
    })
  }

  ngOnInit() {

  }

}
