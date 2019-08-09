import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATE: any[] = [
  { data: ['32','14','46','54','24','49'], label:'Sentiment Analysis'},
  { data: ['11','15','23','28','37','28'], label:'Image Recognition'},
  { data: ['12','35','45','12','42','28'], label:'Forecasting'}
];

const LINE_CHART_LABELS: string[] = ['Jan','Fev','Mar','Abr','Mai','Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData: any[] = LINE_CHART_SAMPLE_DATE;
  public lineChartLabels: string[] = LINE_CHART_LABELS;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartColors = LINE_CHART_COLORS;
  public lineChartOptions: any = {
    responsive: true
  };

  ngOnInit() {
  }

}
