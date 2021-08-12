import { Pipe, PipeTransform } from "@angular/core";

//Notação para identificar que é um pipe obtível pelo nome replace:
@Pipe({
    name:'replace'
})
//Pipetransform serve para poder transformar os dados pelo método transform
export class ReplacePipe implements PipeTransform{
    transform(value:string,char:string, valueToReplace:string){
        return value.replace(char,valueToReplace);
    }
}