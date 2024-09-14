import { Component } from '@angular/core';
import { ProfileEditorComponent } from '../profile-editor/profile-editor.component'; 
import { CommonModule } from '@angular/common';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileEditorComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
  editor: EditorType = 'name';

  get showProfileEditor() {
    return this.editor === 'profile';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}