<template>
<v-app>
 <v-container app fluid>
 <v-row>
   <AppNav></AppNav>
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
      <v-container fluid>
  <v-row>
    <v-col cols="12">
       <v-tabs-items v-model="tab">
 <v-tab-item :key="1" value="tab-1" >
    <AppAssetsDetails :desserts='desserts' v-on:editItem='editItem' v-on:deleteItem='deleteItem'></AppAssetsDetails>
      </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</v-container>
   </v-col>
   </v-row> 
</v-container>
</v-app>
</template>

<script src='./intellectFunctions.js'>

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