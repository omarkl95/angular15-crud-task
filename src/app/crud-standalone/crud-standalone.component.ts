import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-crud-standalone',
  standalone: true,
  imports: [CommonModule , AddComponent , UpdateComponent],
  templateUrl: './crud-standalone.component.html',
  styleUrls: ['./crud-standalone.component.scss']
})
export class CrudStandaloneComponent {

}
