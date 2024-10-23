import { Component } from '@angular/core';

@Component({
  selector: 'app-sorteo',
  standalone: true,
  imports: [],
  templateUrl: './sorteo.component.html',
  styleUrl: './sorteo.component.css'
})
export class SorteoComponent {
 color:string[]=["orange","green","blue","yellow","red"]
 descuento:number=0
 texto?:string
 total?:number

 sorteo(compra:string | number):void{
   compra=Number(compra)
   let indice=this.aleatorio()
   let colorSel=this.color[indice]
   const colorDiv=document.getElementById('color') as HTMLDivElement
   colorDiv.style.background=colorSel

   if(indice==0){
     this.descuento=0.1
     this.texto="El descuento otorgado es del 10%"
   }else if(indice==1){
    this.descuento=0.2
    this.texto="El descuento otorgado es del 20%"
  }else if(indice==2){
    this.descuento=0.3
    this.texto="El descuento otorgado es del 30%"
  }else  if(indice==3){
    this.descuento=0.5
    this.texto="El descuento otorgado es del 50%"
  }else if(indice==4){
    this.descuento=1
    this.texto="El descuento otorgado es del 100%"
  }
  this.descuento=compra*this.descuento
  this.total=compra-this.descuento

 }

 aleatorio():number{
  const numero=Math.floor(Math.random()*5)
  return numero
 }

}
