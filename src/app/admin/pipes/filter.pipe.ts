import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../shared/interfaces/user';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: User, arg: string): any {
    const users = [];

    for (const item in value) {
      if (
        value[item].displayName.toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        users.push(value[item]);
      }
    }

    return users;
  }
}
