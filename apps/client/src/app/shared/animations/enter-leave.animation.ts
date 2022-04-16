import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeSlideInOut = trigger('fadeSlideInOut', [
  transition(':enter', [
    group([
      style({ opacity: 0, transform: 'translateX(-20px)', width: 0 }),
      animate(
        '200ms ease-in-out',
        style({ transform: 'translateX(0)', width: '*' })
      ),
      animate('150ms ease-in-out', style({ opacity: 1 })),
    ]),
  ]),
  transition(':leave', [
    group([
      animate(
        '200ms ease-in-out',
        style({ transform: 'translateX(-20px)', width: '0' })
      ),
      animate('150ms ease-in-out', style({ opacity: 0 })),
    ]),
  ]),
]);
export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    group([
      style({ opacity: 0, transform: 'scale(0)', width: 0 }),
      animate(
        '200ms ease-in-out',
        style({ transform: 'scale(1)', width: '*' })
      ),
      animate('150ms ease-in-out', style({ opacity: 1 })),
    ]),
  ]),
  transition(':leave', [
    group([
      animate(
        '200ms ease-in-out',
        style({ transform: 'scale(0)', width: '0' })
      ),
      animate('150ms ease-in-out', style({ opacity: 0 })),
    ]),
  ]),
]);
