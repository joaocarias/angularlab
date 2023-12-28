import { Injectable } from '@angular/core';

import cep, { CEP } from 'cep-promise';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor() { }

  search(cepSearch: string ) : Promise<CEP> {
    return cep(cepSearch);
  }
}
