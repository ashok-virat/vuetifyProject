<template>
<v-app>
 <v-container app fluid>
 <v-row>
    <v-col cols="12"  class="ma-0 pa-0">
    <v-toolbar dense flat>
      <v-toolbar-title>
                     <v-icon class="mb-1">mdi-domain</v-icon>  Assets Overview
      </v-toolbar-title>
              <v-spacer></v-spacer>
                   <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
             <v-btn icon class="ma-1">
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        
        <v-btn
       color="blue-grey white--text ma-1"
      fab
       x-small
       :elevation="0"
    >
    JR
    </v-btn>
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
        <h4 class="font-weight-bold idx">IDX</h4>
      </v-toolbar>
    </v-col>
        <v-col cols="12"  class="ma-0 pa-0 mt-2">
     <v-card
    color="grey lighten-4"
    flat
    tile
    :elevation="0"
  >
    <v-toolbar dense>
      <v-toolbar-title>
           <v-tabs   v-model="tab"
  >
       <v-tabs-slider color="blue"></v-tabs-slider>
    <v-tab href="#tab-1">All</v-tab>
    <v-tab>Extractor</v-tab>
    <v-tab>Classifier</v-tab>
      <v-tab>Workflow</v-tab>
           </v-tabs>
      </v-toolbar-title>

      <v-spacer></v-spacer>
  
         <v-btn
        class="blue--text text-capitalize"
        small
       depressed
       plain
      >
        <v-icon
          dark
          left
        >
          mdi-minus-circle
        </v-icon>Market Place
      </v-btn>

         <v-btn
        class="mr-3 blue--text text-capitalize"
        small
        plain
        :elevation='0'
        :ripple="false"
      >
        <v-icon
          dark
          left
        >
          mdi-minus-circle
        </v-icon>Saved Connection
      </v-btn>

  <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
          <v-btn  v-bind="attrs"
          v-on="on" color='blue white--text' small>Create New</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Assets</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col cols="12">
             <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <v-form  ref="form"    
     v-model="valid"
    lazy-validation @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required|max:15"
      >
        <v-text-field
          v-model="name"
          :counter="15"
          :error-messages="errors"
          label="Asset Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="description"
         rules="required|max:50"
      >
        <v-text-field
          v-model="description"
          :error-messages="errors"
           :counter="50"
          label="Description"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="version"
        rules="required|max:2"
      >
        <v-text-field
          v-model="version"
          :error-messages="errors"
          label="Version"
          required
          type="number"
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="select"
        rules="required"
      >
        <v-select
          v-model="status"
          :items="items"
          :error-messages="errors"
          label="Status"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <v-btn
        class="mr-4 mt-2"
        color="success"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn   color="error"  @click="clear" class="mt-2">
        close
      </v-btn>
    </v-form>
  </validation-observer>
</v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    </v-toolbar>
  </v-card>
  
   </v-col>
   </v-row> 
</v-container>

<v-container fluid>
  <v-row>
    <v-col cols="12">
       <v-tabs-items v-model="tab">
 <v-tab-item :key="1" value="tab-1" >
   <v-col cols="12"  class="ma-0 pa-0">
    <v-toolbar dense flat>
      <v-toolbar-title>
          <h5>My assets    <v-btn
      class="mx-2 pa-0"
      fab
       :elevation="0"
      small
      depressed
      width="20px"
      height="20px"
    >
    {{desserts.length}}
    </v-btn></h5>
      </v-toolbar-title>
              <v-spacer></v-spacer>
        <v-btn icon class="mr-2">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    <v-btn
      outlined
      small
      depressed
      class="text-capitalize fb-btn grey--text"
    >
      <v-icon left>
        mdi-android
      </v-icon>
      Filter
    </v-btn>
      </v-toolbar>
    </v-col>
         <v-col cols="12">
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
            <th></th>
          <th>
            Name
          </th>
          <th >
            Description
          </th>
               <th >
            Status
          </th>
               <th >
            Version
          </th>
               <th >
            Modified At
          </th>
               <th >
            Modified by
          </th>
           <th >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in desserts"
          :key="index"
        >
        <td>
         <v-btn
       color="black--text ma-1"
      fab
       x-small
       :elevation="0"
    >
     <v-icon
      color="dark darken-2"
    >
      mdi-domain
    </v-icon>
    </v-btn>
</td>
          <td >{{ item.name }}</td>
          <td>{{ item.description }}</td>
            <td>{{ item.status }}</td>
              <td>{{ item.version }}</td>
                <td>{{ item.modifiedAt }}</td>
                  <td>{{ item.modifiedby }}</td>
                  <td>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
           <v-btn icon  
          v-bind="attrs"
          v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      </template>
      <v-list>
        <v-list-item
        style="cursor:pointer"
        @click="editItem(index,item)"
        >
          <v-list-item-title>
              <v-btn
              plain
      style="backgroundColor:white"
    >
      <v-icon left>
        mdi-pencil
      </v-icon>
      Edit
    </v-btn>
          </v-list-item-title>
        </v-list-item>
             <v-list-item
        style="cursor:pointer"
        >
          <v-list-item-title @click="deleteItem(item)">
                <v-btn
              plain
      style="backgroundColor:white"
    >
      <v-icon left>
        mdi-cancel
      </v-icon>
      Delete
    </v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
                  </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-col>
 <v-container app fluid class="mt-1">
    <v-toolbar flat>
      <v-toolbar-title>
          <h6>Assets to explore</h6>
      </v-toolbar-title>
      </v-toolbar>
        <v-layout row wrap>
          <v-flex xs6 sm4 md3 xl2 class="lg5-custom ma-2" style="backgroundColor:#fafafa">
              <v-row class="mt-1">
            <v-col md="4">    <v-btn
        outlined
        rounded
        text
        x-small
        class="ml-1"
        style="fontSize:7px"
      >
        Classifier
      </v-btn></v-col>
                  <v-col md="4"><v-list-item-avatar
        tile
        size="60"
         color="white"
          style="height:80px"
          class="ml-2"
      >
      <p class='form-text'>ashok</p>
      <p class='form-text'>ashok</p>
      <p class='form-text'>ashok</p></v-list-item-avatar></v-col>
                        <v-col md="4">
                             <v-btn
        outlined
        rounded
        text
        x-small
        style="fontSize:7px"
        class="ml-3"
      >
        V1.0
      </v-btn>
                        </v-col>
          </v-row>
            <div class="text-center"  style="fontSize:10px;fontWeight:bold">ABC Classifier2</div>
      <p class="text-center para-text">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
          </v-flex>
                <v-flex xs6 sm4 md3 xl2 class="lg5-custom ma-2" style="backgroundColor:#fafafa">
              <v-row class="mt-1">
            <v-col md="4">    <v-btn
        outlined
        rounded
        text
        x-small
        class="ml-1"
        style="fontSize:7px"
      >
        Classifier
      </v-btn></v-col>
                  <v-col md="4"><v-list-item-avatar
        tile
        size="60"
         color="white"
          style="height:80px"
          class="ml-2"
      >
      <p class='form-text'>ashok</p>
      <p class='form-text'>ashok</p>
      <p class='form-text'>ashok</p></v-list-item-avatar></v-col>
                        <v-col md="4">
                             <v-btn
        outlined
        rounded
        text
        x-small
        style="fontSize:7px"
        class="ml-3"
      >
        V1.0
      </v-btn>
                        </v-col>
          </v-row>
            <div class="text-center"  style="fontSize:10px;fontWeight:bold">ABC Classifier2</div>
      <p class="text-center para-text">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
          </v-flex>
                 <v-flex xs6 sm4 md3 xl2 class="lg5-custom ma-2" style="backgroundColor:#fafafa">
              <v-row class="mt-1">
            <v-col md="4">    <v-btn
        outlined
        rounded
        text
        x-small
        class="ml-1"
        style="fontSize:7px"
      >
        Classifier
      </v-btn></v-col>
                  <v-col md="4"><v-list-item-avatar
        tile
        size="60"
         color="white"
          style="height:80px"
          class="ml-2"
      >
      <p class='form-text'>ashok</p>
      <p class='form-text'>ashok</p>
      <p class='form-text'>ashok</p></v-list-item-avatar></v-col>
                        <v-col md="4">
                             <v-btn
        outlined
        rounded
        text
        x-small
        style="fontSize:7px"
        class="ml-3"
      >
        V1.0
      </v-btn>
                        </v-col>
          </v-row>
            <div class="text-center"  style="fontSize:10px;fontWeight:bold">ABC Classifier2</div>
      <p class="text-center para-text">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
          </v-flex>
                 <v-flex xs6 sm4 md3 xl2 class="lg5-custom ma-2" style="backgroundColor:#fafafa">
    
            <div class="text-center blue--text"  style="fontSize:10px;fontWeight:bold;marginTop:80px">Explore more in marketplace</div>
          </v-flex>
 </v-layout>
  </v-container>
      </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</v-container>
</v-app>
</template>




<script>
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

   setInteractionMode('eager')

   extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })
  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })
  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })
    extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })
  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

export default {
  name: 'App',
      components: {
      ValidationProvider,
      ValidationObserver,
    },
 data () {
      return {
        valid: true,
      name: '',
      description: '',
      status: '',
      version: '',
      select: null,
      edit:false,
      editableDataIndex: -1,
      dropdownItems: [
        { title: 'Delete' },
          { title: 'Edit' },
      ],
      items: [
        'Training Completed',
        'Published'
      ],
      checkbox: null,
         dialog: false,
        search: '',
           tab: null,
        text: <template><h1>gi</h1></template>,
         messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify!',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'mdi-account-multiple',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
        }
      ],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            description : 'Lorem Ipsum is simply dummy text of the printing',
            status: 'training completed',
            version: 10 ,
            modifiedAt: '04/12/2222, 3:00 PM',
            modifiedby: 'ashok',
          },
        ],
      }
    },
        methods: {
          deleteItem: function(index) {
            this.desserts.splice(index,1)
          },
          editItem : function(index,data) {
            this.editableDataIndex = index
            this.edit = true
            this.name = data.name
            this.description = data.description
            this.status = data.status
            this.version = data.version
            this.dialog = true
          },
      submit () {
        this.$refs.observer.validate()
        console.log(this.name,this.description,this.status,this.version)
        let newAsset= {
          name: this.name,
          description: this.description,
          status: this.status,
          version: this.version,
            modifiedAt: '04/12/2222, 3:07 PM',
            modifiedby: 'ashok',
        }
        if(!this.edit) {
        this.desserts.push(newAsset);
        } else {
          this.desserts.splice(this.editableDataIndex,1,newAsset)
        }
        this.$refs.form.reset()
          this.$refs.observer.reset()
        this.dialog = false
        this.edit = false
        this.editableDataIndex = -1
      },
      clear () {
        this.$refs.form.reset()
        this.$refs.observer.reset()
        this.dialog = false
      },
    },
};
</script>

<style scoped>
.idx {
   letter-spacing: 2px;
   font-style: bold;
   font-weight: bold;
}
.para-text {
  font-size: 10px;
}
.form-text {
 font-size: 5px;
}
@media (min-width: 1264px) and (max-width: 1903px) {
    .flex.lg5-custom {
        width: 18%;
        max-width: 18%;
        flex-basis: 20%;
    }
}
</style>