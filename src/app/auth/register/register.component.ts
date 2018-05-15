import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public myModel = ''
  public maskcpf = [/[0-9]/, /\d/, /\d/, '.' ,/\d/, /\d/, /\d/,'.',/\d/, /\d/,/\d/, '-', /\d/, /\d/] // marcara do numero do cpf
  public maskcelular = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]//mascara do numero celular

  constructor() { }

  ngOnInit() {
  }

}
