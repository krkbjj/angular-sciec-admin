import {Component, OnInit} from '@angular/core';

import {UserService} from '../../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  public myModel = ''
  public maskcpf = [/[0-11]/, /\d/, /\d/, '.' ,/\d/, /\d/, /\d/,'.',/\d/, /\d/,/\d/, '-', /\d/, /\d/]// mascara do cpf



  constructor() {
  }

  ngOnInit() {
  }
}
