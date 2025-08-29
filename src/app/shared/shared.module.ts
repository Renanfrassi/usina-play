import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy } from '@ionic/angular';
import { SlideImageComponent } from './slide-image/slide-image.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [SlideImageComponent, HeaderComponent],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    exports: [SlideImageComponent, HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports:[CommonModule]
})
export class SharedModule { }
