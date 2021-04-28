import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class addListService {
    lists = [];

    addNewList(newList) {
        this.list.push(newList);
    }

    getLists() {
        return this.lists;
    }

}