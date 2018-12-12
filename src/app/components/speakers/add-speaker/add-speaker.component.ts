import { Component, OnInit } from '@angular/core';
import { SpeakerService } from 'src/app/services/speaker.service';
import { Speaker } from 'src/app/models';

@Component({
  selector: 'app-add-speaker',
  templateUrl: './add-speaker.component.html',
  styleUrls: ['./add-speaker.component.css']
})
export class AddSpeakerComponent implements OnInit {
  name: string = '';
  profilePic: string = '';
  twitter: string = '';
  about: string = '';
  location: string = '';
  email: string = '';
  phone: string = '';

  constructor(private speakerService: SpeakerService) { }

  ngOnInit() {
  }

  onSubmit() {
    const speaker = {
      name: this.name,
      profilePic: this.profilePic,
      twitter: this.twitter,
      about: this.about,
      location: this.location,
      email: this.email,
      phone: this.phone,
      sessions: []
    } as Speaker
    this.speakerService.addNewSpeaker(speaker);

    this.name = '';
    this.profilePic = '';
    this.twitter = '';
    this.about = '';
    this.location = '';
    this.email = '';
    this.phone = '';
  }

}
