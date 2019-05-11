import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('camera')
  camera: ElementRef<HTMLVideoElement>;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 590,
        height: 165,
      }
    })
      .then((stream) => {
        this.camera.nativeElement.srcObject = stream;
      }).catch((e) => {
        alert('could not connect stream ' + e);
    });
  }

}
