import {
  Component,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent implements OnInit {
  @ViewChildren('overview, section1, section2, section3, section4, section5')
  elms!: QueryList<any>;
  @Input()
  contents: any;
  @Input() detectedElms: any;

  detectElms() {
    const detectedElms: any = [];
    this.elms.forEach((elm, index) => {
      if (isInViewport(elm.nativeElement)) {
        detectedElms.push(elm.nativeElement.id);
        this.detectedElms = detectedElms;
      }
    });
  }
  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'resize', this.detectElms.bind(this));
    this.renderer.listen('window', 'scroll', this.detectElms.bind(this));
  }

  ngAfterViewInit() {
    setTimeout(this.detectElms.bind(this));
  }

  ngOnInit(): void {}
}

function isInViewport(elm: any) {
  var elementTop = elm.offsetTop;
  var elementBottom = elementTop + elm.offsetHeight;

  // in this specific case the scroller is document.documentElement (<html></html> node)
  var viewportTop = document.documentElement.scrollTop;
  var viewportBottom = viewportTop + document.documentElement.clientHeight;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}
