import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Session } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessionsCollection: AngularFirestoreCollection<Session>;
  sessionDoc: AngularFirestoreDocument<Session>;
  sessions: Observable<Session[]>;
  session: Observable<Session>; 

  constructor(private afs: AngularFirestore) { 
    this.sessionsCollection = this.afs.collection(
      'test-sessions', ref => ref.orderBy('name', 'asc'));
  }

  getSessions(): Observable<Session[]> {
    this.sessions = this.sessionsCollection.snapshotChanges()
    .pipe(map(response => {
        return response.map(action => {
          const data = action.payload.doc.data() as Session;
          data.id = action.payload.doc.id;
          return data;
        });
    }));
    return this.sessions;
  }

  addSession(session: Session) {
    this.sessionsCollection.add(session);
  }

}
