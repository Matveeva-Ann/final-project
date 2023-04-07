import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoryRequest, ICategoryResponse } from '../../interface/categoryInterface/category-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private url = environment.BACKEND_URL;
  private api = {categories: `${this.url}/category`}

  constructor(private http: HttpClient) { 
  }

  getCategory(): Observable<ICategoryResponse[]>{
    return this.http.get<ICategoryResponse[]>(this.api.categories)
  }

  addCategory(category: ICategoryRequest): Observable<ICategoryRequest>{
    return this.http.post<ICategoryRequest>(this.api.categories, category);
  }

  deleteCategory(id:number): Observable<void>{
    return this.http.delete<void>(`${this.api.categories}/${id}`);
  }

  updateCategory(category:ICategoryRequest, id:number):Observable<ICategoryResponse>{
    return this.http.patch<ICategoryResponse>(`${this.api.categories}/${id}`, category);
  }

  // getTitle(): Observable<string[]>{
  //   return this.http.get<string[]>(this.api.categories.title);
  // }
  


  ngOnInit(): void {

  }
}
