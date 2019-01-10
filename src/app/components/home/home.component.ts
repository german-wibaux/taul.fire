import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { PropiedadInterface } from '../../models/propiedadInterface';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  propertiesVenta: PropiedadInterface[] = [];
  propertiesAlquiler: PropiedadInterface[] = [];
  editState: boolean = false;
  propertyToEdit: PropiedadInterface;

  constructor(
    private propertiesService: PropertyService,
    private route: Router
  ) { 
    this.propertiesService.getProperties().subscribe( properties => {
      /** List every properties */
      properties.forEach(element => {
        if (element.operacion == 'Venta') {
          this.propertiesVenta.push(element);
        } else if (element.operacion == 'Alquiler') {
          this.propertiesAlquiler.push(element);
        }
      });
      
        
    });
    //this.propertiesService.getProperty().subscribe( property => {
      //console.log(property);
    
  }

  // goDetails () {
  //   this.route.navigate(['/details'], { queryParams: { order: proper } });
  // }


  ngOnInit() { }  

  // updateCurso(property: PropiedadInterface) {
  //   this.propertiesService.updateProperty(property);
  // }

}
