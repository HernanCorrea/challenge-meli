import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './shared/layout/layout.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ItemEffects } from './core/store/item/item.effects';
import { renderState } from './core/store/app.render';
import { CustomSerializer } from './core/store/router/custom-serializer';
import { BreadcrumbModule } from './shared/components/breadcrumb/breadcrumb.module';
import { CommonModule } from '@angular/common';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    BreadcrumbModule,
    BrowserTransferStateModule,
    StoreModule.forRoot(renderState),
    EffectsModule.forRoot([ItemEffects]),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'ARS' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
