// import {Pipe, PipeTransform} from '@angular/core';

// @Pipe({
//   name: 'search'
// })
// export class SearchPipe implements PipeTransform {
//   public transform(value, keys: string, term: string) {

//     if (!term) return value;
//     return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

//   }
// }

import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'mixFilterPipe',
    pure: true

})
export class MixFilterClass implements PipeTransform {
a;
    transform(mixes: any, name: string) {
        if (!mixes || !name) {
            return mixes;
        }
         return mixes.filter(e => e.mixId.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
}