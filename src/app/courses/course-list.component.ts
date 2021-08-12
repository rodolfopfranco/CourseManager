
import{ Component, OnInit } from '@angular/core';
import { Course } from './course';

//Informa que é um componente:
@Component({
    //Características do componente:
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit{
    courses: Course[] = [];

    //Função chamada na inicialização:
    ngOnInit(): void{
        this.courses =  [
            {   id: 1,
                name: 'Angular',
                imageUrl: '/assets/images/forms.png',
                price: 10.50,
                code: 'ABC-123',
                length: 90,
                rating: 5
            },
            {   id: 2,
                name: 'CSS',
                imageUrl: '/assets/images/http.png',
                price: 5.50,
                code: 'XYZ-100',
                length: 60,
                rating: 3
            }
        ]
    }
}