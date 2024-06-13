import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { CountryService } from './demo/service/country.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ColegiosTableCaptionComponent } from './shared/components/table-caption/table-caption.component';

@NgModule({          
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService,
        EventService,
        IconService,
        NodeService,
        ColegiosTableCaptionComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
