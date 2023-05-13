import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DataService } from '../../data.service';
import { dateConverterMin } from '../../constants/columnMetadata';
import { BaseChartDirective } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(public dataservice: DataService, private router: Router) {}
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  States: any = [];
  pendingApprovals: any = [];
  pendingCropPrices: any = [];
  CropPriceFlag: any = 'false';
  ApprovalsFlag: any = 'false';
  Crops: any = [];
  Markets: any = [];
  cropPrices: any = [];
  DashboardStats: any;
  toDate: any = new Date().toISOString().substr(0, 10);
  fromDate: any = new Date();
  toDate_CropPrices: any = new Date().toISOString().substr(0, 10);
  fromDate_CropPrices: any = new Date();
  toDate_FarmDemo: any = new Date().toISOString().substr(0, 10);
  fromDate_FarmDemo: any = new Date();
  FarmDemoStats: any;
  selectedCrop: any = { attributes: { Name: 'Crop' } };
  selectedMarket: any = { attributes: { Name: 'Market' } };
  selectedState: any = { attributes: { Name: 'State' } };
  selectedStateST: any = { attributes: { Name: 'State' } };
  selectedStateFD: any = { attributes: { Name: 'State' } };
  radioModel: string = 'Month';

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Price',
    },
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = [];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function (tooltipItem, chart) {
          return {
            backgroundColor:
              chart.data.datasets[tooltipItem.datasetIndex].borderColor,
          };
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function (value: any) {
              return value.charAt(0);
            },
          },
        },
      ],
      // yAxes: [
      //   {
      //     ticks: {
      //       beginAtZero: true,
      //       maxTicksLimit: 5,
      //       stepSize: Math.ceil(250 / 5),
      //       max: 250,
      //     },
      //   },
      // ],
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    legend: {
      display: false,
    },
  };
  public mainChartColours: Array<any> = [
    {
      // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff',
    },
    {
      // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff',
    },
    {
      // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
    },
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
          ticks: {
            callback: function (value: any) {
              return value.charAt(0);
            },
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartLabels: string[] = [
    'Very Low',
    'Low',
    'Medium',
    'High',
    'Very High',
  ];
  public barChartData: any[] = [];

  public barChartLabels_farmdemo: string[] = ['Yield'];
  public barChartData_farmdemo: any[] = [];

  ngOnInit(): void {
    this.fromDate.setDate(this.fromDate.getDate() - 30);
    this.fromDate = new Date(this.fromDate).toISOString().substr(0, 10);
    this.fromDate_CropPrices.setDate(this.fromDate_CropPrices.getDate() - 30);
    this.fromDate_CropPrices = new Date(this.fromDate_CropPrices)
      .toISOString()
      .substr(0, 10);
    this.fromDate_FarmDemo.setDate(this.fromDate_FarmDemo.getDate() - 30);
    this.fromDate_FarmDemo = new Date(this.fromDate_FarmDemo)
      .toISOString()
      .substr(0, 10);
    this.getData();
    console.log(this.barChartData);
  }
  onChange(event, key) {
    this[key] = event.target.value;
    this.getData();
    if (this.selectedStateFD) {
      this.getFarmDemoStatsDashboard(this.selectedStateFD);
    }
  }
  onChange_CropPrices(event, key) {
    this[key] = event.target.value;
    if (this.selectedCrop?.id) {
      this.getCropPrices(this.selectedCrop);
    }
  }
  getData() {
    this.dataservice.getCrops(1, 10000, '').valueChanges.subscribe((result: any) => {
      this.Crops = result.data.crops.data;
    });
    this.dataservice.getStates(1, 10000, '').valueChanges.subscribe((result: any) => {
      this.States = result.data.states.data;
    });
    this.dataservice
      .getPendingRetailerApprovals()
      .valueChanges.subscribe((result: any) => {
        this.pendingApprovals = result.data.usersPermissionsUsers;
      });
    this.dataservice
      .getApprovalCropPrices()
      .valueChanges.subscribe((result: any) => {
        this.pendingCropPrices = result.data.cropPrices;
      });
    this.getMarkets();
    this.dataservice
      .getDashboardStats(undefined, this.fromDate, this.toDate)
      .valueChanges.subscribe((result: any) => {
        this.DashboardStats = result.data;
      });
  }
  getMarkets(id?) {
    this.dataservice.getMarkets(1, 10000, '', id).valueChanges.subscribe((result: any) => {
      console.log('getMarkets', result.data.markets.data);
      this.Markets = result.data.markets.data;
    });
  }
  selectState(event) {
    this.selectedState = event;
    this.getMarkets(event.id);
  }
  selectMarket(event) {
    this.selectedMarket = event;
    if (this.selectedCrop?.id && this.selectedMarket?.id) {
      this.getCropPrices(this.selectedCrop);
    }
  }
  selectCrop(event) {
    this.selectedCrop = event;
    this.getCropPrices(event);
  }
  clearFilter() {
    this.selectedCrop = { attributes: { Name: 'Crop' } };
    this.selectedMarket = { attributes: { Name: 'Market' } };
    this.selectedState = { attributes: { Name: 'State' } };
    this.mainChartData = [
      {
        data: [],
        label: 'Price',
      },
    ];
  }
  getCropPrices(crop) {
    console.log(crop);
    this.dataservice
      .getCropPricesDashboard(
        crop?.id,
        this.selectedMarket?.id,
        this.fromDate_CropPrices,
        this.toDate_CropPrices
      )
      .valueChanges.subscribe(
        (result: any) => {
          this.cropPrices = result.data.cropPrices.data;
          this.mainChartData1 = this.cropPrices.map(
            (item) => item.attributes.Price
          );
          this.mainChartLabels = this.cropPrices.map((item) =>
            dateConverterMin(item.attributes.publishedAt)
          );
          this.mainChartData = [
            {
              data: this.mainChartData1,
              label: 'Price',
            },
          ];
        },
        (error) => {
          console.log('downloadResponses', error);
        }
      );
  }
  getSoilTestStats(event) {
    this.selectedStateST = event;
    this.dataservice
      .getDashboardStats(event.id, this.fromDate, this.toDate)
      .valueChanges.subscribe((result: any) => {
        this.DashboardStats = result.data;
      });
    this.dataservice
      .getSoilTestStats(event.id, this.fromDate, this.toDate)
      .subscribe(
        (result: any) => {
          console.log(result.body, 'result');
          const keys = ['very_low', 'low', 'medium', 'high', 'very_high'];
          const nutrients = ['nitrogen_N', 'phosphorous_P', 'pottassium_K'];
          this.barChartData = [];
          for (let j = 0; j < nutrients.length; j++) {
            const count = [];
            for (let i = 0; i < keys.length; i++) {
              count.push(result.body[nutrients[j]][keys[i]].length);
            }
            const labeldata = nutrients[j].split('_');
            this.barChartData.push({ data: count, label: labeldata[0] });
            console.log(count, nutrients[j], this.barChartData);
          }
          this.chart?.update();
        },
        (error) => {
          console.log('downloadResponses', error);
        }
      );
  }
  getFarmDemoStatsDashboard(data) {
    this.selectedStateFD = data;
    this.dataservice
      .getFarmDemoStatsDashboard(
        data.id,
        'ONGOING',
        this.fromDate_FarmDemo,
        this.toDate_FarmDemo
      )
      .valueChanges.subscribe((result: any) => {
        this.FarmDemoStats = result.data;
      });
    this.barChartData_farmdemo = [];
    this.dataservice
      .getFarmDemoYieldStats(
        data.id,
        this.fromDate_FarmDemo,
        this.toDate_FarmDemo
      )
      .subscribe(
        (result: any) => {
          this.barChartData_farmdemo = [
            {
              data: [
                parseInt(
                  result.body.farmDemoYieldTrend.indorama_practice_yield_avg
                ),
              ],
              label: 'Indorama practice yield',
            },
            {
              data: [
                parseInt(
                  result.body.farmDemoYieldTrend.farmer_practice_yield_avg
                ),
              ],
              label: 'Farmer practice yield',
            },
          ];
          console.log(this.barChartData_farmdemo);
          this.chart?.update();
        },
        (error) => {
          console.log('downloadResponses', error);
        }
      );
  }

  navigateViewAll(path) {
    this.router.navigate([path]);
  }
}
