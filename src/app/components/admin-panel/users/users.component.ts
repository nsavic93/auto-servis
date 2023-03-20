import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource
  displayedColumns = ['usr_id', 'usr_name', 'usr_username', 'usr_adress', 'usr_phone', 'usr_role']
  addNewUserDialog = false
  firstname: string = ''
  lastname: string = ''
  username: string = ''
  password: string = ''
  adress: string = ''
  phone: string = ''
  isAdmin: boolean = false
  constructor(private users: UsersService,private toastr: ToastrService) { }


  ngOnInit(): void {
    console.log('bnnn');
    
    this.getUsers()
  }
  getUsers() {
    this.users.getUsers().subscribe((data) => {
      console.log(data.users);

      this.dataSource = data.users;
    })
  }
  openDialogForAddNewUser() {
    this.addNewUserDialog = true
  }
  closeDialogForAddNewUser() {
    this.addNewUserDialog = false
  }
  saveNewUser() {
    console.log('save');
    
    this.users.createNewUser(this.firstname, this.lastname, this.username, this.password, this.adress, this.phone, this.isAdmin).subscribe((data) => {
      if (data.msg == "OK") {
        this.getUsers()
        this.addNewUserDialog = false
      }else{
        this.showError('param')
      }
    }, (err) => {
      console.log(err);

    })
  }
  deleteUserById(usr_id) {
    this.users.deleteUser(usr_id).subscribe((data) => {
      console.log(data);
      this.getUsers()
    }, (err) => {
      console.log(err);

    })
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  showError(param) {
    this.toastr.error('EEE NEEEES VALA!', 'PAJSERU!');
  }
  testLog(id){
    console.log(id);
    
    console.log("ASD");
    
  }
}
