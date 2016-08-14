/**
 * Created by alexvizcaino on 10/8/16.
 */
export class GetSocialIconValueConverter{
  toView(network: string){
    switch(network){
      case 'skype':
        return 'skype';
      case 'twitter':
        return 'twitter';
      case 'facebook':
        return 'facebook';
      case 'instagram':
        return 'instagram';
      case 'github':
        return 'github';
      case 'linkedin':
        return 'linkedin';
      default:
        return 'skype';
    }
  }
}
