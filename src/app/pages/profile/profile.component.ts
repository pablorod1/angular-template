import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  isFollowing: boolean = false;
  followText: string = 'Follow me';


  fields = [
    { label: 'Full Name', value: 'Sofía García', editedValue: '' },
    { label: 'Email', value: 'sofiagarcia@email.com', editedValue: '' },
    { label: 'Phone', value: '+34 123 456 789', editedValue: '' },
    { label: 'Country', value: 'Spain', editedValue: '' },
    { label: 'Address', value: 'Alicante', editedValue: '' }
  ];


  toggleFollow() {
    this.isFollowing = !this.isFollowing;
    this.followText = this.isFollowing ? 'Following' : 'Follow Me';
  }
  editing = false;


  toggleEditor() {
    this.editing = !this.editing;
    if (!this.editing) {
      // Aquí podrías enviar los valores editados al servidor o realizar cualquier otra acción necesaria
      this.fields.forEach(field => field.value = field.editedValue);
    } else {
      // Al iniciar la edición, copia los valores actuales a editedValue
      this.fields.forEach(field => field.editedValue = field.value);
    }
  }
}
