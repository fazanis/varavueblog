<template>
    <div class="col-xl-12 col-lg-7">
        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between"><h6
                class="m-0 font-weight-bold text-primary">Главная</h6>
                <div class="dropdown no-arrow"><a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                                                  aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
                    class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a>
                    <div aria-labelledby="dropdownMenuLink"
                         class="dropdown-menu dropdown-menu-right shadow animated--fade-in">
                        <div class="dropdown-header">Dropdown Header:</div>
                        <a href="#" class="dropdown-item">Action</a> <a href="#" class="dropdown-item">Another
                        action</a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">Something else here</a></div>
                </div>
            </div>
            <div class="card-body">
                <div class="chart-area">
                    <canvas id="myAreaChart"></canvas>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
