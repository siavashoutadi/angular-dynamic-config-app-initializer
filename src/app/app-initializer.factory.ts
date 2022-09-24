import { ConfigService } from './config/config.service';

export function initializeAppFactory(
  configService: ConfigService
): () => Promise<any> {
  return async () => {
    return await configService.initializeApp();
  };
}
