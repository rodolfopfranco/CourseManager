import{ Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

//Informa que é um componente:
@Component({
    //Características do componente:
    //Selector: 'app-course-list' removido, pois agora usa rotas via app.module.ts
    templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit{
    _courses: Course[] = [];
    //_variable = underline indica que não deve ser usado fora daqui, como o private  
    _filterBy:string;
    filteredCourses: Course[] = [];

    //Injeção de dependência vinda do course.service:
    constructor(private courseService: CourseService){}

    //Função chamada na inicialização:
    ngOnInit(): void{
        this.retrieveAll();
    }

    //Adicionada para obtenção de dados da API
    retrieveAll(): void{
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
    }

    get filter(){
        return this._filterBy;
    }

}