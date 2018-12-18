import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TracksComponent } from "./components/tracks/tracks.component";
import { AddTrackComponent } from "./components/tracks/add-track/add-track.component";
import { SpeakersComponent } from "./components/speakers/speakers.component";
import { AddSpeakerComponent } from "./components/speakers/add-speaker/add-speaker.component";
import { SessionsComponent } from "./components/sessions/sessions.component";
import { EditSessionComponent } from "./components/sessions/edit-session/edit-session.component";
import { AddSpeakersComponent } from "./components/sessions/add-speakers/add-speakers.component";
import { AddTracksComponent } from "./components/sessions/add-tracks/add-tracks.component";

const appRoutes : Routes = [
  { path: '', component: TracksComponent },
  { path: 'tracks', component: TracksComponent,
    children: [
      { path: 'add', component: AddTrackComponent }
    ]},
  { path: 'speakers', component: SpeakersComponent,
    children: [
      { path: 'add', component: AddSpeakerComponent }
  ]},
  { path: 'sessions', component: SessionsComponent,
    children: [
      { path: 'edit/:mode', component: EditSessionComponent, 
        children: [
          { path: 'speakers', component: AddSpeakersComponent },
          { path: 'tracks', component: AddTracksComponent }    
        ]
      },
    ]
  }  
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}