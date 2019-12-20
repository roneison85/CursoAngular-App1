import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event) : void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBR == this.resposta){
      alert('A frase está correta');
      this.rodada++;
      this.progresso = (this.rodada * 100) / this.frases.length;
      console.log(this.progresso);
      this.rodadaFrase = this.frases[this.rodada]; 
    }else{
      alert('A frase esta errada');
    }
    
  }

}
