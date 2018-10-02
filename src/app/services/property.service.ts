import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { PropiedadInterface } from '../models/propiedadInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyCollection: AngularFirestoreCollection<PropiedadInterface> = null;
  properties: Observable<PropiedadInterface[]>;
  property: Observable<PropiedadInterface>;
  propertyDoc: AngularFirestoreDocument<PropiedadInterface>;

  constructor(public afs: AngularFirestore) {
    //this.properties = afs.collection('propiedades').valueChanges();
    // this.propertyCollection = afs.collection<PropiedadInterface>('properties');
    // this.properties = this.propertyCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => {
    //     const data = a.payload.doc.data() as PropiedadInterface;
    //     const id = a.payload.doc.id;
    //     return { id, ...data};
    //   }))
    // );    
  }


  getProperties() {
    this.propertyCollection = this.afs.collection<PropiedadInterface>('properties');
    this.properties = this.propertyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PropiedadInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.properties;
  }

  public getProperty(property) {
    this.propertyDoc = this.afs.collection('properties').doc(property);
    this.property = this.propertyDoc.snapshotChanges().pipe(map(action => {
      const id = action.payload.id;
      const data = action.payload.data() as PropiedadInterface;

      return { id, ...data };
    }));

    return this.property;


  }

  addProperty(property: PropiedadInterface) {
    this.afs.collection('properties').add(property); 
    //propertyCollection.add(property);


  }

  // getFileUploads(numberItems): AngularFireList<FileUpload> {
  //   return this.afs.list('/test', ref =>
  //     ref.limitToLast(numberItems));
  // }

  deletProperty(property: PropiedadInterface) {
    console.log('Delete property');
  }

  updateProperty(property: PropiedadInterface) {
    this.propertyDoc = this.afs.doc(`properties/${property.id}`);
    this.propertyDoc.update(property);
  }

  public getPropertiesAlternative() {
    console.log(this.afs.collection<PropiedadInterface>('properties').snapshotChanges());
    return this.afs.collection<PropiedadInterface>('properties').snapshotChanges();
  }


}
