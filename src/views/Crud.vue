<template>
    <div class="container">
        <div>
            <button variant="success" @click="$bvModal.show('addDataModal')">Add New</button>
            <b-modal id="addDataModal" hide-footer>
                <template #modal-title>
                 Add New data
                </template>
                <div class="d-block text-center">
                    <div class="div_Master">
                    <input class="form-control" type="text" disabled placeholder="Id" v-model="addform.Id">
                    <br>
                    <input class="form-control" type="text" placeholder="Name" v-model="addform.name">
                    <br>
                    <input class="form-control" type="email" placeholder="Email" v-model="addform.emailid">
                    <br>
                    <select class="form-control" v-model="addform.role">
                        <option value="Select">Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Member">Member</option>
                    </select>
                    <br>
                </div>
                <button type="button" class="btn btn-primary" v-on:click="btnSubmit()">{{ btnMode }} </button>
                </div>                
            </b-modal>
        <table class="table table-bordered">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Role</th>
                <th>Action</th>
            </tr>

            <tr v-for="(item, index) in fullData" :key="index">
                <td>{{ item.Id }}</td>
                <td>{{ item.Name }}</td>
                <td>{{ item.emailid }}</td>
                <td>{{ item.role }}</td>
                <td>
                    <div v-if="Editmode">
                        <a v-on:click="OnEdit(item.Id)" class="btn btn-primary">Edit</a>
                        <a v-on:click="OnDelete(item.Id)" class="btn btn-danger">Delete</a>
                    </div>
                    <div v-if="updatemode"><a href="#">update</a> <a href="#">Cancel</a> </div>
                </td>
            </tr>
        </table>
        <br />
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            addform:{
                Id: 1,
                name: '',
                emailid: '',
                role: 'Select',
            },
            Editmode: true,
            updatemode: false,
            btnMode: "Submit",
            Validate: 0,
            
            fullData: []
        }
    },
    methods: {
        btnSubmit(){
            if(this.addform.Id || this.addform.name || this.addform.emailid.length || this.addform.role.length){
                this.fullData.push({
                Id: this.addform.Id++,
                Name: this.addform.name,
                emailid: this.addform.emailid,
                role: this.addform.role
            })
            }            
            if (this.btnMode == "Update") {
                this.btnMode = "Submit";
            }
            this.addform.name = '';
            this.addform.emailid = '';
            this.addform.role = 'Select';
            this.$bvModal.hide('addDataModal')
        },
        OnEdit(d) {
            const fitdata = (this.fullData).filter(function (val) { return val.Id == d });
            this.addform.Id = fitdata[0].Id;
            this.addform.name = fitdata[0].Name;
            this.addform.emailid = fitdata[0].emailid;
            this.addform.role = fitdata[0].role;
            this.btnMode = "Update";
            this.fullData = (this.fullData).filter(function (val) {
                return val.Id != d
            });
            this.$bvModal.show('addDataModal')
        },

        OnDelete(d) {
            this.fullData = (this.fullData).filter(function (val) {
                return val.Id != d
            });
        }

    }
}
</script>
