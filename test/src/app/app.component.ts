import { Component } from '@angular/core';
//import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  //client?: Client;
  message: any;

/*
  constructor(private soap: NgxSoapService) {
    this.soap.createClient('assets/Kliendibaas_test.wsdl').then(client => this.client = client);
}

*/
  ngOnInit(): void {
  }

  onClick() {

    console.log("btn on click")
    
    let dto: ISearchDto = {
      systeemId: "PRTAAL",
      nimi: "AS TARTU AGRO", 
      kood: 10301190,

    }
   // this.sendSearchSoapRequest(dto);
  }
/*
  sendSearchSoapRequest( dto: ISearchDto) {
          let result: ISoapMethodResponse = (<any>this.client).Add(dto).subscribe((res: ISoapMethodResponse) => this.message = res.result.AddResult);
        
          console.log(result.result);
          return result;
      }

      */

}



interface ISearchDto {
    
  systeemId: String;
  nimi: String;
  kood: Number;

}

