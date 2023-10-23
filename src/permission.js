/*
 * @Author: your name
 * @Date: 2021-11-18 17:34:50
 * @LastEditTime: 2022-02-18 14:49:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /ansu-business/src/permission.js
 */
import NProgress from "nprogress"
import "nprogress/nprogress.css"
import router from "./router"
const whitePath = [ '/login','/main']
router.beforeEach((to, from, next) => {
    NProgress.start()
    // const token = store.getters.getToken;
    // if(!token && !whitePath.includes(to.path)) {
	// 	next('/login');
	// } else {
	// 	next();
	// 	NProgress.done()
	// }
	next();
	NProgress.done();
})

router.afterEach(() => {
    NProgress.done()
})

export default router