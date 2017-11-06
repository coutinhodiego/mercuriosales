import { Component } from '@angular/core';
import { CadastroProdutoService } from '../cadastro-produto.service'
import { Produto } from '../produto';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  //declarando variavel
  produtos;
  nome;
  tipo;

  constructor(private cadastrar : CadastroProdutoService,
    private router: Router,
    private http : HttpClient) {
    //variavel recebe arrayProdutos que vem do servico.
    this.produtos = cadastrar.arrayProdutos;
    this.lista();
  }
  //array de cores
  cores = ['Vermelho', 'Azul', 'Cinza Fosco'];
  tipoProduto = ['Clip de guidao','Guidao de bicicleta','Capacete de bicicleta']

  modelo = {}

  //funcao que recebe um parametro
  inserir(){
    console.log(this.modelo)
    this.http.post('http://localhost:3000/produtos', this.modelo)
    .subscribe(req => {
      this.lista();
    });
  }

  lista(){
    this.http
    .get('http://localhost:3000/produtos')
    .subscribe((res) => {
      this.produtos = res;
      console.log(this.produtos)
      // this.cadastrar.inserirProduto(this.produtos);
    })
  }

    //chamasse a variavel com o servico usando seu metodo de inserirProduto passando o parametro.value -> valor dentro do parametro(HTML)
    // this.cadastrar.inserirProduto(this.modelo);


    //input recebe vazio '' no seu value
    // input.value = '';
    //imprimi a variavel que possui o servico sendo chamado na funcao
    // console.log(this.produtos);

  // }

}
