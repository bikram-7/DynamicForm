import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { AboutComponent } from './about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    EmpFormComponent,
    EmpTableComponent,
    AboutComponent,
 ],
  imports: [
    BrowserModule, 
    NgxPaginationModule,
    AppRoutingModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
