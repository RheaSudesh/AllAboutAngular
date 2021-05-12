import { Component, OnInit ,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  public name ="RHEA ";
  @Input() public parentData: any;
  @Output() public childData= new EventEmitter();

  public siteUrl =window.location.href;
  public isDisabled=true;
  public myID="dwd";

  greet(){
     return "hello " + this.name;
   }

  logmess(value: any){
    console.log(value);
  }

  sendToParent(){
    this.childData.emit('Hey I am your child here!');
  }

  constructor() { }

  ngOnInit(): void {
  }
}