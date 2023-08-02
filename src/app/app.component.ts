import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

  ngOnInit(): void {
    const context = this.canvas.nativeElement.getContext('2d');
  }

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  public pieChartDatasets = [
    {
      data: [500, 300, 300],
      backgroundColor: ['red', 'green', 'yellow'],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 30, 20],
        label: '',
        fill: false,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'coral',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;

  public scatterChartDatasets: ChartConfiguration<'scatter'>['data']['datasets'] =
    [
      {
        data: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: -2 },
          { x: 4, y: 4 },
          { x: 5, y: -3 },
        ],
        label: 'Series A',
        pointRadius: 10,
      },
    ];

  public scatterChartOptions: ChartConfiguration<'scatter'>['options'] = {
    responsive: false,
  };
  constructor() {}
}
