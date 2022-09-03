import { Component, OnInit } from "@angular/core";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { DataService } from "../../data.service";

@Component({
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor(public dataservice: DataService) {}
  States: any = [];
  Crops: any = [];
  DashboardStats: any;
  radioModel: string = "Month";

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: "Current",
    },
    {
      data: this.mainChartData2,
      label: "Previous",
    },
    {
      data: this.mainChartData3,
      label: "BEP",
    },
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Thursday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: "index",
      position: "nearest",
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
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5),
            max: 250,
          },
        },
      ],
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
      backgroundColor: hexToRgba(getStyle("--info"), 10),
      borderColor: getStyle("--info"),
      pointHoverBackgroundColor: "#fff",
    },
    {
      // brandSuccess
      backgroundColor: "transparent",
      borderColor: getStyle("--success"),
      pointHoverBackgroundColor: "#fff",
    },
    {
      // brandDanger
      backgroundColor: "transparent",
      borderColor: getStyle("--danger"),
      pointHoverBackgroundColor: "#fff",
      borderWidth: 1,
      borderDash: [8, 5],
    },
  ];
  public mainChartLegend = false;
  public mainChartType = "line";

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: "Facebook",
    },
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: "Twitter",
    },
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: "LinkedIn",
    },
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: "Google+",
    },
  ];

  public brandBoxChartLabels: Array<any> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: false,
        },
      ],
      yAxes: [
        {
          display: false,
        },
      ],
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
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: "rgba(255,255,255,.1)",
      borderColor: "rgba(255,255,255,.55)",
      pointHoverBackgroundColor: "#fff",
    },
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = "line";

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    this.getData();
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }
  getData() {
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      this.Crops = result.data.crops.data;
      console.log(this.Crops);
    });
    this.dataservice.getStates().valueChanges.subscribe((result: any) => {
      this.States = result.data.states.data;
    });
    this.dataservice
      .getDashboardStats()
      .valueChanges.subscribe((result: any) => {
        this.DashboardStats = result.data;
        console.log(this.DashboardStats);
      });
  }
  getCropPrices(crop) {
    console.log(crop);
  }
}
