import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.css']
})
export class NavBtnComponent implements OnInit {

  @Input() class?: string;
  @Input() color?: string;
  @Input() fontSize?: string; 
  @Input() router?: string;
  @Input() mark?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
