//创建一个Vue实例
window.onload = function () {
    new Vue({
        el: "#root",
        data: {
            name: '周宇',
            text: '',
            age: 20,
            obj: {name: 'XXX'},
            lists: [
                {name: '手机', state: '0'},
                {name: '电脑', state: '0'},
                {name: '化妆品', state: '1'},
                {name: '包', state: '0'},
            ]
        },
        methods: {
            add: function (name) {
                if (name) {
                    this.lists.unshift({name: name, state: '0'});
                    /*添加最上面*/
                    this.text = '';
                }
            },
            del(index) {
                this.lists.splice(index, 1);
            }
        },
        filters: {
            stateFilter: function (type) {
                console.info('234')
                switch (type) {
                    case '0':
                        return "未采购";
                    case '1':
                        return "采购中";
                    case '2':
                        return "已采购";
                    default:
                        return '';
                }
            }
        }
    })
}
