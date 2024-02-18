import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  FormData!: FormGroup;
  isloading!: boolean;
  book$!: any;
  id!: any;

  constructor(
    private builder: FormBuilder,
    private book: DataService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.book.getSingle(this.id).subscribe((res) => {
        this.book$ = res;
        this.FormData.patchValue(this.updateFormValues());
      });
    });

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
    this.book.update(this.id, formData).subscribe((res) => {
      this.toastr.success('Updated 🙌');
      setTimeout(() => {
        location.href = '/crud';
      }, 2000);
    });
  }

  updateFormValues() {
    return {
      author: this.book$.author,
      country: this.book$.country,
      language: this.book$.language,
      pages: this.book$.pages,
      title: this.book$.title,
      year: this.book$.year,
    };
  }
}
