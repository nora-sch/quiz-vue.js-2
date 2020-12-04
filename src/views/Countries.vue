<template>
  <div class="home">

  <!-- <Countries msg="Countries"/> -->
    <h1>Countries list</h1>
    <h3>with Datatables</h3>
  </div>
</template>

<script>
// @ is an alias to /src

//import Datatable from 'vue2-datatable-component'
//import mockData from '../_mockData'

export default {
  name: 'Countries',
  //components: {
  //  Datatable
  //},
 /* data: () => ({
    columns: [
      {title: 'User ID', field: 'uid', sortable: true},
      {title: 'Username', field: 'name'},
      {title: 'Age', field: 'age', sortable: true},
      {title: 'Email', field: 'email'},
      {title: 'Country', field: 'country'}
    ],
    data: [],
    total: 0,
    query: {}
  }),
  watch: {
    query: {
       handler(query) {
        mockData(query).then(({rows, total}) => {
            this.data = rows
            this.total = total
          })
      },
      deep: true
    }
  }*/
}

</script>


<style>
body {
  background-color: #2c3e50 !important;
  color: white;
}
</style>