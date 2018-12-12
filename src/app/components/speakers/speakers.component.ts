import { Component, OnInit } from '@angular/core';

import { Speaker } from 'src/app/models';
import { SpeakerService } from '../../services/speaker.service' ;

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  speakers: Speaker[];

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
    // this.speakerService.uploadSpeakersFromJSON();
    // We already ran the above method once to populate the database
    this.speakerService.getSpeakers().subscribe(
      (data: Speaker[]) => { this.speakers = data }
    )
  }
}
