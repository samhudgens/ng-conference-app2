import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Speaker } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  speakersCollection: AngularFirestoreCollection<Speaker>;
  speakerDoc: AngularFirestoreDocument<Speaker>;
  speakers: Observable<Speaker[]>;
  speaker: Observable<Speaker>;

  constructor(private afs: AngularFirestore) { 
    this.speakersCollection = this.afs.collection(
      'test-speakers', ref => ref.orderBy('name', 'asc'));
  }

  getSpeakers(): Observable<Speaker[]> {
    this.speakers = this.speakersCollection.snapshotChanges()
      .pipe(map(response => {
        return response.map(action => {
          const data = action.payload.doc.data() as Speaker;
          data.id = action.payload.doc.id;
          return data;
        })
      }))
      return this.speakers;
  }

  addNewSpeaker(speaker: Speaker) {
    this.speakersCollection.add(speaker);
  }

  // This method was already run once to populate the database
  uploadSpeakersfromJSON() {
    const dataJSON = require('../../assets/data/data.json');
    const speakers = dataJSON.speakers as Speaker[];
    speakers.forEach(spk => {
      const speaker = {
        name: spk.name,
        profilePic: spk.profilePic ? spk.profilePic : '',
        twitter: spk.twitter ? spk.twitter : '',
        about: spk.about ? spk.about : '', 
        location: spk.location ? spk.location : '',
        email: spk.email ? spk.email : '',
        phone: spk.phone ? spk.phone : '',
        sessions: []
      } as Speaker;
      this.addNewSpeaker(speaker);
    });
  }

}
