import { 
    trigger, 
    style, 
    animate, 
    transition, 
    stagger, 
    query,
    keyframes
  } from '@angular/animations';
  
  export const fadeInUp = trigger('fadeInUp', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);
  
  export const staggerFadeInUp = trigger('staggerFadeInUp', [
    transition('* => *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        stagger('100ms', [
          animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ], { optional: true })
    ])
  ]);
  
  export const headerAnimation = trigger('headerAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-100%)' }),
      animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
        style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);
  
  export const navItemAnimation = trigger('navItemAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('{{delay}}ms cubic-bezier(0.35, 0, 0.25, 1)', 
        style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);
  
  export const slideDown = trigger('slideDown', [
    transition(':enter', [
      style({ opacity: 0, height: 0 }),
      animate('200ms ease-out', style({ opacity: 1, height: '*' }))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ opacity: 0, height: 0 }))
    ])
  ]);
  
  export const sectionAnimation = trigger('sectionAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
]);