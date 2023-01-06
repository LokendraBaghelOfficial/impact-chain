<template>
    <div class="page-content instant-width">
      <BaseCard class="p-2">
        <div class="row">
          <div class="col-12">
            <div class="relative absolute-label">
              <select class="form-control" name="topic" id="topic" v-model="topic">
                <option value="SelectTopic">Select Topic</option>
                <option value="Climate">Climate</option>
                <option value="Water">Water</option>
                <option value="Social">Social</option>
                <option value="Governance">Governance</option>
              </select>
              <label for="" class="m-0 p-0"></label>
              <div class="Inputeffects"></div>
            </div>
          </div>         
        </div>
      </BaseCard>
         <section>
            <div class="row">
              <div class="col-md-3">
                <div class="boxOne p-20">
                  <h6>Change in emissions this year</h6>
                  <div class="row">
                    <div class="col">
                      <h4>-11% </h4>
                      <div class="digit">1.3% <i class="fa fa-arrow-down"></i><span>than last year</span></div>
                    </div>
                    <div class="col px-0 text-right d-flex align-items-end justify-content-end">
                      <img class="img-fluid" src="images/Chart-red.jpg" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="boxOne p-20">
                  <h6># Of social incidents this month</h6>
                  <div class="row">
                    <div class="col">
                      <h4>08</h4>
                      <div class="digit">1.2%<i class="fa fa-arrow-down"></i><span>than last month</span></div>
                    </div>
                    <div class="col px-0 text-right d-flex align-items-end justify-content-end">
                      <img class="img-fluid" src="images/Chart-yellow.jpg" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="boxOne p-20">
                  <h6>Risk alert</h6>
                  <div class="row">
                    <div class="col">
                      <h4>16</h4>
                      <div class="digit green-txt">2.3% <i class="fa fa-arrow-down"></i><span>than last year</span></div>
                    </div>
                    <div class="col px-0 text-right d-flex align-items-end justify-content-end">
                      <img class="img-fluid" src="images/Chart-blue.jpg" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="boxOne p-20">
                  <h6>Risk alert</h6>
                  <div class="row">
                    <div class="col">
                      <h4>16</h4>
                      <div class="digit green-txt">2.3% <i class="fa fa-arrow-down"></i><span>than last year</span></div>
                    </div>
                    <div class="col px-0 text-right d-flex align-items-end justify-content-end">
                      <img class="img-fluid" src="images/Chart-blue.jpg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </section>
          <section v-if="topic == 'Climate'">
            <div>
              <div class="row">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col">
                        <h5 class="EmissionsHeading pt-10 pb-0 mb-0">Emissions Trend</h5>                        
                      </div>
                      <div class="col-auto"><a href="#"><img src="images/Valid.png" width="40"></a></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox imagesBoxgraph">
                        <div class="linkBox" id="myDiv"><img src="images/Emissions-Trend-grape.jpg"></div>                                              
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col">
                        <h5 class="EmissionsHeading pt-10 pb-0 mb-0">Emissions by Category</h5>                        
                      </div>
                      <div class="col-auto"><a href="#"><img src="images/Valid.png" width="40"></a></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox imagesBoxgraph">
                        <div class="linkBox" id="myDiv"><img src="images/emissions-category-grape.jpg"></div>                                              
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Emissions Across the Value Chain</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>
                    
                    <div class="dashboard-imgbox">
                      <img src="images/TotalEmissions.jpg">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Waste Disposal</h5></div>
                      <div class="col-auto"><a href="#"><img src="images/Valid.png" width="40"></a></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox">
                      <img src="images/WasteDisposal.jpg">
                    </div>
                  </div>
                </div>
              </div>
            </div>   
          </section>     
          <section v-if="topic == 'Water'">
            <div class="row">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col">
                        <h5 class="EmissionsHeading pt-10 pb-0 mb-0">Water Consumption  Trend</h5>                        
                      </div>
                      <div class="col-auto"><a href="#"><img src="images/Valid.png" width="40"></a></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox imagesBoxgraph">
                        <div class="linkBox"><img src="images/water-consumption-trend-grape.jpg"></div>                                              
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col">
                        <h5 class="EmissionsHeading pt-10 pb-0 mb-0">Water Eutrophication</h5>                        
                      </div>
                      <div class="col-auto"><a href="#"><img src="images/Valid.png" width="40"></a></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox imagesBoxgraph">
                        <div class="linkBox"><img src="images/WaterEutrophication.jpg"></div>                                              
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Water Discharge By Destination</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>
                    
                    <div class="dashboard-imgbox">
                      <img src="images/WaterDischargeDestination-graphe.jpg">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Water Scarcity</h5></div>
                      <div class="col-auto"><a href="#"><img src="images/Valid.png" width="40"></a></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox">
                      <img src="images/WaterScarcity.jpg">
                    </div>
                  </div>
                </div>
              </div>   
          </section>     
          <section v-if="topic == 'Social'">
            <div class="row">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Incidents Report</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>

                    <div class="dashboard-imgbox">
                      <img src="images/IncidentsReport.jpg">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Diversity Report</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>
                    
                    <div class="dashboard-imgbox">
                      <img src="images/DiversityReport.jpg">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Health, Safety &amp; Welfare</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>
                    <div class="row d-block justify-content-center">
                      <div class="form-group d-flex">
                        <label for="filter" class="col-sm-4 col-form-label text-right">Filter by Type:</label>
                        <div class="col-sm-6">        
                          <div class="relative absolute-label">
                            <select class="form-control" id="changeImg" onchange="displayImage()"> 
                              <option value="images/HealthSafty.jpg">Safety</option>                           
                              <option value="images/animalWelfareGraph.jpg">Animal Welfare</option>                            
                            </select>
                            <label for="" class="m-0 p-0"></label>
                            <div class="Inputeffects"></div>
                          </div>                                            
                        </div>
                      </div>
                    </div>
                    <div class="dashboard-imgbox">
                      <img id="canvas" src="images/HealthSafty.jpg">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Fair Compensation</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox">
                      <br>
                      <a href="#" data-toggle="modal" data-target="#FairCompensationPopup"><img src="images/fairCompensation.jpg"></a>
                      <!-- Modal -->
                      <div class="modal fade" id="FairCompensationPopup" tabindex="-1" aria-labelledby="FairCompensationPopup" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">Fair Compensation</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              
                              <table class="table w-100">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>Farm</th>
                                    <th class="text-right">Total Compensation YTD​</th>
                                    <th class="text-right"># of Workers​</th>
                                    <th class="text-right">Average Payment/ Worker​</th>
                                    <th class="text-right">Minimum Wage​​</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><input type="radio" checked="" name="checkpopup1" id="popradio1"></td>
                                    <td>Farm - 1​</td>
                                    <td class="text-right">$3,744 ​</td>
                                    <td class="text-right">12​</td>
                                    <td class="text-right">$1.30 ​</td>
                                    <td class="text-right">$1.25 ​</td>
                                  </tr>
                                  <tr>
                                    <td><input type="radio" name="checkpopup1" id="popradio2"></td>
                                    <td>Farm - 2​</td>
                                    <td class="text-right">$7,452 ​ ​</td>
                                    <td class="text-right">23​</td>
                                    <td class="text-right">$1.35 ​​</td>
                                    <td class="text-right">$1.25 ​​</td>
                                  </tr>
                                  <tr>
                                    <td><input type="radio" name="checkpopup1" id="popradio3"></td>
                                    <td>Farm - 3</td>
                                    <td class="text-right">$2,150 ​</td>
                                    <td class="text-right">7</td>
                                    <td class="text-right">$1.28 ​​​</td>
                                    <td class="text-right">$1.25 ​​</td>
                                  </tr>
                                  <tr>
                                    <td><input type="radio" name="checkpopup1" id="popradio4"></td>
                                    <td>Farm - 4</td>
                                    <td class="text-right">$2,688 ​​</td>
                                    <td class="text-right">8​</td>
                                    <td class="text-right">$1.40 ​ ​​</td>
                                    <td class="text-right">$1.25 ​​</td>
                                  </tr>
                                </tbody>
                              </table>
                              <ul class="nav nav-tabs material-tabs" id="Inspecttab" role="tablist">
                                <li class="nav-item" role="presentation">
                                  <a class="nav-link active" id="Dims-tab" data-toggle="tab" href="#Dims" role="tab" aria-controls="Dims" aria-selected="true">Dims</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <a class="nav-link" id="Validate-tab" data-toggle="tab" href="#Validate" role="tab" aria-controls="Validate" aria-selected="true">Validate</a>
                                </li>
                               
                              </ul>
                              <div class="tab-content" id="Inspecttab">
                                <div class="tab-pane fade show active" id="Dims" role="tabpanel" aria-labelledby="Dims-tab">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <table class="table-border w-100 mt-4">
                                        <tbody>
                                          <tr>
                                            <td class="text-left text-primary">Compensation Type</td>
                                            <td>Wages</td>
                                          </tr>
                                          <tr>
                                            <td class="text-left text-primary">YTD</td>
                                            <td>$26,208​</td>
                                          </tr>
                                          <tr>
                                            <td class="text-left text-primary">Payment Method​</td>
                                            <td>Direct Deposit​</td>
                                          </tr>
                                          <tr>
                                            <td class="text-left text-primary">Bank</td>
                                            <td>Himachal Pradesh Grameen Bank​</td>
                                          </tr>
                                          <tr>
                                            <td class="text-left text-primary">Last Deposit Date​</td>
                                            <td>2021-06-30​</td>
                                          </tr>
                                         
                                          
                                          <tr>
                                            <td class="text-left text-primary">No. of transactions​</td>
                                            <td>12</td>
                                          </tr>
                                          <tr>
                                            <td class="text-left text-primary">Transaction Proof​</td>
                                            <td>Bank Statement​</td>
                                          </tr>                                          
                                        </tbody>
                                      </table>
                                    </div>
                                    <div class="col-md-6 text-center mt-4">
                                      <img src="images/Payslip.jpg" class="img-fluid border" alt="">
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-pane fade" id="Validate" role="tabpanel" aria-labelledby="Validate-tab">
                                  <h5 class="mt-3">Inspect &amp; Pack Data</h5>
                                  <table class="info-table">
                                    <tbody><tr>
                                      <th width="250">Inspect &amp; Pack Record</th>
                                      <td>SO ID:SO03014,Inspected By:Frank Lazak, Inspected Date:2020-09-02 00:00:00, Packed Date:2020-09-02 00:00:00, Location:2, pallet Dimension Id:2, VGM:100, Noofpieces:2, Comment:Cardboard Packing, Dims:10 X 9 X 8, Package VGM:125 Lbs, Package Noofpieces:2, Package Condition:Good, Status:Packed</td>
                                    </tr>

                                    <tr>
                                      <th>Record hash</th>
                                      <td>9b17f5532f70ef86e93abccd489fceb70ac648a1d27206ab0d37e5e5ce482162</td>
                                    </tr>
                                    <tr>
                                      <th>txtId</th>
                                      <td>9ac9afdbd858d9ad78cec9edd0f1e899670d331875aa326dd1c46f27131e465c</td>
                                    </tr>
                                    <tr>
                                      <th>payload_pro posal_hash</th>
                                      <td>008f1b7e419ce1b7c0787c4f6d58fd427e12b767eb22d8ec61656679903832a4</td>
                                    </tr>
                                    <tr>
                                      <th>validation_code</th>
                                      <td>
                                        <div class="row">
                                          <div class="col">VALID</div>
                                          <div class="col">Creator_Org_id</div>
                                          <div class="col">Creator_Org_id</div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>chaincodename</th>
                                      <td>
                                        <div class="row">
                                          <div class="col">test3-net</div>
                                          <div class="col">Notary_Org_id</div>
                                          <div class="col">{"Org1MSP"}</div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>createdt</th>
                                      <td>
                                        <div class="row">
                                          <div class="col">2020-09-29T05:00:11.434Z</div>
                                          <div class="col">type</div>
                                          <div class="col">ENDORSER_TRANSACTION</div>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Creator Certificate</th>
                                      <td>-----BEGIN CERTIFICATE----- MIICGjCCAcCgAwIBAgIRANuOnVN+yd/BGyoX7ioEklQwCgYIKoZIzj0EAwIwczEL MAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExFjAUBgNVBAcTDVNhbiBG cmFuY2lzY28xGTAXBgNVBAoTEG9yZzEuZXhhbXBsZS5jb20xHDAaBgNVBAMTE2Nh Lm9yZzEuZXhhbXBsZS5jb20wHhcNMTcwNjI2MTI0OTI2WhcNMjcwNjI0MTI0OTI2 WjBbMQswCQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMN U2FuIEZyYW5jaXNjbzEfMB0GA1UEAwwWQWRtaW5Ab3JnMS5leGFtcGxlLmNvbTBZ MBMGByqGSM49AgEGCCqGSM49AwEHA0IABGu8KxBQ1GkxSTMVoLv7NXiYKWj5t6Dh WRTJBHnLkWV7lRUfYaKAKFadSii5M7Z7ZpwD8NS7IsMdPR6Z4EyGgwKjTTBLMA4G A1UdDwEB/wQEAwIHgDAMBgNVHRMBAf8EAjAAMCsGA1UdIwQkMCKAIBmrZau7BIB9 rRLkwKmqpmSecIaOOr0CF6Mi2J5H4aauMAoGCCqGSM49BAMCA0gAMEUCIQC4sKQ6 CEgqbTYe48az95W9/hnZ+7DI5eSnWUwV9vCd/gIgS5K6omNJydoFoEpaEIwM97uS XVMHPa0iyC497vdNURA= -----END CERTIFICATE----- </td>
                                    </tr>
                                    <tr>
                                      <th>Notary Certificate</th>
                                      <td>-----BEGIN CERTIFICATE----- MIICGTCCAb+gAwIBAgIQTx2TvwYtAf62KKQliP6UoTAKBggqhkjOPQQDAjBzMQsw CQYDVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTEWMBQGA1UEBxMNU2FuIEZy YW5jaXNjbzEZMBcGA1UEChMQb3JnMS5leGFtcGxlLmNvbTEcMBoGA1UEAxMTY2Eu b3JnMS5leGFtcGxlLmNvbTAeFw0xNzA2MjYxMjQ5MjZaFw0yNzA2MjQxMjQ5MjZa MFsxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMRYwFAYDVQQHEw1T YW4gRnJhbmNpc2NvMR8wHQYDVQQDExZwZWVyMC5vcmcxLmV4YW1wbGUuY29tMFkw EwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEPPHUp7+EYb2xIbleWfRClMgqbtQqRmIS 2a5F8T0L3J6IZp9wm7K+w4LIBIgw1Cz9D8nqHW6f4OYBrbp0cSGnR6NNMEswDgYD VR0PAQH/BAQDAgeAMAwGA1UdEwEB/wQCMAAwKwYDVR0jBCQwIoAgGatlq7sEgH2t EuTAqaqmZJ5who46vQIXoyLYnkfhpq4wCgYIKoZIzj0EAwIDSAAwRQIhAK4i2Hz2 K398TvjJk62neDoenYhkMY7rBN3BN/GI0G0SAiAOTx36wuy9/4BBV8NVBCZ9V+Iw msdI9CyZ59oVMVmNYQ== -----END CERTIFICATE----- </td>
                                    </tr>
                                  </tbody></table>
                                </div>
                              </div>
                            </div>                                        
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
          </section> 
          <section v-if="topic == 'Governance'">
            <div class="row">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Governance Incidents Report</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>
                    <div class="dashboard-imgbox">
                      <img src="images/GovernanceIncidents.jpg">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Product Governance</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>

                    <div class="dashboard-imgbox">
                      <img src="images/ProductGovernance.jpg">
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Employee Training </h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100">
                    </div>
                    <div class="row d-block justify-content-center">
                      <div class="form-group d-flex">
                        <label for="filter" class="col-sm-4 col-form-label text-right">Filter by Quarter:</label>
                        <div class="col-sm-6"> 
                          <div class="relative absolute-label">
                            <select class="form-control">
                              <option>Values: Q1-2021, Q2-2021 </option>
                            </select>                            
                            <label for="" class="m-0 p-0"></label>
                            <div class="Inputeffects"></div>
                          </div>                                                   
                        </div>
                      </div>
                    </div>
                   <div class="row">
                    <table class="table-border-less table-fixed table-left-right-border-none">
                      <thead>
                        <tr>
                          <th>Company</th>
                          <th># of sessions</th>
                          <th>% Attendance</th>
                          <th>% Completed</th>
                          <th>Verify</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avocado</td>
                          <td>3</td>
                          <td>85%</td>
                          <td class="text-warning">60%</td>
                          <td><a href="#">Verify</a></td>
                        </tr>
                        <tr>
                          <td>Agrestal</td>
                          <td class="text-danger">2</td>
                          <td class="text-danger">40%</td>
                          <td class="text-danger">30%</td>
                          <td><a href="#">Verify</a></td>
                        </tr>
                        <tr>
                          <td>Shikhar</td>
                          <td>1</td>
                          <td class="text-warning">65%</td>
                          <td class="text-warning">60%</td>
                          <td><a href="#">Verify</a></td>
                        </tr>
                      </tbody>
                    </table>
                   </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="View-box h-100">
                    <div class="row">
                      <div class="col"><h5 class="EmissionsHeading pt-10 pb-0 mb-0">Supplier Certifications</h5></div>
                      <div class="col-auto"><img src="images/Valid.png" width="40"></div>
                      <hr class="w-100 mb-0 pb-0">
                    </div>
                   
                    <div class="row">
                      <table class="table-border-less table-fixed table-left-right-border-none">
                        <thead>
                          <tr>
                            <th>Certification</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Renewal Date</th>
                            <th>Verify</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>GOTS</td>
                            <td>Avocado</td>
                            <td>Valid</td>
                            <td>06/14/2022</td>
                            <td>
                              <a href="#" data-toggle="modal" data-target="#SupplierCertificationsPopup">Verify</a>
                               
                            </td>
                          </tr>                        
                          <tr>
                            <td>GOLS</td>
                            <td>Avocado</td>
                            <td>Valid</td>
                            <td>03/10/2022</td>
                            <td><a href="#">Verify</a></td>
                          </tr>                        
                          <tr>
                            <td>RWS</td>
                            <td>Agrestal</td>
                            <td class="text-warning">Valid</td>
                            <td class="text-warning">09/02/2021</td>
                            <td><a href="#">Verify</a></td>
                          </tr>     
                          <tr>
                            <td>FSC</td>
                            <td>Shikhar</td>
                            <td>Valid</td>
                            <td>08/14/2022</td>
                            <td><a href="#">Verify</a></td>
                          </tr>                     
                          <tr>
                            <td>Greenguard</td>
                            <td>Avocado</td>
                            <td>Valid</td>
                            <td>07/24/2022</td>
                            <td><a href="#">Verify</a></td>
                          </tr>                     
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>  
          </section> 
    </div>
  </template>
  
  <script>  
  import BaseCard from "../components/UI/BaseCard.vue";
  
  export default {
    name: "Analyze",
    components: {      
      BaseCard,
    },
    data() {
      return {  
        topic:null,      
      };
    },    
    methods: {},
  };
  </script>