import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TracksComponent } from "./components/tracks/tracks.component";
import { AddTrackComponent } from "./components/tracks/add-track/add-track.component";
import { SpeakersComponent } from "./components/speakers/speakers.component";
import { AddSpeakerComponent } from "./components/speakers/add-speaker/add-speaker.component";

const appRoutes : Routes = [
  { path: '', component: TracksComponent },
  { path: 'tracks', component: TracksComponent,
    children: [
      { path: 'add', component: AddTrackComponent }
    ]
  },
  { path: 'speakers', component: SpeakersComponent,
    children: [
      { path: 'add', component: AddSpeakerComponent }
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