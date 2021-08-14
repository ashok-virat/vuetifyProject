<template>
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
</template>

<script>
export default {
    name:'AppNav'
}
</script>