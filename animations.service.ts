import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
  AnimationTriggerMetadata,
  AnimationStyleMetadata
} from '@angular/animations';

import { animateGenerator } from './animate.generator';
import * as stringify from 'json-stringify-safe';
import { Params } from './models';

const defaultValues = {
  options: {
    duration: '1000ms',
    stagger: '100ms',
  }
};

const fadeInAnimation = () => {
  return stringify(
    trigger('fadeInAnimation', [
      transition('* => *', [
        query('.fadeIn', style({ opacity: 0 }), { optional: true }),
        query('.fadeIn', stagger('100ms', [
          animate('200ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-35px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-15px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ])
  );
};

// fadeInDownAnimation(params) {
//   return trigger('fadeInDownAnimation', [
//     transition('**', [

//       query('.fadeInDown', style({ opacity: 0 }), { optional: true }),

//       query('.fadeInDown', stagger(params.stagger || 0, [
//         animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
//           style({ opacity: 0, transform: 'translate3d(0, -100%, 0)' }),
//           style({ opacity: 1, transform: 'none' }),
//         ]))]), { optional: true })
//     ])
//   ]);
// }

// flashAnimation(params) {
//   return trigger('flashAnimation', [
//     transition('**', [

//       query('.flash', style({ opacity: 0 }), { optional: true }),

//       query('.flash', stagger(params.stagger || 0, [
//         animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
//           style({ opacity: 1 }),
//           style({ opacity: 0 }),
//           style({ opacity: 1 }),
//           style({ opacity: 0 }),
//           style({ opacity: 1 })
//         ]))]), { optional: true })
//     ])
//   ]);
// }

// pulseAnimation(params) {
//   return trigger('pulseAnimation', [
//     transition('**', [

//       query('.pulse', style({ opacity: 0 }), { optional: true }),

//       query('.pulse', stagger(params.stagger || 0, [
//         animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
//           style({ transform: 'scale3d(1, 1, 1)' }),
//           style({ transform: 'scale3d(1.05, 1.05, 1.05)' }),
//           style({ transform: 'scale3d(1, 1, 1)' })
//         ]))]), { optional: true })
//     ])
//   ]);
// }

// bounceInDownAnimation(params) {
//   return trigger('bounceInDownAnimation', [
//     transition('**', [
//       query('.bounceInDown', style({ opacity: 0 }), { optional: true }),

//       query('.bounceInDown', stagger(params.stagger || 0, [
//         animate(
//           params.duration + ' cubic-bezier(0.215, 0.610, 0.355, 1.000)' || '1s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
//           keyframes([
//             style({ opacity: 0, transform: 'translate3d(-3000px, 0, 0)' }),
//             style({ opacity: 1, transform: 'translate3d(25px, 0, 0)' }),
//             style({ transform: 'translate3d(-10px, 0, 0)' }),
//             style({ transform: 'translate3d(5px, 0, 0)' }),
//             style({ transform: 'none' })
//           ]))]), { optional: true })
//     ])
//   ]);
// }

const slideInRightAnimation = () => {
  return stringify(
    trigger('slideInRightAnimation', [
      transition('* => *', [
        query('.slideInRight', style({ transform: 'translate3d(100%, 0, 0)', opacity: 0 })),
        query('.slideInRight', stagger('100ms', [
          animate('1s', keyframes([
            // style({ transform: 'translate3d(75%, 0, 0)', opacity: 0.3 }),
            // style({ transform: 'translate3d(50%, 0, 0)', opacity: 0.6  }),
            // style({ transform: 'translate3d(25%, 0, 0)', opacity: 0.7  }),
            style({ transform: 'translate3d(0, 0, 0)', opacity: 1  })
          ]))
        ]), { optional: true })
      ])
    ])
  );
};

const slideOutRightAnimation = () => {
  return stringify(
    trigger('slideOutRightAnimation', [
      transition('* => *', [
        query('.slideOutRight', style({ transform: 'translate3d(100%, 0, 0)', opacity: 'visible' })),
        query('.slideOutRight', stagger('100ms', [
          animate('1s ease-in', keyframes([
            style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' })
          ]))
        ]), { optional: true })
      ])
    ])
  );
};

// const SlideOutRightAnimationParams = {
//   options: {
//     duration: 1000,
//     stagger: 400
//   },
//   keyframes: [
//     style({ opacity: 0 }),
//     style({ transform: 'translate3d(0, 0, 0)' }),
//     style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' })
//   ],
//   name: 'slideOutRightAnimation',
//   selector: 'slideOutRight'
// };

// const slideOutRightAnimation = (params) => {
//   return stringify(animateGenerator(SlideOutRightAnimationParams as any));
// };

export const AnimationsService = {
  slideOutRight: slideOutRightAnimation,
  fadeIn: fadeInAnimation,
  slideInRight: slideInRightAnimation
};


