<template>
<v-container app fluid>
     <v-col cols="12"  class="ma-0 pa-0">
    <v-toolbar dense flat>
      <v-toolbar-title>
          <h5>My assets<v-btn
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
        @click="$emit('editItem',index,item)"
        >
          <v-list-item-title>
              <v-btn
              plain
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
          <v-list-item-title @click="$emit('deleteItem',index)">
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
 <AssetsToExplore></AssetsToExplore>
</v-container>
</template>


<script>
import AssetsToExplore from './AssetsToExplore.vue'
export default {
    name: 'AppAssetsDetails',
    props: ['desserts'],
    components: {AssetsToExplore},
    data () {
        return {
            tab:null
        }
    }
}
</script>

<style scoped>
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