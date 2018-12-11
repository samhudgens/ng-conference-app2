import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Track } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  tracksCollection: AngularFirestoreCollection<Track> ;
  trackDoc: AngularFirestoreDocument<Track> ;
  tracks: Observable<Track[]> ;
  track: Observable<Track> ;

  constructor(private afs: AngularFirestore) { 
    this.tracksCollection = this.afs.collection(
      'Tracks', ref => ref.orderBy('name', 'asc'));
  }

  getTracks(): Observable<Track[]> {
    this.tracks = this.tracksCollection.snapshotChanges()
      .pipe(map(response => {
        return response.map(action => {
          const data = action.payload.doc.data() as Track;
          data.id = action.payload.doc.id;
          return data;
        })
      }))
    return this.tracks
  }

  addNewTrack(name: string) {
    const track = { name: name }
    this.tracksCollection.add(track)
  }
}
