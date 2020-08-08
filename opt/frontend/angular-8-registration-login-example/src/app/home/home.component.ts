import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import {MatProgressSpinnerModule} from '@angular/material';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users = [];
    resp: any;
    temp: any;
    humidity: any;
    isLoading: boolean;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
        // TEMP UNTIL USER REGISTRATION IS DEVELOPED... ONLY USERNAME jonnyparko WILL RETRIEVE DATA
        if (this.currentUser.username === 'jonnyparko') {
            this.loadRoom();
        }
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    private loadRoom() {
        this.isLoading = true;
        this.userService.getRoom()
            .pipe(first())
            .subscribe(temp => {
                this.resp = temp;
                const res = JSON.parse(this.resp);
                this.temp = res.state.desired.temp;
                this.humidity = res.state.desired.humd;
                this.isLoading = false;
            });
    }
}
