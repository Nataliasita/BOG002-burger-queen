import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string,
                        mesa: number,
                        producto: string,
                        cantidad: number,
                        valor: number,
                        subtotal:number}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc!: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
        return actions.map( a => {
          const data =a.payload.doc.data() as Item;
          const id = a.payload.doc.id;
          return { id, ... data}

        })
    })


    )}

  listaitem(){
    return this.items;
  }
  addItem(item:Item){
    this.itemsCollection.add(item);
  }
//  eliminar(item: { id: any; }){
//    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
//    this.itemDoc.delete();
//  }
}
