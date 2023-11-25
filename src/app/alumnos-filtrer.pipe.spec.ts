import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './interfaces/utl';

@Pipe({
  name: 'alumnoFiltrer'
})
export class AlumnoFiltrerPipe implements PipeTransform {

  transform(value:AlumnosUtl[], args:string): AlumnosUtl []{
    let filter:string=args? args.toLocaleLowerCase():'';

    return filter ? value.filter((alumno:AlumnosUtl)=>
    alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1):value;
  }

}
