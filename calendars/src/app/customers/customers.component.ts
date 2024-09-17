import { Component, OnInit } from '@angular/core';
import { PostService, User } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  standalone: true,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  imports: [CommonModule]
})
export class CustomersComponent implements OnInit {

  public users$?: Observable<User[]>;

  constructor(private postService: PostService) {}

  public ngOnInit(): void {
    this.users$ = this.postService.getUsers();
  }

  public trackByUserId(index: number, user: User): number {
    return user.id;
  }

}