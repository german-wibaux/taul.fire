import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { PropiedadInterface } from '../../models/propiedadInterface';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property: PropiedadInterface = null;


  constructor(private propertyService: PropertyService , private route: ActivatedRoute) { }

  ngOnInit() { 
   // this.propertyService.getProperty()
   this.route.params.subscribe( result => {
     this.propertyService.getProperty(result['id']).subscribe( resultProp => {
      this.property = resultProp;      
     })
   });
  }
    
  }
