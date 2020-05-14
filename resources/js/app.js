/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// import ExampleComponent from "./components/ExampleComponent";
// import ExampleComponent2 from "./components/ExampleComponent2";

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.use(VueRouter)


import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })

  window.toast = toast


// const routes = [
//     { path: '/', component: ExampleComponent },
//     { path: '/foo', component: ExampleComponent2 }
//     // { path: '/bar', component: Bar }
// ]
import {routes} from './routers'
const router = new VueRouter({
    // mode: 'history',
    routes // short for `routes: routes`
})


const app = new Vue({
    router
}).$mount('#app')
