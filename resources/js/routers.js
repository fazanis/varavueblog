export const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('./components/Home')
    },
    {
        path: '/category',
        name: 'category',
        component: ()=>import('./components/category/Category')
    }
// { path: '/bar', component: Bar }
]


