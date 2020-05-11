import { Component, OnInit } from '@angular/core';

import { BooksService } from '../shared/books.service'

@Component({
  selector: 'app-list-buku',
  templateUrl: './list-buku.component.html',
  styleUrls: ['./list-buku.component.css']
})
export class ListBukuComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  bukuArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.booksService.getBuku().subscribe(
      list => {
        this.bukuArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        });
      }
    );
  }

  onDelete($key) {
    if (confirm('Apakah anda yakin ingin menghapus data ini ?')) {
      this.booksService.deleteBuku($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(buku) {
    return buku.judulBuku.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
