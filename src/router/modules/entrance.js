const hello = {
    path: '/helloworld',
    name: 'helloworld',
    component: () => import('@/views/HelloWorld.vue'),
    redirect: '/helloworld'
}
export default hello;