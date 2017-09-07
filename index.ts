import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export { AnimationsService } from './animations.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AngularAnimationLibModule {
  static forRoot() {
    return {
      ngModule: AngularAnimationLibModule,
      providers: []
    }
  }
}
