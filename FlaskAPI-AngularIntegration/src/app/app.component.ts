import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Get-API With AG Grid';

   columnDefs = [
        {headerName: 'Scenario Id', field: 'scenario_id' },
        {headerName: 'Client Id', field: 'client_id' },
        {headerName: 'Organization Id', field: 'organization_id' },
        {headerName: 'Drive Module Id', field: 'drive_module_id' },
        {headerName: 'Scenario Name', field: 'scenario_name' },
        {headerName: 'Scenario Desc', field: 'scenario_desc'},
        {headerName: 'Created On', field: 'created_on' },
        {headerName: 'Created By', field: 'created_by' },
        {headerName: 'Last Updated On', field: '_last_updated_on' },
        {headerName: 'Last Updated By', field: '_last_updated_by' },
    ];

    /*rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];*/
  rowData = [
  {
    _last_updated_by: "TEST",
    _last_updated_on: "Thu, 27 Oct 2016 09:17:27 GMT",
    client_id: 1,
    created_by: "TEST",
    created_on: "Thu, 27 Oct 2016 09:17:27 GMT",
    drive_module_id: 1,
    organization_id: 1,
    scenario_desc: "Gross To Net Accruals",
    scenario_id: 1,
    scenario_name: "Gross To Net Accruals"
  },
  {
    _last_updated_by: "TEST",
    _last_updated_on: "Thu, 27 Oct 2016 09:17:57 GMT",
    client_id: 1,
    created_by: "TEST",
    created_on: "Thu, 27 Oct 2016 09:17:57 GMT",
    drive_module_id: 2,
    organization_id: 1,
    scenario_desc: "Gross To Net Accruals",
    scenario_id: 2,
    scenario_name: "Gross To Net Accruals"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Monthly AMP",
    scenario_id: 601,
    scenario_name: "MAMP"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Quarterly AMP",
    scenario_id: 602,
    scenario_name: "QAMP"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Best Price",
    scenario_id: 603,
    scenario_name: "BP"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Average Sales Price",
    scenario_id: 604,
    scenario_name: "ASP"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Public Health Service",
    scenario_id: 605,
    scenario_name: "PHS"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Quarterly Non-FAMP",
    scenario_id: 606,
    scenario_name: "QNFAMP"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Annual Non-FAMP",
    scenario_id: 607,
    scenario_name: "ANFAMP"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "URA",
    scenario_id: 608,
    scenario_name: "URA"
  },
  {
    _last_updated_by: "CHANDAN",
    _last_updated_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    client_id: 1,
    created_by: "CHANDAN",
    created_on: "Wed, 02 Nov 2016 08:40:52 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "FSS",
    scenario_id: 609,
    scenario_name: "FSS"
  },
  {
    _last_updated_by: "apatil",
    _last_updated_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    client_id: 1,
    created_by: "apatil",
    created_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Monthly AMP-5i",
    scenario_id: 610,
    scenario_name: "MAMP-5i"
  },
  {
    _last_updated_by: "apatil",
    _last_updated_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    client_id: 1,
    created_by: "apatil",
    created_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Quarterly Non-FAMP-DIRECT",
    scenario_id: 611,
    scenario_name: "QNFAMP-DIRECT"
  },
  {
    _last_updated_by: "apatil",
    _last_updated_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    client_id: 1,
    created_by: "apatil",
    created_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Annual Non-FAMP-DIRECT",
    scenario_id: 612,
    scenario_name: "ANFAMP-DIRECT"
  },
  {
    _last_updated_by: "apatil",
    _last_updated_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    client_id: 1,
    created_by: "apatil",
    created_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Monthly AMP-5i-THRESHOLD",
    scenario_id: 613,
    scenario_name: "MAMP-5i-THRESHOLD"
  },
  {
    _last_updated_by: "apatil",
    _last_updated_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    client_id: 1,
    created_by: "apatil",
    created_on: "Fri, 06 Apr 2018 03:42:36 GMT",
    drive_module_id: 6,
    organization_id: 1,
    scenario_desc: "Quarterly Non-FAMP 90:10 Ratio",
    scenario_id: 614,
    scenario_name: "QNFAMP-90:10"
  }
]

  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  gpScenarioApiUrl =  'http://localhost:2424/api/tasks';
  apiData;
  gpscenarioData;
  constructor( private http: HttpClient){

  }

 /* ngOnInit(){
    this.http.get(this.apiUrl).subscribe(
      (data) => { console.warn(data)
        this.apiData = data;
      }
    )

    this.http.get(this.gpScenarioApiUrl).subscribe(
      (gpScenariodata) => { console.warn(gpScenariodata)
        this.gpscenarioData = gpScenariodata;
      }
    )
  }*/

  ngOnInit(){
    this.http.get(this.gpScenarioApiUrl).subscribe(
      (gpScenariodata) => { console.warn(gpScenariodata)
        this.gpscenarioData = gpScenariodata;
      }
    )
  }
}
