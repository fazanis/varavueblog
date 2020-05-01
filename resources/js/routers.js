export const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('./components/Home')
    },
    {
        path: '/category',
        name: 'category',
        component: ()=>import('./components/ExampleComponent2')
    }
// { path: '/bar', component: Bar }
]


