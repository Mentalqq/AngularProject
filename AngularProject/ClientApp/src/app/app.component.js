var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user';
let AppComponent = class AppComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.user = new User();
        this.total = 0;
        this.active = 0;
    }
    ngOnInit() {
        this.loadUsers();
    }
    loadUsers() {
        this.dataService.getUsers()
            .subscribe((data) => this.users = data);
    }
    Total() {
        this.total = 0;
        this.active = 0;
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].active == true)
                this.active++;
            this.total++;
        }
        this.openModal();
    }
    openModal() {
        this.modal.nativeElement.style.display = 'block';
    }
    closeModal() {
        this.modal.nativeElement.style.display = 'none';
    }
    editActive(u) {
        this.dataService.updateUser(u)
            .subscribe(data => this.loadUsers());
    }
};
__decorate([
    ViewChild('myModal', { static: false })
], AppComponent.prototype, "modal", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: './app.component.html',
        providers: [DataService],
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map