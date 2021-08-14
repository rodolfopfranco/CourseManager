import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './core/component/navbar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './core/component/404/error-404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    //Todo novo componente precisa ser informdo nestes colchetes
    AppComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CourseModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',redirectTo: 'courses', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
