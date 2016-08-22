/**
 * Created by alexvizcaino on 22/8/16.
 */
export class GetKeyValuePairValueConverter{
  toView(obj: any){
    let keyValuePair: any[] = [];
    for(let prop in obj){
      keyValuePair.push({key: prop, value: obj[prop]});
    }

    return keyValuePair;
  }
}
