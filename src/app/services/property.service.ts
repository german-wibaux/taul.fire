import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { PropiedadInterface } from '../models/propertyInterface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyCollection: AngularFirestoreCollection <PropiedadInterface>;
  properties: Observable<PropiedadInterface[]>;
  propertyDoc: AngularFirestoreDocument <PropiedadInterface>;

  constructor( public afs: AngularFirestore ) { 
    this.properties = afs.collection('propiedades').valueChanges();    
   }


   getProperties() {
     return this.properties;
   }

}
