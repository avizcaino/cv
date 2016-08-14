/**
 * Created by alexvizcaino on 10/8/16.
 */
/* ARRAY CONVERTERS */
export class ArrayToStringValueConverter{
  toView(data: any[]){
    let text: string = '';
    for(let i = 0; i < data.length; i++){
      text = text + data[i] + ', ';
    }

    return text.substr(0, text.length - 2);
  }
}
