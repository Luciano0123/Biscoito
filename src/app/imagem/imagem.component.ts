import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() inteiro : boolean = true;
  biscoitoI: string = "../../assets/biscoito.png"
  biscoitoQ: string = "../../assets/biscoito-quebrado.png"
  img: string = "../../assets/biscoito.png";

  troca(){
    if(this.inteiro == true){
      this.img = this.biscoitoI;
      this.inteiro = false;
    }else{
      this.img = this.biscoitoQ;
      this.inteiro = true;
    }
  }
}
