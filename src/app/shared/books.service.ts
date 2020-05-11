import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private firebase: AngularFireDatabase) { }
  listBuku: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    judulBuku: new FormControl('', Validators.required),
    penulis: new FormControl(''),
    penerbit: new FormControl(''),
    tahun: new FormControl(''),
    harga: new FormControl('')
  });

  getBuku() {
    this.listBuku = this.firebase.list('buku');
    return this.listBuku.snapshotChanges();
  }

  insertBuku(buku) {
    this.listBuku.push({
      judulBuku: buku.judulBuku,
      penulis: buku.penulis,
      penerbit: buku.penerbit,
      tahun: buku.tahun,
      harga: buku.harga
    });
  }

  updateBuku(buku) {
    this.listBuku.update(buku.$key,
      {
        judulBuku: buku.judulBuku,
        penulis: buku.penulis,
        penerbit: buku.penerbit,
        tahun: buku.tahun,
        harga: buku.harga
      });
  }

  deleteBuku($key: string) {
    this.listBuku.remove($key);
  }

  populateForm(buku) {
    this.form.setValue(buku);
  }
}
