import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private propertiesService: PropertyService
  ) { }

  ngOnInit() {
    this.propertiesService.getProperties().subscribe( properties => {
      console.log(properties);
    })
  }

}
