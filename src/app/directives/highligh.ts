import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  // Modern event and style bindings for the host element
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '[style.transition]': '"background-color 0.2s ease"',
  },
})
export class Highlight {
  private el = inject(ElementRef);

  // Allows passing a custom color in HTML or using a soft blue as the default
  highlightColor = input<string>('#eef6ff', { alias: 'appHighlight' });

  onMouseEnter(): void {
    // If the user passes appHighlight without a value, use the default color
    const color = this.highlightColor() || '#eef6ff';
    this.el.nativeElement.style.backgroundColor = color;
  }

  onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
