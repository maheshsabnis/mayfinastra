import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// The AppModule is Loaded
// is loads with all of its dependencies
// e.g. Standard and external Angular modules, Components, Directives, Services, Pipes, etc.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
