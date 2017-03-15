import { Directive, ElementRef, HostListener, EventEmitter, Input,Output } from '@angular/core';

@Directive({
  selector: 'md-sidenav'
})
export class TestDirective {

  constructor(private el: ElementRef) {


// this.onOpen.subscribe(() => {
//           console.log("onOpen......");
//     });
//    }

//   // @Input() defaultColor: string;

//   @Output('open') onOpen = new EventEmitter<void>();


  

  // @Input('myHighlight') highlightColor: string;

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.highlightColor || this.defaultColor || 'red');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
}
