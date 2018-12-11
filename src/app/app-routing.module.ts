import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TracksComponent } from "./components/tracks/tracks.component";
import { AddTrackComponent } from "./components/tracks/add-track/add-track.component";

const appRoutes : Routes = [
  { path: '', component: TracksComponent },
  { path: 'tracks', component: TracksComponent,
    children: [
      { path: 'add', component: AddTrackComponent }
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