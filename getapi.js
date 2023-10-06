<div id="app">
   <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh" v-if="loading == true"> 
      <div class="spinner-border" role="status">
       
            <span class="visually-hidden">Loading...</span> 
         
      </div>
   </div>
  <div class="row">
    <div class="col-4">
        <div class="card">
            <div class="card-header">
              Total
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ total }}</h5>
            </div>
        </div>
    </div>
    
    <div class="col-4">
         <div class="card">
            <div class="card-header">
              Selesai
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ selesai }}</h5>
            </div>
        </div>
      </div>
    
    <div class="col-4">
         <div class="card">
            <div class="card-header">
              Belum Selesai
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ belumSelesai }}</h5>
            </div>
        </div>
      </div>
  </div>  
  <br>
  <br>


  <table class="table table-striped table-bordered">
    <thead>
      <tr>
          <th>User</th>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
      </tr>
     
    </thead>
    <tbody>
      <tr v-for="todo in todos">
         <td>{{ todo.userId }}</td>
         <td>{{ todo.id }}</td>
         <td>{{ todo.title }}</td>
         <td v-if="todo.completed == false" style="color:red;"> {{ todo.completed }}</td>
        <td v-if="todo.completed == true" style="color:green;"> {{ todo.completed }}</td>
      </tr>
   
    
    </tbody>
  </table>
 

</div>


<script>
  
    let app = new Vue({
        el: '#app',
        data: {
            loading: true,
            todos: [],
        },
        mounted() {
            this.getTodos();
            
        },
       computed: {
            total: function() {
                return this.todos.length;
            },
            selesai : function() {
                return this.todos.filter(tod => tod.completed).length
            },
            belumSelesai : function() {
                return this.todos.filter(tod => !tod.completed).length
            },
           
    
       },
        methods: {
            getTodos: function() {
                let vm = this;
                axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
                    vm.todos = res.data;
                    vm.loading = false;
                })
            },
        },

    })

</script>
