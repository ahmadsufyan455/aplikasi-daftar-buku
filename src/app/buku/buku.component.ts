import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service'

@Component({
  selector: 'app-buku',
  templateUrl: './buku.component.html',
  styleUrls: ['./buku.component.css']
})
export class BukuComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  submitted: boolean;
  showSuccessMessage: boolean;
  showSuccessEdit: boolean;
  formControls = this.booksService.form.controls;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.booksService.form.valid) {
      if (this.booksService.form.get('$key').value == null) {
        this.booksService.insertBuku(this.booksService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      } else {
        this.booksService.updateBuku(this.booksService.form.value);
        this.showSuccessEdit = true;
        setTimeout(() => this.showSuccessEdit = false, 3000);
      }
      this.submitted = false;
      this.booksService.form.reset();
    }
  }
}
