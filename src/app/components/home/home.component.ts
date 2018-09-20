import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { PropiedadInterface } from '../../models/propiedadInterface';

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
  ) { }


  ngOnInit() {
    this.propertiesService.getProperties().subscribe( properties => {
      /** List every properties */
      this.properties = properties;
      console.log(this.properties[5]);
    })
  }

  /*Edit a property*/
  editProperty(event, property: PropiedadInterface) {
    this.editState = true;
    this.propertyToEdit = property;
  }

  updateCurso(property: PropiedadInterface) {
    this.propertiesService.updateProperty(property);
  }

}
