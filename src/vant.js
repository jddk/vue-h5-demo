import Vue from 'vue'
import { Button } from 'vant'
import { Cell, CellGroup } from 'vant';
import { NavBar } from 'vant';
import { AddressEdit } from 'vant';
import { Area } from 'vant';
import { Toast } from 'vant'


Vue.use(Area);
Vue.use(Toast);
Vue.use(Button);
Vue.use(Cell).use(CellGroup);
Vue.use(NavBar);
Vue.use(AddressEdit);