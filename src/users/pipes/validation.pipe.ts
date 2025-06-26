import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    //add the logic here
    console.log('My custom validation pipe: ', value);
    return 'DEV ' + value;
  }
}
