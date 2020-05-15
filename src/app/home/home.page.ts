import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Observable, of } from 'rxjs';
import { PhoneContact } from '../phone-contact';
const { CapContacts } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// export interface PhoneContact {
//   contactId: string;
//   lookupKey: string;
//   displayName: string;
//   phoneNumbers: [string];
//   emails: [string];
// }

export class HomePage {
  contacts: Observable<PhoneContact[]>;
  constructor() {}

  async getPermissions(): Promise<void> {
    CapContacts.getPermissions();
  }

  async getContacts(): Promise<void> {
    console.log('tesbutton clicked');
    CapContacts.getContacts().then(result => {
      console.log('result is:' , result);
      const phoneContacts: [PhoneContact] = result.contacts;
      this.contacts = of(phoneContacts);

    });
  }
}
