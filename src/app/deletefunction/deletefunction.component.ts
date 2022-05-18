import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletefunction',
  templateUrl: './deletefunction.component.html',
  styleUrls: ['./deletefunction.component.css']
})
export class DeletefunctionComponent implements OnInit {

  @Input() item:string|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
