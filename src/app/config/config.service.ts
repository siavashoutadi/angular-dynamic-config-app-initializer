import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppConfig } from './model/app-config.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  configUrl = 'assets/config.json';
  config: AppConfig = { ApiBaseUrl: '' };

  constructor(private httpClient: HttpClient) {}

  initializeApp(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = await firstValueFrom(
        this.httpClient.get<AppConfig>(this.configUrl)
      );
      this.config = {
        ApiBaseUrl: response.ApiBaseUrl,
      };

      if (this.isConfigValid()) {
        resolve(this.config);
      }

      reject(new Error('Could not get the application configuration!'));
    });
  }

  isConfigValid(): boolean {
    if (this.config.ApiBaseUrl in ['', null, undefined]) {
      return false;
    }
    return true;
  }
}
