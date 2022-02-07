import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { AngularV13Aspect, AngularV13Main } from '@teambit/angular-v13'

export class AngmatenvExtension {
  constructor(private angular: AngularV13Main) {}

  static dependencies: any = [EnvsAspect, AngularV13Aspect]

  static async provider([envs, angular]: [EnvsMain, AngularV13Main]) {
    // Use any of the "angular.override..." transformers, for example:
	const angularOptions = await angular.overrideAngularOptions({
      styles: ['./node_modules/@angular/material/prebuilt-themes/indigo-pink.css']
    });
    const AngmatenvEnv = angular.compose([angularOptions])
    envs.registerEnv(AngmatenvEnv)

    return new AngmatenvExtension(angular)
  }
}
