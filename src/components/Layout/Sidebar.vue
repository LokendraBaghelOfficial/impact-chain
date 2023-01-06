<template>
  <div class="_sidebar-wrapper" :class="mode">   
      <a class="header-logo" href="#">
        <img src="@/assets/images/cu_logo.jpg" height="35" alt="">
      </a>
      <div class="sidebar-scroll">
        <div class="accordion" v-for="(nav, index) in navbar" :key="index"> 
          <template>
            <div class="accordion-item" @click="active = `${nav.title}`" :class="{active:active === `${nav.title}`}">              
              <template v-if="!nav.toggle">
                <b-link exact class="accordion-button" :to="{path:`${nav.navLink}`}">                 
                    <i class="nav-icon" v-if="nav.icon" :class="nav.navicon"></i>               
                    <span class="nav-title">{{ nav.title }} </span>
                </b-link>                
              </template>
              <template v-else>
                <b-link class="accordion-button" v-b-toggle="'collapse-'+index">                 
                    <i class="nav-icon" v-if="nav.icon" :class="nav.navicon"></i>               
                    <span class="nav-title">{{ nav.title }}</span>
                    <i class="zmdi zmdi-chevron-up"></i>
                    <i class="zmdi zmdi-chevron-down"></i>
                </b-link>
                <b-collapse :id="'collapse-'+index" v-if="nav.toggle">
                  <b-card-body class="accordion-body">                   
                    <b-link class="dropdown-item" exact v-for="(item, i) in nav.sublink" :key="i" :to="{path:`${item.navLink}`}">
                      <i class="nav-sab-icon" v-if="item.icon" :class="item.navicon"></i>  {{ item.subtitle }}
                    </b-link>                                     
                  </b-card-body>
                </b-collapse>
              </template>              
            </div>
          </template>                  
        </div>        
      </div>
    </div>
</template>

<script>
export default {
    name:'sidebar',
    props:['mode'],
    components:{},
    data(){
        return {
          active:null,
          navbar:[
            {              
              title:'Home',
              navLink:'dashboard',
              navicon:'icon-layout',
              icon:true,
              toggle:false,
              sublink:[],
            },
            {              
              title:'Collect',
              navLink:'collect',
              navicon:'icon-database',
              icon:true,
              toggle:true,
              sublink:[
                  {subtitle:'Collect', navLink:'#', icon:true, navicon:'icon-climate-icon'},
                  {subtitle:'Water', navLink:'#', icon:true, navicon:'icon-water-icon'},
                  {subtitle:'Energy', navLink:'#', icon:true, navicon:'icon-enery-icon'},
                  {subtitle:'Diversity & Inclusion', navLink:'#', icon:true, navicon:'icon-PayEquality-icon'},
                  {subtitle:'Pay Equality', navLink:'#', icon:true, navicon:'icon-EthicalBehavio01'},
                  {subtitle:'Involuntary Labor', navLink:'#', icon:true, navicon:'icon-InvoluntaryLabor'},
                  {subtitle:'Employee Health & Safety', navLink:'#', icon:true, navicon:'icon-EmployeeHealthandSafety'},
                  {subtitle:'Ethical Behavior', navLink:'#', icon:true, navicon:'icon-EthicalBehavior'},
                  {subtitle:'Waste', navLink:'#', icon:true, navicon:'icon-Waste-icon'},
                ],
              },
            {              
              title:'Review',
              navLink:'review',
              navicon:'icon-hard-drive',
              icon:true,
              toggle:true,
              sublink:[
                  {subtitle:'Review & Approve', navLink:'#', icon:false, navicon:'icon-climate-icon'},            
                ],
            },
            {              
              title:'Report',
              navLink:'report',
              navicon:'icon-file-text',
              icon:true,
              toggle:false,
              sublink:[
                  {subtitle:'Review & Approve', navLink:'#', icon:false, navicon:''},            
                ],
            },
            {              
              title:'Comply',
              navLink:'comply',
              navicon:'icon-map',
              icon:true,
              toggle:true,
              sublink:[
                  {subtitle:'Shipments', navLink:'#', icon:false, navicon:''},            
                  {subtitle:'Due Diligence', navLink:'#', icon:false, navicon:''},            
                  {subtitle:'Supply Chain Mapping', navLink:'#', icon:false, navicon:''},            
                  {subtitle:'Supplier Compliance', navLink:'#', icon:false, navicon:''},            
                  {subtitle:'Product Compliance', navLink:'#', icon:false, navicon:''},            
                ],
            },
            {              
              title:'Certify',
              navLink:'certify',
              navicon:'icon-settings1',
              icon:true,
              toggle:true,
              sublink:[
                  {subtitle:'Applications', navLink:'#', icon:false, navicon:''},            
                  {subtitle:'Certificates', navLink:'#', icon:false, navicon:''},                       
                ],
            },
            {              
              title:'Analyze',
              navLink:'analyze',
              navicon:'icon-settings1',
              icon:true,
              toggle:false,
              sublink:[
                {subtitle:'', navLink:'#', icon:false, navicon:''},                                 
              ],
            },
            {
              title:'Plan',
              navLink:'#',
              navicon:'icon-book-open',
              icon:true,
              toggle:true,
              sublink:[
                {subtitle:'Goals', navLink:'goals', icon:false, navicon:''},                                 
              ],
            },
            {
              title:'Act',
              navLink:'act',
              navicon:'icon-sunset',
              icon:true,
              toggle:true,
              sublink:[
                {subtitle:'Projects', navLink:'projects', icon:false, navicon:''},                                 
              ],
            },
            {
              title:'Share',
              navLink:'#',
              navicon:'icon-share-2',
              icon:true,
              toggle:true,
              sublink:[
                {subtitle:'Share', navLink:'share', icon:false, navicon:''},                                 
              ],
            },
            {
              title:'Notifications',
              navLink:'notifications',
              navicon:'icon-bell',
              icon:true,
              toggle:false,
              sublink:[
                {subtitle:'', navLink:'', icon:false, navicon:''},                                 
              ],
            },
            {
              title:'Manage',
              navLink:'#',
              navicon:'icon-users',
              icon:true,
              toggle:true,
              sublink:[
                {subtitle:'Company', navLink:'company', icon:false, navicon:''},                                 
                {subtitle:'Facility', navLink:'facility', icon:false, navicon:''},                                 
                {subtitle:'Partner', navLink:'partner', icon:false, navicon:''},                                 
                {subtitle:'Users', navLink:'users', icon:false, navicon:''},                                 
                {subtitle:'Roles & Privileges', navLink:'roles-privileges', icon:false, navicon:''},                                 
                {subtitle:'Fuel', navLink:'fuel', icon:false, navicon:''},                                 
                {subtitle:'Transport', navLink:'transport', icon:false, navicon:''},                                 
                {subtitle:'Purchased Electricity', navLink:'purchased-electricity', icon:false, navicon:''},                                 
                {subtitle:'Steam and Heat', navLink:'steam-heat', icon:false, navicon:''},                                 
                {subtitle:'Refrigerants', navLink:'refrigerants', icon:false, navicon:''},                                 
                {subtitle:'Financed Emissions', navLink:'financed-emissions', icon:false, navicon:''},                                 
              ],
            },
          ],
        }
    },
    methods:{
      activeToggle(id){
        this.activeId = id;
      }
    }
}
</script>

<style>

</style>