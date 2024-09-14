import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { IFirebaseQuery } from '../../interfaces/IFirebaseQuery';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private readonly _db: AngularFirestore) { }

  public get<T>(query: IFirebaseQuery): Promise<T> {
    return new Promise((resolve, reject) => {
      this._db.collection<T>(query.collection, ref => ref.where(query.field, query.condition, query.value)).snapshotChanges().subscribe({
        next(value) {
          value.forEach(item => {
            resolve({ ...item.payload.doc.data(), id: item.payload.doc.id });
          });
        },
      });
    });
  }

  public getCollection<T>(collection: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this._db.collection<T>(collection).valueChanges().subscribe({
        next(value) {
          resolve(value as T);
        },
        error(err) {
          console.log("🚀  ~ QueryService ~ error ~ err:", err);
          reject(err);
        },
      });
    });
  }

  public create(collection: string, data: any) {
    return new Promise((resolve, reject) => {
      this._db.collection(collection).add(data)
        .then((response) => {
          resolve(response.id);
        }).catch((error) => {
          reject(error);
        });
    });
  }
}
