import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private ctx: AudioContext;

  constructor() { }

  ngOnInit() {
    AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
    this.ctx = new AudioContext();
  }

  play() {
    let osc = this.ctx.createOscillator();
    osc.onended = () => osc.disconnect();
    osc.connect(this.ctx.destination);
    osc.frequency.value = 523.3;
    osc.start();
    osc.stop(this.ctx.currentTime + 1.5);
  }
}
