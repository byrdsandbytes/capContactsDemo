import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Observable, of } from 'rxjs';
import { Contact } from '@capacitor-community/contacts'

const { Contacts } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  contact$: Observable<Contact[]>;
  constructor() {}

  async getPermissions(): Promise<void> {
    Contacts.getPermissions();
  }

  async getContacts(): Promise<void> {
    console.log('tesbutton clicked');
    const result = await Contacts.getContacts();
    console.log(result);
    this.contact$ = of(result.contacts);
  }
}
