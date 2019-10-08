import App from '@/views/App';
import Login from '@/views/login';
import Error404 from '@/views/error404'

export default [
  { path: "/", name: "app", component: App },
  { path: "/login", name: "login", component: Login },
  { path: "/error404", name: "error404", component: Error404 },
]