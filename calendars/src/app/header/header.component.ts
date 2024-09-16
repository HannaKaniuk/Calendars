import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProfileEditorComponent, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  toggleEditor(type: EditorType) {
    if (type === 'profile') {
      this.router.navigate(['/profile-editor']);
    }
  }
}
