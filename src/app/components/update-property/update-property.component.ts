import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PropiedadInterface } from 'src/app/models/propiedadInterface';
import { Observable, from } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { switchMap, tap, finalize } from 'rxjs/operators';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-update-property',
  templateUrl: './update-property.component.html',
  styleUrls: ['./update-property.component.css']
})
export class UpdatePropertyComponent implements OnInit {
  property: PropiedadInterface = null;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>; // For download files
  snapshot: Observable<any>;
  // Main task
  task: AngularFireUploadTask;
  constructor(private propertyService: PropertyService , 
              private route: ActivatedRoute, 
              private router:Router,
              private storage: AngularFireStorage) { }

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

   uploadFile(event) {
    // console.log(event);

    const file = event.target.files[0];


    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type taul-app')
      return;
    }
    let loading = true;
    const day = new Date();
    const path = 'properties/' + day.getTime() + '/' + file.name;
    const customMetadata = { app: 'taul-app' };
    const ref = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.uploadPercent = this.task.percentageChanges();


    return from(this.task).pipe(
      switchMap(() => ref.getDownloadURL()),
      tap(url => {
        // use url here, e.g. assign it to a model       
        this.property.imagen.push(url);        
      }),
      finalize(() => loading = false)
    ).subscribe(() => {
      // success
    }, error => {
      // failure
      console.log(error);
    });

    //*********************Codigo pa la barra de progreso y algo mas si pinta************************
    //     <div>{{ uploadPercent | async }}</div>
  }


}
