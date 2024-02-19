import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DataService } from '../services/data.service';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-standalone',
  standalone: true,
  imports: [
    CommonModule,
    AddComponent,
    UpdateComponent,
    RouterModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
  ],
  providers: [DataService],
  templateUrl: './crud-standalone.component.html',
  styleUrls: ['./crud-standalone.component.scss'],
})
export class CrudStandaloneComponent {
  public books$: any[] = [];
  data: any = [];
  page = 1;
  collectionSize = this.books$.length;
  pageSize: number = 3;

  constructor(
    private book: DataService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.refreshCountries();
  }
  refreshCountries() {
    this.data = this.books$
      .map((country: any, i: any) => ({ id: i + 1, ...country }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
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
