import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./404/error-404.component";
import { NavBarComponent } from "./navbar/nav-bar.component";

@NgModule({
    declarations:[
        NavBarComponent
    ],
    exports:[
        NavBarComponent
    ],
    imports:[
        RouterModule.forChild([
            {path:'**', component: Error404Component}
        ])
    ]
})
export class CoreModule{

}