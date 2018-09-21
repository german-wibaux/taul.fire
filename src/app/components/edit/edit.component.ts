import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { PropiedadInterface } from '../../models/propiedadInterface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  idProperty: string;
  properties: PropiedadInterface[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertiesService: PropertyService
  ) { }

  ngOnInit() {
    // this.idProperty = this.route.snapshot.params['id'];
    this.propertiesService.getProperties().subscribe( properties => {
      /** List every properties */
      this.properties = properties;
      console.log(this.properties);
    })
  }

}
