import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './navbar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './404/error-404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    //Todo novo componente precisa ser informdo nestes colchetes
    AppComponent,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',redirectTo: 'courses', pathMatch:'full'},
      {path:'**', component: Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
