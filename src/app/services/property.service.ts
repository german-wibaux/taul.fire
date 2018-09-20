import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { PropiedadInterface } from '../models/propiedadInterface';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyCollection: AngularFirestoreCollection <PropiedadInterface>;
  properties: Observable<PropiedadInterface[]>;
  propertyDoc: AngularFirestoreDocument <PropiedadInterface>;

  constructor( public afs: AngularFirestore ) { 
    //this.properties = afs.collection('propiedades').valueChanges();
    this.propertyCollection = afs.collection<PropiedadInterface>('properties');
    this.properties = this.propertyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PropiedadInterface;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );    
   }


   getProperties() {
     return this.properties;
   }

   addProperty(property: PropiedadInterface){
     this.propertyCollection.add(property);
     
   }

   deletProperty() {
    console.log('Delete property');
   }

   updateProperty() {
     console.log('Update property');
   }


}
