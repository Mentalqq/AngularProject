import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService],
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    user: User = new User();
    users: User[];
    total: number = 0;
    active: number = 0;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.dataService.getUsers()
            .subscribe((data: User[]) => this.users = data);
    }
    Total() {
        this.total = 0;
        this.active = 0;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].active == true)
                this.active++;
            this.total++;
        }
        this.openModal()
    }
    @ViewChild('myModal', { static: false }) modal: ElementRef;
    openModal() {
        this.modal.nativeElement.style.display = 'block';
    }

    closeModal() {
        this.modal.nativeElement.style.display = 'none';
    }
    editActive(u: User) {
        this.dataService.updateUser(u)
            .subscribe(data => this.loadUsers());
    }
}