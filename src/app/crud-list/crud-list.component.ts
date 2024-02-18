import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent {
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
