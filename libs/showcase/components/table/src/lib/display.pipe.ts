import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'display'
})
export class DisplayPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let t = '';
        if (value) {
            value.forEach(element => {
                if (value.indexOf(element) < value.length - 1) {
                    t = t + element + ' '
                } else {
                    t = t + element;
                }
            });
        }
        return t;
    }
}