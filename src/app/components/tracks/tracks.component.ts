import { Component, OnInit } from '@angular/core';

import { Track } from 'src/app/models';
import { TrackService } from '../../services/track.service' ;

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  tracks: Track[];

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.trackService.getTracks().subscribe(
      (data: Track[]) => { this.tracks = data }
    )
  }
}
