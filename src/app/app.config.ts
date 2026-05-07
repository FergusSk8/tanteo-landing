import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';
import { withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideFileRouter(
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideHttpClient(withFetch(), withInterceptors([requestContextInterceptor])),
    provideClientHydration(withEventReplay()),
  ],
};
