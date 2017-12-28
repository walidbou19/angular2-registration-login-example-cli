import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import {CompaniesService} from './shared/companies.service';
import {Company} from './shared/company';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    styleUrls: ['home.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    private companies: Company[] = [];

    tiles: any[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    categories: Object[] = [
        { name: 'Porter', parg: 'Here is some content' },
        { name: 'Porter', parg: 'Here is some content' },
        { name: 'Porter', parg: 'Here is some content' }
    ];

    constructor(private userService: UserService, private companiesService: CompaniesService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();

        this.companiesService.getCompanies().subscribe(data => this.companies = data);
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    /*deleteCompany(company){
        if (confirm("Are you sure you want to delete " + company.name + "?")) {
            var index = this.companies.indexOf(company);
            this.companies.splice(index, 1);

            this.CompaniesService.deleteCompany(company.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete user.");
                        // Revert the view back to its original state
                        this.companies.splice(index, 0, company);
                    });
        }
    }*/

}
