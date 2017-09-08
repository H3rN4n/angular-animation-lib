import { trigger, style, transition, animate, keyframes, query, stagger, AnimationTriggerMetadata, AnimationStyleMetadata } from '@angular/animations';
import { Params } from './models'
import * as stringify from 'json-stringify-safe';

export const animateGenerator = (params: Params): AnimationTriggerMetadata => {
  const keyframes = params.keyframes as any;
  return stringify(
    trigger(params.name, [
      transition('* => *', [
        query(params.selector, params.keyframes[0], { optional: true }),
        query(params.selector, stagger(params.options.stagger, [
          animate(params.options.duration + ' ease-in' || '800ms ease-in', keyframes([
            keyframes.shift()
          ]))
        ]), { optional: true })
      ])
    ])
  );
};