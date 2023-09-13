import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  async search<T>(url: string, query: string): Promise<T> {
    const result = await firstValueFrom(
      this.http.get<T>(`${url}?q=${query}`, { responseType: 'json' })
    );
    return result;
  }

  async get<T>(url: string): Promise<T> {
    const result = await firstValueFrom(
      this.http.get<T>(url, { responseType: 'json' })
    );
    return result;
  }

  async post<T>(url: string, body: any): Promise<T> {
    const result = await firstValueFrom(
      this.http.post<T>(url, body, { responseType: 'json' })
    );
    return result;
  }

  async put<T>(url: string, body: any): Promise<T> {
    const result = await firstValueFrom(
      this.http.put<T>(url, body, { responseType: 'json' })
    );
    return result;
  }

  async delete<T>(url: string): Promise<T> {
    const result = await firstValueFrom(
      this.http.delete<T>(url, { responseType: 'json' })
    );
    return result;
  }

  async patch<T>(url: string, body: any): Promise<T> {
    const result = await firstValueFrom(
      this.http.patch<T>(url, body, { responseType: 'json' })
    );
    return result;
  }
}
