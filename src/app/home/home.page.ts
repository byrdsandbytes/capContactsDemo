import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Contact, Contacts, NewContact} from '@capacitor-community/contacts';
import { ToastController } from '@ionic/angular';



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
  contacts: Observable<Contact[]>;
  constructor(
    private toastController: ToastController
  ) {}

  async getPermissions(): Promise<void> {
    console.log('button clicked');
    Contacts.getPermissions();
  }

  async getContacts(): Promise<void> {
    console.log('tesbutton clicked');
    Contacts.getContacts().then(result => {
      console.log('result is:' , result);
      const phoneContacts: Contact[] = result.contacts;
      this.contacts = of(phoneContacts);

    });
  }

  async saveContact(){
    const newContact: NewContact = {
      givenName: "Arthur",
      familyName: "Dent"
    }

    Contacts.saveContact(newContact)
    const toast = await this.toastController.create({
      message: `${newContact.givenName} saved`,
      duration: 2000
    });
    toast.present();
  }
}
