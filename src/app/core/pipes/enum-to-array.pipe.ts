import { Pipe, PipeTransform } from "@angular/core";

// TODO: rename enumToDdi
@Pipe({ name: 'enumToArray' })
export class EnumToArrayPipe implements PipeTransform {
    transform(e): any[] {
        return Object.keys(e)
        .filter((id) => !Number.isInteger(e[id])) // when the enum has only keys enum { foo }, dont return [{id: 'foo', name: 1}]  
        .map(id => {
            let name = e[id]
            return { code: id, name }
        })
    }
}