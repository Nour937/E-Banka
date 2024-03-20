// Ajoutez l'import de la classe Widget
import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../services/widget.service';
import { Widget } from 'src/app/model/widget.model'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  widgets: Widget[] = []; 

  constructor(private widgetService: WidgetService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets(): void {
    this.widgetService.getAllWidgets().subscribe((widgets) => {
      this.widgets = widgets as Widget[]; // Conversion explicite
    });
  }
  
}
