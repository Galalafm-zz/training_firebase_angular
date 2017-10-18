import { Component, OnInit } from '@angular/core';
import { AuthServService } from '../auth-serv.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  public name:string = 'Gala';
  public username:string = '@galalafm';
  constructor() {}

  ngOnInit() {
  }

}
