<template>
    <div class="page-content instant-width">
        <BaseCard modifierStyle="p-0">
            <div class="total-emissions">
                <div class="heading">
                    <div class="row align-items-center">
                        <div class="col-auto">Generated Reports</div>
                        <div class="col text-end">
                            <b-button variant="success" class="btn-primary" squared @click="$bvModal.show('create-report-modal')">Create Report</b-button>
                        </div>
                    </div>
                </div>

                <div class="content-box">
                    <table class="table-border-less table-fixed table-left-right-border-none">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Standard</th>
                                <th>Period</th>
                                <th>Template used</th>
                                <th>Created By</th>
                                <th>Created Date</th>
                                <th>Verify</th>
                                <th width="100">Export</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(report, index) in createdReportList" :key="index">
                                <td class="bold2">{{ `R-${report.id+index}` }}</td>
                                <td>{{ report.name }}</td>
                                <td>{{ report.description }} </td>
                                <td>{{ report.standard }}</td>
                                <td>{{ report.period }}</td>
                                <td>{{ report.template }}</td>
                                <td>{{ report.created }}</td>
                                <td>{{ report.createdDate }}</td>
                                <td><a href="#">Verify</a></td>
                                <td><a href="#">Export</a></td>
                            </tr>                           
                        </tbody>
                    </table>
                </div>
            </div>
        </BaseCard>

        <BaseCard modifierStyle="p-0">
            <div class="total-emissions">
                <div class="heading">
                    <div class="row align-items-center">
                        <div class="col-auto">Report Templates</div>
                        <div class="col text-end">
                            <b-button variant="success" class="btn-primary" @click="$bvModal.show('create-template-modal')" squared>Add Report Template</b-button>
                        </div>
                    </div>                                        
                </div>
                
                <div class="content-box">
                    <table class="table-border-less table-fixed table-left-right-border-none">
                    <thead>
                        <tr>
                        <th width="100">ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Standard</th>
                        <th>Share</th>
                        <th width="100">Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(report, index) in templateList" :key="index">
                        <td class="bold2">{{ `RT-${report.id+index}` }}</td>
                        <td>{{ report.name }}</td>
                        <td>{{ report.description }}</td>
                        <td>{{ report.standard }}</td>
                        <td><a href="#">Share</a></td>
                        <td><a href="#">Preview</a></td>
                        </tr>                                                                                                                                                                                                                             
                    </tbody>
                </table>
                </div>
                </div>
        </BaseCard>
        <!--add modal start-->
        <b-modal id="create-report-modal" hide-footer content-class="shadow" size="lg" centered ok-only>
            <template #modal-title>
                Create Report
            </template>
            <template>
                <div class="row">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Name</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <input type="text" class="form-control" v-model="addreport.name">
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Description</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <input type="text" class="form-control" v-model="addreport.description">
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Standard</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <div class="relative absolute-label">
                                    <select class="form-control" aria-label="Default select example" v-model="addreport.standard">
                                        <option value="GRI">GRI</option>
                                        <option value="SASB">SASB</option>                             
                                        <option value="TCFD">TCFD</option>                             
                                        <option value="CDP">CDP</option>                             
                                    </select>
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                    </div>
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Period</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <div class="relative absolute-label">
                                    <select class="form-control" aria-label="Default select example" v-model="addreport.period">                                                
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                    </select>
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                    </div>
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Template</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <select class="form-control" aria-label="Default select example" v-model="addreport.template">
                                    <option value="Template forGRI-1">Template for GRI-1</option>
                                    <option value="Template forGRI-2">Template for GRI-2</option>
                                    <option value="Template forWEF-4">Template for WEF-4</option>       
                                    </select>
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Created By</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <input type="text" class="form-control" v-model="addreport.created">
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Created Date</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <input type="date" class="form-control" v-model="addreport.createdDate">
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </form>
                    <div class="modal-footer pb-0 pt-3">
                        <b-button variant="outline-secondary" squared @click="$bvModal.hide('create-report-modal')">Cancel</b-button>
                        <b-button variant="success" class="btn-primary" @click="addNewReport" squared>Create</b-button>            
                    </div>
                </div>
            </template>
        </b-modal>
        <!--add modal end-->

        <!--add template modal start-->
        <b-modal id="create-template-modal" hide-footer content-class="shadow" size="lg" centered ok-only>
            <template #modal-title>
                Create Template
            </template>
            <template>
                <div class="row">
                    <form>
                        <div class="row">
                            <div class="col-md-12">
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Name</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <input type="text" class="form-control" v-model="addreport.name">
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Description</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <input type="text" class="form-control" v-model="addreport.description">
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Standard</label>
                                <div class="col-sm-8">
                                <div class="relative absolute-label">
                                    <div class="relative absolute-label">
                                    <select class="form-control" aria-label="Default select example" v-model="addreport.standard">
                                        <option value="GRI">GRI</option>
                                        <option value="SASB">SASB</option>                             
                                        <option value="TCFD">TCFD</option>                             
                                        <option value="CDP">CDP</option>                             
                                    </select>
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                    </div>
                                    <label for="" class="m-0 p-0"></label>
                                    <div class="Inputeffects"></div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </form>
                    <div class="modal-footer pb-0 pt-3">
                        <b-button variant="outline-secondary" squared @click="$bvModal.hide('create-template-modal')">Cancel</b-button>
                        <b-button variant="success" class="btn-primary" @click="addNewTemplate" squared>Create</b-button>            
                    </div>
                </div>
            </template>
        </b-modal>
        <!--add template modal end-->
    </div>
</template>

<script>
import BaseCard from '../components/UI/BaseCard.vue'
export default {
    name: 'report',
    components:{
        BaseCard
    },
    data() {
        return {
            addreport:{
                id:255,
                name:null,
                description:null, 
                standard:null, 
                period:null,
                template:null,
                created:null,
                createdDate:null, 
            },            
        }
    },
    methods:{
        addNewReport(){
            if( 
            this.addreport.name || 
            this.addreport.description || 
            this.addreport.standard || 
            this.addreport.period ||
            this.addreport.template ||
            this.addreport.created ||
            this.addreport.createdDate){
                this.createdReportList.push({
                    id:this.addreport.id++,
                    name:this.addreport.name,
                    description:this.addreport.description,
                    standard:this.addreport.standard,
                    period:this.addreport.period,
                    template:this.addreport.template,
                    created:this.addreport.created,
                    createdDate:this.addreport.createdDate,
                })
            }
            this.addreport.name='', 
            this.addreport.description='',
            this.addreport.standard='',
            this.addreport.period='',
            this.addreport.template='',
            this.addreport.created='',
            this.addreport.createdDate='',
            this.$bvModal.hide('create-report-modal')
        },
        addNewTemplate(){
            if( 
            this.addreport.name || 
            this.addreport.description || 
            this.addreport.standard){
                this.templateList.push({
                    id:this.addreport.id++,
                    name:this.addreport.name,
                    description:this.addreport.description,
                    standard:this.addreport.standard,
                })
            }
            this.addreport.name='', 
            this.addreport.description='',
            this.addreport.standard='',
            this.$bvModal.hide('create-template-modal')
        },
    },
    computed:{
        createdReportList(){
            return this.$store.state.GeneratedReportsList
        },
        templateList(){
            return this.$store.state.ReportTemplatesList
        },
    },
}
</script>