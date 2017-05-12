import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { App1Module } from './app1/app1.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


window["run"] = function(appName: any) {
  platformBrowserDynamic([{provide: 'AppName', useValue: appName }])
   .bootstrapModule(AppModule);
}

