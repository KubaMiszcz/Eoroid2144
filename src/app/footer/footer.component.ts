import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  author: string;
  versionInfo: string;

  constructor() { }

  ngOnInit(): void {
    this.author = (environment.production ? '' : environment.env) + environment.AUTHOR;
    this.versionInfo =
      ' v.' + environment.VERSION
      + ' ' + environment.BUILDDATETIME;
    this.versionInfo += environment.env;
    console.log('App started: ' + this.versionInfo);
  }

}
