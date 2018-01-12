import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { UnitmasterComponent } from './unitmaster/unitmaster.component';
import { UnitdetailComponent } from './unitdetail/unitdetail.component';
import { AppRoutingModule } from './/app-routing.module';
import { UnitService} from './unit.service';
import { MyFilterPipe } from './unitmaster/myfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UnitmasterComponent,
    UnitdetailComponent,
    MyFilterPipe  
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule,FormsModule
  ],
  providers: [UnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }