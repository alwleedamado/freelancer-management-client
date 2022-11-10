import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'table[table-css]',
})
export class TableCssDirective implements OnInit {


  constructor(private elementRef: ElementRef, private _renderer: Renderer2) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('table', 'table-stripped', 'table-hover', 'table-row-bordered', 'table-row-gray-100', 'align-middle', 'gs-0', 'gy-3');
  }

}
