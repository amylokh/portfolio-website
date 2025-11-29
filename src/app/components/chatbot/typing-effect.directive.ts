import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]',
  standalone: true
})
export class TypingEffectDirective implements OnChanges {
  @Input('appTypingEffect') text: string = '';

  private typingTimeout: any;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.typeText();
    }
  }

  private typeText() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    const fullText = this.text || '';
    let i = 0;
    this.el.nativeElement.textContent = '';
    const type = () => {
      if (i <= fullText.length) {
        this.el.nativeElement.textContent = fullText.substring(0, i);
        i++;
        this.typingTimeout = setTimeout(type, 18);
      }
    };
    type();
  }
}
