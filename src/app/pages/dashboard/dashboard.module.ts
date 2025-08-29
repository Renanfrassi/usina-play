import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    DashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [DashboardPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardPageModule {}
