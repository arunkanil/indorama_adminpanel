import { ActionRenderer } from '../utils/StatusRenderer';

export let filterParams = {
  suppressAndOrCondition: true,
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    const dateAsString = new Date(cellValue).toLocaleDateString('en-IN');
    if (dateAsString == null) { return -1; }
    const dateParts = dateAsString.split('/');
    const cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    console.log(cellValue, 'ddd', cellDate, 'ddd', filterLocalDateAtMidnight);
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
  buttons: ['reset'],
};

function monthRenderer(params) {
  switch (params.data.MarriageMonth) {
    case 0:
      return 'January';
    case 1:
      return 'February';
    case 2:
      return 'March';
    case 3:
      return 'April';
    case 4:
      return 'May';
    case 5:
      return 'June';
    case 6:
      return 'July';
    case 7:
      return 'August';
    case 8:
      return 'September';
    case 9:
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
  }
}
function dateRenderer(params) {
  const value =
    params.data.Address?.post_office?.Name +
    ' ' +
    params.data.Address?.post_office?.Pincode;
  if (value != 'undefined undefined') {
    return value;
  } else { return 'No data'; }
}

export const AgentsColumn = [
  {
    field: 'id',
    headerName: 'ID',
    resizable: true,
    sortable: true,
  },
  {
    field: 'farmerName',
    headerName: 'Farmer Name',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'Crop',
    headerName: 'Crop',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'Date',
    headerName: 'Date',
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'Agronomist',
    headerName: 'Agronomist',
    minWidth: 150,
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'Status',
    headerName: 'Status',
    minWidth: 100,
    resizable: true,
    sortable: true,
    // cellRenderer : ActionRenderer,
    // filter: "agDateColumnFilter",
    // filterParams: filterParams,
  },
  {
    field: 'Action',
    headerName: 'Actions',
    minWidth: 100,
    resizable: true,
    sortable: true,
    cellRenderer: ActionRenderer,
    // filter: "agDateColumnFilter",
    // filterParams: filterParams,
  },
];
export const RetailersColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'Business Name',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.username',
    headerName: 'Username',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  // {
  //   field: "attributes.email",
  //   headerName: "Email",
  //   minWidth: 150,
  //   resizable: true,
  //   filter: "agTextColumnFilter",
  //   filterParams: {
  //     filterOptions: ["contains"],
  //     buttons: ["reset"],
  //   },
  // },
  {
    field: 'attributes.retailer_categories.data',
    headerName: 'Category',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      let x = '';
      for (let i = 0; i < data.value.length; i++) {
        x = x + data.value[i].attributes.CategoryName + ',';
      }
      return x;
    },
    // width : "auto"
  },
  {
    field: 'attributes.village.data.attributes.Name',
    headerName: 'Village',
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lga.data.attributes.Name',
    headerName: 'LGA',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lga.data.attributes.state.data.attributes.Name',
    headerName: 'State',
    minWidth: 150,
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.confirmed',
    headerName: 'Approval Status',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    valueGetter: (data) => {
      if (data.data.attributes.blocked === true) { return 'Rejected'; }
      else if (data.data.attributes.confirmed === true) {
        return 'Approved';
      } else if (data.data.attributes.confirmed === false) {
        return 'Pending';
      }
      console.log(data.data.attributes);
    },
    // width : "auto"
  },
];
export const UsersColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'Name',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.username',
    headerName: 'Username',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.referred_agronomist.data.attributes.Name',
    headerName: 'Referred Agronomist',
    minWidth: 150,
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.UserType',
    headerName: 'Category',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    // width : "auto"
  },
  {
    field: 'attributes.village.data.attributes.Name',
    headerName: 'Village',
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lga.data.attributes.Name',
    headerName: 'LGA',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lga.data.attributes.state.data.attributes.Name',
    headerName: 'State',
    minWidth: 150,
    resizable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
];
export const FarmDemoColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    width: 120,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return 'FHTY' + data.value;
    },
  },
  {
    field: 'attributes.Farmer',
    headerName: 'Farmer Name',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.crop.data.attributes.Name',
    headerName: 'Crop Name',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.state.data.attributes.Name',
    headerName: 'State',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lgas.data.attributes.Name',
    headerName: 'LGA',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.Status',
    headerName: 'Status',
    resizable: true,
    sortable: true,
    width: 150,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.AreaOfField',
    headerName: 'Area of Field',
    sortable: true,
    resizable: true,
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    // cellRenderer: fullNameGetter,
  },
  {
    field: 'attributes.Season',
    headerName: 'Season',
    sortable: true,
    resizable: true,
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    // cellRenderer: fullNameGetter,
  },
  {
    field: 'attributes.DateOfHarvesting',
    headerName: 'Date of Harvesting',
    resizable: true,
    filter: 'agDateColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toDateString() : '';
    },
  },
  // {
  //   field: "tele_caller_contact.Name",
  //   headerName: "Agent",
  //   minWidth: 150,
  //   resizable: true,
  //   sortable: true,
  //   filter: "agTextColumnFilter",
  //   filterParams: {
  //     filterOptions: ["contains"],
  //     buttons: ["reset"],
  //   },
  // },
];
export const SoilHomeColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    width: 100,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'CropName',
    headerName: 'Crop Name',
    // minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'State',
    headerName: 'State',
    // minWidth: 120,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    // filterParams: filterParams,
  },
  {
    field: 'Market',
    headerName: 'Market',
    // minWidth: 120,
    resizable: true,
    sortable: true,
    // cellRenderer : monthRenderer
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'Unit',
    headerName: 'Unit',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    width: 'auto',
  },
  {
    field: 'Price',
    headerName: 'Price',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    width: 'auto',
  },
  {
    field: 'Addedon',
    headerName: 'Added on',
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    // cellRenderer: fullNameGetter,
  },
  {
    field: 'Action',
    headerName: 'Actions',
    minWidth: 100,
    resizable: true,
    sortable: true,
    cellRenderer: ActionRenderer,
    // filter: "agDateColumnFilter",
    // filterParams: filterParams,
  },
  // {
  //   field: "Address.locality.Name",
  //   headerName: "Locality",
  //   minWidth: 150,
  //   resizable: true,
  //   filter: "agTextColumnFilter",
  //   filterParams: {
  //     filterOptions: ["contains"],
  //     buttons: ["reset"],
  //   },
  // },
  // {
  //   field: "tele_caller_contact.Name",
  //   headerName: "Agent",
  //   minWidth: 150,
  //   resizable: true,
  //   sortable: true,
  //   filter: "agTextColumnFilter",
  //   filterParams: {
  //     filterOptions: ["contains"],
  //     buttons: ["reset"],
  //   },
  // },
];
export const SoilAnalysisColumns = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    width: 130,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return 'STR' + data.value;
    },
  },
  {
    field: 'attributes.Farmer.data.attributes.Name',
    headerName: 'Farmer Name',
    // minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lga.data.attributes.state.data.attributes.Name',
    headerName: 'State',
    // minWidth: 120,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    // filterParams: filterParams,
  },
  {
    field: 'attributes.lga.data.attributes.Name',
    headerName: 'LGA',
    // minWidth: 120,
    resizable: true,
    sortable: true,
    // cellRenderer : monthRenderer
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.area.data.attributes.Name',
    headerName: 'City',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    width: 'auto',
  },
  {
    field: 'attributes.nutrient',
    headerName: 'Testing for',
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    // cellRenderer: fullNameGetter,
  },
  {
    field: 'attributes.Status',
    headerName: 'Status',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    width: 'auto',
    cellRenderer: (data) => {
      return data.value.replaceAll('_', ' ');
    },
  },
  {
    field: 'attributes.createdAt',
    headerName: 'Requested on',
    sortable: true,
    minWidth: 150,
    resizable: true,
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : '';
    },
  },
];
export function dateConverter(date) {
  if (date) {
    return new Date(date);
  } else {
    return 'No data';
  }
}
export function dateConverterMin(date) {
  if (date) {
    return new Date(date).toDateString();
  } else {
    return 'No data';
  }
}
export const StateMasterColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'State',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];
export const LGAMasterColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'LGA',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.state.data.attributes.Name',
    headerName: 'State',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];
export const AreaMasterColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'City',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.PostalCode',
    headerName: 'Postal Code',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lga.data.attributes.Name',
    headerName: 'LGA',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.lga.data.attributes.state.data.attributes.Name',
    headerName: 'State',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];
export const VillageMasterColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'Village',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.area.data.attributes.Name',
    headerName: 'City',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.area.data.attributes.lga.data.attributes.Name',
    headerName: 'LGA',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field:
      'attributes.area.data.attributes.lga.data.attributes.state.data.attributes.Name',
    headerName: 'state',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];
export const MarketMasterColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'Market',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.state.data.attributes.Name',
    headerName: 'State',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];
export const CropMasterColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Name',
    headerName: 'Crop',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   colId: 'params',
  //   cellRenderer : ActionRenderer,
  // }
];
export const CropPricesColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.crop.data.attributes.Name',
    headerName: 'Crop',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.market.data.attributes.Name',
    headerName: 'Market',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.state.data.attributes.Name',
    headerName: 'State',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.Price',
    headerName: 'Price',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.Unit',
    headerName: 'Unit',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes',
    headerName: 'Status',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      console.log(data.value, 'cellrenderer');
      if (data.value.Rejected == true && data.value.publishedAt == null) {
        return 'Rejected';
      }
      if (data.value.Rejected == false && data.value.publishedAt == null) {
        return 'Pending';
      }
      if (data.value.Rejected == false && data.value.publishedAt !== null) {
        return 'Approved';
      }
    },
  },
  {
    field: 'attributes.user.data.attributes.Name',
    headerName: 'Created by',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.createdAt',
    headerName: 'Created at',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : '';
    },
  },
  {
    field: 'attributes.publishedAt',
    headerName: 'Published at',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : 'Not Published';
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];
export const SmsColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    maxWidth: 100,
    sortable: true,
  },
  {
    field: 'attributes.message',
    headerName: 'Message',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.createdAt',
    headerName: 'Created at',
    resizable: true,
    maxWidth: 250,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : '';
    },
  },
];
export const DeliveryReportColumn = [
  {
    valueGetter: 'node.rowIndex + 1',
    headerName: 'No.',
    resizable: true,
    maxWidth: 100,
    sortable: true,
  },
  {
    field: 'recipient',
    headerName: 'Recipient',
    minWidth: 150,
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'delivery_status',
    headerName: 'Delivery status',
    resizable: true,
    maxWidth: 250,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    // cellRenderer: (data) => {
    //   return data.value ? new Date(data.value).toString() : "";
    // },
  },
];
export const MarketplaceColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.marketplace_category.data.attributes.CategoryName',
    headerName: 'Category',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.ItemName',
    headerName: 'Title',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.AvailableQty',
    headerName: 'Quantity',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.Price',
    headerName: 'Price',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.Unit',
    headerName: 'Unit',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.seller.data.attributes.Name',
    headerName: 'Listed by',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.createdAt',
    headerName: 'Created at',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : '';
    },
  },
  // {
  //   field: "attributes.publishedAt",
  //   headerName: "Published at",
  //   resizable: true,
  //   sortable: true,
  //   filter: "agTextColumnFilter",
  //   filterParams: {
  //     filterOptions: ["contains"],
  //     buttons: ["reset"],
  //   },
  //   cellRenderer: (data) => {
  //     return data.value
  //       ? new Date(data.value).toString()
  //       : "Not Published";
  //   },
  // },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];

export const IndoramaUpdatesColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.Title',
    headerName: 'Title',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.createdAt',
    headerName: 'Created at',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : '';
    },
  },
  // {
  //   field: "Action",
  //   headerName: "Actions",
  //   minWidth: 100,
  //   resizable: true,
  //   sortable: true,
  //   cellRenderer : ActionRenderer,
  // }
];

export const SurveysColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.SurveyTitle',
    headerName: 'Survey Title',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.createdAt',
    headerName: 'Created at',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : '';
    },
  },
];
export const ActivitiesColumn = [
  {
    field: 'id',
    headerName: 'ID',
    checkboxSelection: true,
    headerCheckboxSelection: true,
    resizable: true,
    sortable: true,
  },
  {
    field: 'attributes.ActivityType',
    headerName: 'Activity type',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value.replace(/([A-Z])/g, ' $1').trim();
    },
  },
  {
    field: 'attributes.Date',
    headerName: 'Date',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toDateString() : '';
    },
  },
  {
    field: 'attributes.Time',
    headerName: 'Time',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.village.data.attributes.Name',
    headerName: 'Village',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.area.data.attributes.lga.data.attributes.Name',
    headerName: 'LGA',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.area.data.attributes.lga.data.attributes.state.data.attributes.Name',
    headerName: 'State',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.NoOfAttendees',
    headerName: 'No. of attendees',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.agronomist',
    headerName: 'Agronomist',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
  },
  {
    field: 'attributes.createdAt',
    headerName: 'Created at',
    resizable: true,
    sortable: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      buttons: ['reset'],
    },
    cellRenderer: (data) => {
      return data.value ? new Date(data.value).toString() : '';
    },
  },
];
