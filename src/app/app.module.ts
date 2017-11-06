import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//modulos e servicos criados via ng generate
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BodyComponent } from './body/body.component';
import { CadastroProdutoService } from './cadastro-produto.service';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'info/:id', component: InfoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    BodyComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    CadastroProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
