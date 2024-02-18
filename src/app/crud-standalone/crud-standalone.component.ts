import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DataService } from '../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crud-standalone',
  standalone: true,
  imports: [CommonModule , AddComponent , UpdateComponent, RouterModule,
  ],
  providers: [DataService],

  templateUrl: './crud-standalone.component.html',
  styleUrls: ['./crud-standalone.component.scss']
})
export class CrudStandaloneComponent {
  public books$: any;
  constructor(
    private book: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.book.getAll().subscribe((res) => {
      this.books$ = res;
    });
  }

  onDelete(id: any) {
    this.book.delete(id).subscribe((res) => {
      this.toastr.success('Deleted Successfully');
      setTimeout(() => {
        location.reload();
      }, 2000);
    });
  }

  onUpdate(id: any) {
    this.router.navigate([`/update/${id}`]);
  }
}
