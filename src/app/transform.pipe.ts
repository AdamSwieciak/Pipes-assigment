import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: any): any {
    const firstleter = value.split('')[0]
    const nextLeter = value.split('').splice(1.1).reverse()
    const fullname = [firstleter , ...nextLeter]
    return fullname.join('')
  }

}
