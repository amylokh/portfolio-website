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
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);
  
  export const sectionAnimation = trigger('sectionAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
]);