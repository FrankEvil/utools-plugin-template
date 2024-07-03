import {Router} from "vue-router";

export default {
    init: function (router: Router) {
        // @ts-ignore
        window.codeChanged = (code) => {
            if (code === 'setting') {
                router.replace('/setting')
            } else if (code === 'index') {
                router.replace('/')
            }
        }
    },
}