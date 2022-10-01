import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'primerLetraMayuscula'
})

export class PrimerLetraMayusculaPipe implements PipeTransform{
    transform(value: string): string {
        return value.charAt(0).toUpperCase().concat(value.slice(1));
    }
}