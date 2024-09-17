# Calendars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.









Проект складається з кількох компонентів Angular, які разом забезпечують функціональність для управління календарем, профілями користувачів та навігацією. Ось короткий огляд:

CalendarComponent:

Використовує Syncfusion ScheduleComponent для управління календарем.
Має TreeViewComponent для відображення списку елементів.
Реалізує функціонал drag-and-drop для перенесення елементів в календар.

CustomersComponent:
Завантажує та відображає список користувачів за допомогою сервісу PostService.
HeaderComponent:

Відповідає за навігацію до редактора профілю через метод toggleEditor.
ProfileEditorComponent:

Форма для редагування профілю користувача з використанням ReactiveFormsModule.

PostService:
Здійснює HTTP запити для отримання даних користувачів з API (jsonplaceholder.typicode.com).

SidebarComponent:
Забезпечує навігацію між різними сторінками додатку.

AppComponent:
Основний компонент, що об'єднує інші компоненти і імплементує основні модулі та сервіси.

Важливі аспекти:
Використовуються standalone компоненти Angular.
ReactiveForms для роботи з формами.
Syncfusion для календаря.
HttpClientModule для обробки HTTP запитів.
Проект структурований, використовує сучасні Angular можливості і бібліотеки для створення інтерактивного інтерфейсу користувача.