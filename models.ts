import { AnimationTriggerMetadata, AnimationStyleMetadata } from '@angular/animations';

export interface params {
  options: {
    duration: string | number; // 1000, '100ms', 1s'
    stagger: string | number; // 1000, '100ms', 1s'
  }
  keyframes: AnimationStyleMetadata;
  name: string;
  selector: string;
}