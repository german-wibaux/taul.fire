import { Component, OnInit } from '@angular/core';
import { PropiedadInterface } from '../../models/propiedadInterface';
import { NgForm } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable, from } from 'rxjs';
import { finalize, switchMap, tap, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css']
})
export class NewPropertyComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>; // For download files
  snapshot: Observable<any>;
  // Main task
  task: AngularFireUploadTask;

  property: PropiedadInterface = {
    banios: '',
    cocheras: '',
    nombre: '',
    codigo: '',
    estado: '',
    descripcion: '',
    geolocalizacion: '',
    habitaciones: '',
    localidad: '',
    operacion: '',
    precio: '',
    propiedad: '',
    superficieCubierta: '',
    superficieTotal: '',
    imagen: [],
  }

  constructor(private propertyService: PropertyService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onSaveProperty(formInput: NgForm) {
    console.log(this.property);
    this.propertyService.addProperty(this.property);
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
