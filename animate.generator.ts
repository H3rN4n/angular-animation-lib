import { trigger, style, transition, animate, keyframes, query, stagger, AnimationTriggerMetadata, AnimationStyleMetadata } from '@angular/animations';
import { Params } from './models'

export const animateGenerator = (params: Params): AnimationTriggerMetadata => {
  const keyframes = params.keyframes as any;
  return trigger(params.name, [
    transition('* => *', [
      query(params.selector, style(params.keyframes[0]), { optional: true }),

      query(params.selector, stagger(params.options.stagger || 0, [
        animate(params.options.duration + ' ease-in' || '1s ease-in', keyframes(keyframes.shift()))]), { optional: true })
    ])
  ])
}