import { Injectable } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, AnimationTriggerMetadata, AnimationStyleMetadata } from '@angular/animations';

import { animateGenerator } from './animate.generator';

@Injectable()
export class AnimationsService {

  constructor() {}

  fadeInAnimation(params) {
      return trigger('fadeInAnimation', [
        transition('**', [

          query('.fadeIn', style({ opacity: 0 }), { optional: true }),

          query('.fadeIn', stagger(params.stagger || 0, [
            animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
              style({ opacity: 0 }),
              style({ opacity: 1 }),
            ]))]), { optional: true })
        ])
      ])
    };


    fadeInDownAnimation(params){
      return trigger('fadeInDownAnimation', [
        transition('**', [

          query('.fadeInDown', style({ opacity: 0 }), { optional: true }),

          query('.fadeInDown', stagger(params.stagger || 0, [
            animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
              style({ opacity: 0, transform: "translate3d(0, -100%, 0)" }),
              style({ opacity: 1, transform: 'none' }),
            ]))]), { optional: true })
        ])
      ])
    };

    flashAnimation(params){
      return trigger('flashAnimation', [
        transition('**', [

          query('.flash', style({ opacity: 0 }), { optional: true }),

          query('.flash', stagger(params.stagger || 0, [
            animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
              style({ opacity: 1 }),
              style({ opacity: 0 }),
              style({ opacity: 1 }),
              style({ opacity: 0 }),
              style({ opacity: 1 })
            ]))]), { optional: true })
        ])
      ])
    };

    pulseAnimation(params){
      return trigger('pulseAnimation', [
        transition('**', [

          query('.pulse', style({ opacity: 0 }), { optional: true }),

          query('.pulse', stagger(params.stagger || 0, [
            animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
              style({ transform: 'scale3d(1, 1, 1)' }),
              style({ transform: 'scale3d(1.05, 1.05, 1.05)' }),
              style({ transform: 'scale3d(1, 1, 1)' })
            ]))]), { optional: true })
        ])
      ])
    };

    bounceInDownAnimation(params){
      return trigger('bounceInDownAnimation', [
        transition('**', [
          query('.bounceInDown', style({ opacity: 0 }), { optional: true }),

          query('.bounceInDown', stagger(params.stagger || 0, [
            animate(params.duration + ' cubic-bezier(0.215, 0.610, 0.355, 1.000)' || '1s cubic-bezier(0.215, 0.610, 0.355, 1.000)', keyframes([
              style({ opacity: 0, transform: 'translate3d(-3000px, 0, 0)' }),
              style({ opacity: 1, transform: 'translate3d(25px, 0, 0)' }),
              style({ transform: 'translate3d(-10px, 0, 0)' }),
              style({ transform: 'translate3d(5px, 0, 0)' }),
              style({ transform: 'none' })
            ]))]), { optional: true })
        ])
      ])
    }

    slideInRightAnimation(params){
      return trigger('slideInRightAnimation', [
        transition('**', [

          query('.slideInRight', style({ opacity: 0 }), { optional: true }),

          query('.slideInRight', stagger(params.stagger || 0, [
            animate(params.duration + ' ease-in' || '1s ease-in', keyframes([
              style({ transform: 'translate3d(100%, 0, 0)', visibility: 'visible' }),
              style({ transform: 'translate3d(0, 0, 0)' })
            ]))]), { optional: true })
        ])
      ])
    };

    // slideOutRightAnimation(params:params){
    //   return trigger('slideOutRightAnimation', [
    //     transition('**', [

    //       query('.slideOutRight', style({ opacity: 0 }), { optional: true }),

    //       query('.slideOutRight', stagger(params.options.stagger || 0, [
    //         animate(params.options.duration + ' ease-in' || '1s ease-in', keyframes([
    //           style({ transform: 'translate3d(0, 0, 0)' }),
    //           style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' })
    //         ]))]), { optional: true })
    //     ])
    //   ])
    // };

    slideOutRightAnimationParams = {
      options: {
        duration: 1000,
        stagger: 400
      },
      keyframes: [
        style({ opacity: 0 }),
        style({ transform: 'translate3d(0, 0, 0)' }),
        style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' })
      ],
      name: 'slideOutRightAnimation',
      selector: 'slideOutRight'
    }

    slideOutRightAnimation = animateGenerator(this.slideOutRightAnimationParams as any);

}
