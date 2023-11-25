import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumnosFiltrer'
})
export class AlumnosFiltrerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
