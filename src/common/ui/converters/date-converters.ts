/**
 * Created by alexvizcaino on 10/8/16.
 */
import * as moment from 'moment';

export class DateFormatterValueConverter{
  toView(date: string, format: string){
    return moment(date).format(format);
  }
}
