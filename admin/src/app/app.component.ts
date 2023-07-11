import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  codigo = 0;
  descripcion = '';
  precio = 0;
  select = false;
  products:any = [];

  oldCode = 0;

  //Funcion para añadir producto, primero comporvamos que el codigo no sea 0, despues que el codigo no este en uso
  addProduct() {
    if(this.codigo == 0){
      this.codigo++;
    }
    for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].codigo == this.codigo){
          this.codigo++;
        }
    }
    this.products.push({
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    });
  }

  //Borramos el producto
  deleteProduct(code:number){
    for (let i = 1; i < this.products.length; i++) {
      if(this.products[i].codigo == code){
        this.products.splice(i, 1);
      }
    }
  }

  //Seleccionamos el producto
  selectProduct(code:number){
    this.select = true;
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].codigo == code){
        this.codigo = this.products[i].codigo;
        this.descripcion = this.products[i].descripcion;
        this.precio = this.products[i].precio;
        this.oldCode = this.codigo;
      }
    }
  }

  //Cambiamos el producto
  changeProduct(code:number){
    this.select = true;
    for (let i = 0; i < this.products.length; i++) {
      if(this.products[i].codigo == code){
        this.products[i].codigo = this.codigo;
        this.products[i].descripcion = this.descripcion;
        this.products[i].precio = this.precio;
      }
    }
    this.select = false;
  }
  
}
