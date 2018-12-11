import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css']
})
export class AddTrackComponent implements OnInit {
  name: string;

  constructor(private taskService: TrackService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.taskService.addNewTrack(this.name);
  }
}
