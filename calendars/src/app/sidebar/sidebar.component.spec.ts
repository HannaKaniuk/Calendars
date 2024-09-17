import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SidebarComponent } from './sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const activatedRouteStub = {
  snapshot: { paramMap: of({ get: () => 'test' }) }
};

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // Для маршрутизации
        SidebarComponent // Импортируйте standalone-компонент
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 
});
