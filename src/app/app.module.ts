import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { SessionService } from './services/session.service';
import { TrackService } from './services/track.service';
import { SpeakerService } from './services/speaker.service';
import { TracksComponent } from './components/tracks/tracks.component';
import { AddTrackComponent } from './components/tracks/add-track/add-track.component';
import { AppRoutingModule } from './app-routing.module';
import { AddSpeakerComponent } from './components/speakers/add-speaker/add-speaker.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    AddTrackComponent,
    SpeakersComponent,
    AddSpeakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ionic-conference'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    SessionService,
    TrackService,
    SpeakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
