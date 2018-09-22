import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { PropiedadInterface } from '../../models/propiedadInterface';
import { Observable } from 'rxjs-compat';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  properties: PropiedadInterface[];
  editState: boolean = false;
  propertyToEdit: PropiedadInterface;

  constructor(
    private propertiesService: PropertyService
  ) { 
    this.propertiesService.getProperties().subscribe( properties => {
      /** List every properties */
      this.properties = properties;
        
    });
    this.propertiesService.getProperty().subscribe( property => {
      console.log(property);
    });
  }


  ngOnInit() { }  

  updateCurso(property: PropiedadInterface) {
    this.propertiesService.updateProperty(property);
  }

}
