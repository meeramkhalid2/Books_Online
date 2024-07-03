import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data } from '../../../../assets/books';
import { NgFor, NgIf } from '@angular/common';
import { HomeComponent } from '../../../components/home/home.component';


@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, HomeComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchQuery: string = '';
  filteredData = data;

  onSearch() {
    this.filteredData = data.filter(book => 
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
