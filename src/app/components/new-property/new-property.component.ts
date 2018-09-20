import { Component, OnInit } from '@angular/core';
import { PropiedadInterface } from '../../models/propiedadInterface';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {

  property : PropiedadInterface = {
    banios:'',
    cocheras:'',
    nombre: '',
    codigo: '',
    estado: '',
    descripcion:'',
    geolocalizacion: '',
    habitaciones: '',
    localidad: '',
    operacion: '',
    precio: '',
    propiedad: '',
    superficieCubierta: '',
    superficieTotal: ''
  }

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  onSaveProperty(formInput: NgForm){
    console.log(this.property);
    this.propertyService.addProperty(this.property);
  }

}
