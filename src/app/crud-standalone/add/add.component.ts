import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  FormData!: FormGroup;
  isloading!: boolean;

  constructor(
    private builder: FormBuilder,
    private book: DataService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      author: new FormControl(''),
      country: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl(''),
    });
  }

  reset() {
    this.FormData = this.builder.group({
      author: new FormControl(''),
      country: new FormControl(''),
      language: new FormControl(''),
      pages: new FormControl(''),
      title: new FormControl(''),
      year: new FormControl(''),
    });
  }

  onSubmit(formData: any) {
    this.book.post(formData).subscribe((res) => {
      this.toastr.success('Book Added 💃');
      setTimeout(() => {
        this.reset();
      }, 2000);
    });
  }
}
