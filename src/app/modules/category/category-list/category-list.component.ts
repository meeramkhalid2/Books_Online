import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { data } from '../../../../assets/books';
import { HomeComponent } from '../../../components/home/home.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HomeComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  searchQuery: string = '';
  filteredData: any = [...data];

  filterData() {
    this.filteredData = data.filter(book => 
      book.category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
