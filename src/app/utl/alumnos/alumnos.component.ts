import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{
  imagenWidth:number=50;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFiltrer:string='';
  alumnoTitle!:string;
  dataSource:any=[];


  showImage():void{
    this.muestraImg=!this.muestraImg;
  }
alumnosIric:AlumnosUtl[]=[
  {
    matricula:1234,
    nombre:'pedro',
    apaterno:'lopez',
    amaterno:'muñoz',
    correo:'pedro@gmail.com'
  },

  {
    matricula:12345,
    nombre:'luis',
    apaterno:'garcia',
    amaterno:'lopez',
    correo:'luiso@gmail.com'
  },

  {
    matricula:12346,
    nombre:'juan',
    apaterno:'villa',
    amaterno:'loza',
    correo:'juan@gmail.com'
  }
]
ngOnInit(): void {
  this.dataSource=this.alumnosIric
}

}
