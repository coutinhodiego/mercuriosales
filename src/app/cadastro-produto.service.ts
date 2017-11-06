import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
// exportando um classe CadastroProdutoService para ser usado pelos componentes.
export class CadastroProdutoService {

  //array para agrupar os produtos
  arrayProdutos = [];
  id;

  constructor(private http : HttpClient) {

  }

  //funcao que inseri um produto no array de produtos
  inserirProduto (modelo){
    this.arrayProdutos.push(modelo);
  }

  salvarId(idSelecionado){
    this.id = idSelecionado;
  }

  
}
