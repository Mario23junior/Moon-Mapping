import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planets'
})
export class PlanetsPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Saturno': return 'saturn-logo.ico'
      case 'Marte':return 'mars-logo.ico'
      case 'Jupiter':return 'jupiter-logo.ico'
      case 'Mercurio':return 'mercury-logo.ico'
      case 'Neturno':return 'neptune-logo.ico'
      case 'Venus':return 'venus-logo.ico'
      case 'Plutão':return 'plutao-logo.ico'
      case 'Terra':return 'earth-logo.ico'
      case 'Urano':return 'urano-logo.ico'
      case 'Sol':return 'sun-logo.ico'

    }
    return 'wewes';
  }

}
