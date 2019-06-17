import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('camera')
  camera: ElementRef<HTMLVideoElement>;

  constructor() {
  }

  async ngAfterViewInit() {
    try {
      this.camera.nativeElement.srcObject = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 590,
          height: 165,
        }
      });
    } catch (e) {
      alert('could not connect stream ' + e);
    }
  }
}
