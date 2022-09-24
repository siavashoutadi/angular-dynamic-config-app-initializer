import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-dynamic-config-app-initializer';

  apiUrl: string = '';

  constructor(private configService: ConfigService) {
    this.apiUrl = configService.config.ApiBaseUrl;
  }
}
