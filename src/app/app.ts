import { Component } from '@angular/core';
import { TableModule } from './table/table-module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [TableModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'Atipera';
}
