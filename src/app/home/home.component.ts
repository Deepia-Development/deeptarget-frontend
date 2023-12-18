import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private cdr: ChangeDetectorRef
  ){}

  videoSource = '../../assets/images/Starboy x I Feel It Coming.mp4';
  currentTime = 0;
  videoDuration = 0;
  isPlaying: boolean = false;

  ngOnInit() {
    const videoElement = document.createElement('video');
    videoElement.src = this.videoSource;

    videoElement.addEventListener('loadedmetadata', () => {      
      this.videoDuration = videoElement.duration;
    });
  }

  onTimeUpdate(event: any) {
    this.currentTime = event.target.currentTime;      
  }

  playButton() {
    const video = document.getElementById('video') as HTMLVideoElement;
      if (video) {
        if (this.isPlaying) {
          video.pause();
      } else {
        video.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }  
  
}
