import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [RouterModule]
})
export class SidebarComponent {
  constructor(private router: Router) {}
  navigateToPage() {
    console.log('Navigating to client page...');
    this.router.navigate(['/customers']);
  }
  
  navigateToPageSettings(){
    this.router.navigate(['/settings']);
  }

  navigateToPageProject(){
    this.router.navigate(['/project-list']);
  }

  showConfig(){
    this.router.navigate(['/config']); 
  }
}
