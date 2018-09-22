import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { PropiedadInterface } from '../../models/propiedadInterface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    
  }
  
  properties: PropiedadInterface[];
  editState: boolean = false;
  propertyToEdit: PropiedadInterface;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertiesService: PropertyService
  ) { 
    // this.idProperty = this.route.snapshot.params['id'];
    this.propertiesService.getProperties().subscribe( properties => {
      /** List every properties */
      this.properties = properties;
      //console.log(this.properties);
    });
  }
    

  ngOnInit() {
    
  }

  // ngAfterViewChecked() {
  //   // this.idProperty = this.route.snapshot.params['id'];
  //   this.propertiesService.getProperties().subscribe( properties => {
  //     /** List every properties */
  //     this.properties = properties;
  //     //console.log(this.properties);
  //   });
  // }

  /*Edit a property*/
  editProperty(event, property: PropiedadInterface) {
    this.editState = true;
    this.propertyToEdit = property;
  }

  showChange() {
    
  }

  // ngDoCheck() {
  //   this.propertiesService.getProperties().subscribe( properties => {
  //     /** List every properties */
  //     this.properties = properties;
  //     //console.log(this.properties);
  //   });
  // }

}
