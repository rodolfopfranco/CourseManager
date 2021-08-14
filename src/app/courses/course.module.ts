import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

//NgModule indica que pode ser um módulo angular
//Após criar um módulo, precisa adicionar ele no app.module.ts (ou equivalente)
@NgModule({
    //declarations informa quais são os pipes e componentes deste módulo.
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    //Quais os módulos que são usados por este módulo:
    imports:
    [
        //CommonModule é um módulo com funções básicas do Angular
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {path: 'courses', component: CourseListComponent},
            //:id indica um parâmetro id a ser passado e usado no componente ts do id
            {path: 'courses/info/:id', component: CourseInfoComponent}
        ])
    ]   
})

export class CourseModule{ }