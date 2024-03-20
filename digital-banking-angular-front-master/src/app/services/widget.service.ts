// widget.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {
  private apiUrl = 'https://api.example.com/widgets';

  constructor(private http: HttpClient) {}

  getAllWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.apiUrl);
  }

  getWidgetById(id: number): Observable<Widget> {
    return this.http.get<Widget>(`${this.apiUrl}/${id}`);
  }

  addWidget(widget: Widget): Observable<Widget> {
    return this.http.post<Widget>(this.apiUrl, widget);
  }

  // Ajoutez d'autres méthodes selon vos besoins
}

interface Widget {
  // Définissez la structure de vos données de widget
  id: number;
  name: string;
  // Autres propriétés
}
