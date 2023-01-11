import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  DoCheck,
  OnInit,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    AfterContentChecked,
    OnDestroy
{
  @Input() postImg = '';
  @Output() imgSelected = new EventEmitter<string>();
  @Input()
  test = '';

  constructor() {
    console.log('constructor ()', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit()', this.postImg);
  }
  ngOnChanges() {
    console.log('ngOnChanges()');
  }

  ngDoCheck() {
    console.log('ngCheckDo()');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
