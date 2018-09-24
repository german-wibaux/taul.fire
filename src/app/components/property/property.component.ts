import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {



  constructor(private propertyService: PropertyService , private route: ActivatedRoute) { }

  ngOnInit() { 
   // this.propertyService.getProperty()
   this.route.params.subscribe( result => {
     this.propertyService.getProperty(result['id']).subscribe( resultProp => {
      console.log(resultProp);
     })
   });
  }
    
  }
