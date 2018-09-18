// import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { PropiedadInterface } from '../models/propiedadInterface';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class PropiedadService {
//   propiedadCollection: AngularFirestoreCollection <PropiedadInterface>;
//   propiedades: Observable<PropiedadInterface[]>;
//   propiedadDoc: AngularFirestoreDocument <PropiedadInterface>;

//   constructor( public afs: AngularFirestore ) { 
//     this.propiedades = afs.collection('propiedades').valueChanges();    
//    }


//    getPropiedades() {
//      return this.propiedades;
//    }

// }
