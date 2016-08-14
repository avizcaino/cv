import {valueConverter} from "aurelia-binding";
export class fbValueConverter{
  private static _converters: ((value: any) => boolean)[] = [fbValueConverter.fromNullOrUndefined, fbValueConverter.fromBoolean,
    fbValueConverter.fromString, fbValueConverter.fromNumber, fbValueConverter.fromArray];

  public static singleton: fbValueConverter = new fbValueConverter;
  
  public toView(item: any, args?: string){
    let res: boolean = null;
    let index = 0;
   while (index < fbValueConverter._converters.length && res == null){
     res = fbValueConverter._converters[index](item);
     index++;
   }
    if(res == null)
      res = true;
    return fbValueConverter.applyArguments(res, args);
  }

  private static applyArguments(value: boolean, args: string): boolean{
    if(args){
      let argsArray = args.split(",");
      let invert = argsArray.find(x => x == 'i');
      if(invert)
        value = !value;
    }
    return value;
  }

  private static fromNullOrUndefined(value: any): boolean{
    if(value == null || typeof value == 'undefined')
      return false;
    return null;
  }

  private static fromBoolean(value: any): boolean{
    if(value instanceof Boolean || typeof value == 'boolean')
      return <boolean>value;
    return null;
  }

  private static fromString(value: any): boolean{
    if(value instanceof String || typeof value == 'string'){
      let str = <string>value;
      return str.trim().length > 0;
    }
    return null;
  }

  private static fromNumber(value: any): boolean{
    if(value instanceof Number || typeof value == 'number'){
      return <number>value > 0;
    }
    return null;
  }

  private static fromArray(value: any): boolean{
    if(value.constructor === Array){
      return (<Array<any>>value).length > 0;
    }
    return null;
  }
}
