import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource
  displayedColumns = ['usr_id', 'usr_name', 'usr_username', 'usr_adress', 'usr_phone', 'usr_role']
  constructor(private users: UsersService) { }

  ngOnInit(): void {
    this.users.getUsers().subscribe((data) => { 
      console.log(data.users);
      
      this.dataSource = data.users;
    })
  }

}
