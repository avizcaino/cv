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

/* TEXT CONVERTERS */
export class UcValueConverter{
  toView(text: string){
    return text.toLocaleUpperCase();
  }
}

export class LcValueConverter{
  toView(text: string){
    return text.toLocaleLowerCase();
  }
}

export class CcValueConverter{
  toView(text: string){
    return text.charAt(0).toLocaleUpperCase() + text.substr(1, text.length);
  }
}
