import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PropiedadInterface } from 'src/app/models/propiedadInterface';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {
  property: PropiedadInterface = null;
  constructor(private propertyService: PropertyService , 
              private route: ActivatedRoute, 
              private router:Router) { }

  ngOnInit() { 
    // this.propertyService.getProperty()
    this.route.params.subscribe( result => {
      this.propertyService.getProperty(result['id']).subscribe( resultProp => {
       this.property = resultProp;
      //  this.images = this.property.imagen;
      //  for (let i = 0; i < this.images.length; i++) {
      //    this.slides.push({
      //      image: this.images[i]
      //    });
      //  }
             
      })
    });
   }


   onUpdateProperty(property: PropiedadInterface){
    this.propertyService.updateProperty(property);
      this.router.navigate(['/edit']);
   
   }


}
