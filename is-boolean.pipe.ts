import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isBoolean'
})
export class IsBooleanPipe implements PipeTransform {
  transform(value: any): boolean {
    return typeof value === 'boolean';
  }
}
