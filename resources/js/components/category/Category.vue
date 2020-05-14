<template>
    <div class="container-fluid">

        <!-- Page Heading -->
        <h1 class="h3 mb-2 text-gray-800">Категории</h1>

        <!-- DataTales Example -->
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Таблица категорий</h6>
                <button
                @click="showModal"
                class="btn btn-info float-right" style="color: #ffffff">Добавить <i class="fas fa-plus"></i></button>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="dataTable_length"><label>Show <select name="dataTable_length" aria-controls="dataTable" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-12 col-md-6"><div id="dataTable_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control form-control-sm" placeholder="" aria-controls="dataTable"></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style="width: 100%;">
                        <thead>
                        <tr role="row">
                            <th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 161px;">№</th>
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 247px;">Название</th>
                            <th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 116px;">действия</th>
                        </tr>
                        </thead>
                        <tfoot>
                        <tr>
                            <th rowspan="1" colspan="1">№</th>
                            <th rowspan="1" colspan="1">Название</th>
                            <th rowspan="1" colspan="1">Действие</th>
                        </tr>
                        </tfoot>
                        <tbody>
                        <tr role="row" class="odd"
                        v-for="category in categories">
                            <td class="sorting_1">{{ category.id }}</td>
                            <td>{{ category.name }}</td>
                            <td>
                            <a href="#" @click.prevent="edit(category)"><i class="fas fa-edit"></i></a>
                            /
                            <a href="#" @click.prevent="del(category.id)"><i class="fas fa-trash-alt" style="color: red"></i></a>

                            </td>
                        </tr>
                        </tbody>
                    </table></div></div>
                        <div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="dataTable_paginate"><ul class="pagination"><li class="paginate_button page-item previous disabled" id="dataTable_previous"><a href="#" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="4" tabindex="0" class="page-link">4</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="5" tabindex="0" class="page-link">5</a></li><li class="paginate_button page-item "><a href="#" aria-controls="dataTable" data-dt-idx="6" tabindex="0" class="page-link">6</a></li><li class="paginate_button page-item next" id="dataTable_next"><a href="#" aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="adcategory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" v-if="!isEdit" id="exampleModalLabel">Добавление категории</h5>
                <h5 class="modal-title" v-else id="exampleModalLabel">Редактирование категории</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit.prevent="isEdit ? editCategory() : saveCategory()" @keydown="form.onKeydown($event)">
            <div class="modal-body">
               <div class="form-group">
                    <label>Название</label>
                    <input v-model="form.name" type="text" name="name"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
                </div>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
               <button :disabled="form.busy" type="submit" class="btn btn-primary">Сохранить</button>
            </div>
            </form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                categories:'',
                isEdit: false,
                form: new Form({
                    id:'',
                name: '',
                })
            }
        },
        methods:{
            del:function(id){
                swal.fire({
                title: 'Вы уверены что хотите удалить категорию?',
                text: "Категория будет удалена безвозвратно",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Да удалить!'
                }).then((result) => {
                if (result.value) {
                        axios.delete('/category/'+id).then((response)=>{
                            this.getCategory();
                        });
                    swal.fire(
                    'Удалено!',
                    'Категория успешно удалена!',
                    'success'
                    )
                }
                })

            },
            edit:function(category){
                $('#adcategory').modal('show');
                this.isEdit = true;
                this.form.fill(category);
            },
            showModal:function(){
                this.form.reset();
                $('#adcategory').modal('show');
            },
            saveCategory:function(){
                this.form.post('/category').then((response)=>{
                    $('#adcategory').modal('hide');
                    this.getCategory();
                    toast.fire({
                        icon: 'success',
                        title: 'Категория успешно сохранена'
                    })
                });
            },
            editCategory:function(){
                this.form.put('/category/'+this.form.id).then((response)=>{
                    $('#adcategory').modal('hide');
                    this.getCategory();
                    toast.fire({
                        icon: 'success',
                        title: 'Категория успешно обновлена!'
                    })
                });
            },
            getCategory:function(){
                axios.get('/category').then((response)=>{
                    this.categories=response.data;
                });
            },
        },
        mounted() {
            this.getCategory();
        }
    }
</script>
