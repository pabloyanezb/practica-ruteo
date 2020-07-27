import Vue from 'vue';
import VueRouter from 'vue-router';

import Inicio from '@/components/Inicio';  // asumiendo que hicimos este componente
import Ingreso from '@/components/Ingreso';
import Restaurante from '@/components/Restaurante';
import Categoria from '@/components/Categoria';
import PagNoEncontrada from '@/components/PagNoEncontrada';
import About from '@/components/About';
import Fotos from '@/components/Fotos';
import Reviews from '@/components/Reviews';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: Inicio,
            name: 'inicio'
        },
        {
            path: '/login',
            component: Ingreso,
            name: 'login'
        },
        {
            path: '/:nombre',
            component: Restaurante,
            children: [
                {
                    path: '/',
                    component: About,
                    name: 'about'
                },
                {
                    path: 'images',
                    component: Fotos,
                    name: 'images'
                },
                {
                    path: 'reviews',
                    component: Reviews,
                    name: 'reviwes'
                }
            ]
        },
        {
            path: '/category/:nombre',
            component: Categoria,
            name: 'category'
        },
        {
            path: '*',
            component: PagNoEncontrada,
            name: 'pagNoEncontrada'
        }
    ]
})