import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CepService } from './service/cep.service';
import { CEP } from 'cep-promise';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cep-app';

  address: any = {};

  constructor(private cepService: CepService,) 
  {

  }

  async search(cepSearch: string) : Promise<void> {
      try{
        this.address = await this.cepService.search(cepSearch);
      }catch(error){
        console.log("Cep não encontrado");
      }      
  }
}
