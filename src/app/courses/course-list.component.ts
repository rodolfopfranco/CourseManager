
import{ Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

//Informa que é um componente:
@Component({
    //Características do componente:
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    //Injeção de dependência vinda do course.service:
    constructor(private courseService: CourseService){}

    //Função chamada na inicialização:
    ngOnInit(): void{
        this.courses = this.courseService.retrieveAll();
    }
}