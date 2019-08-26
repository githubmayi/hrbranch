/**
 * Vue的辅助插件存放公共方法 2019-8-2
 */

 export default{
     install(Vue){
         Vue.prototype.$const = {
             login: 'login'
         }

         Vue.prototype.$plugins = {
             SetLocalStorage: (item,val) => {
                 debugger
                 window.localStorage[item] = val;
             },
             setSessionStorage: (item,val) => {
                 window.sessionStorage[item] = val;
             },
             GetStorage: (type,item) => {
                 let val;
                 if (type == 'localStorage' || type == 'local') {
                     val = localStorage.getItem(item);
                 }else{
                     val = sessionStorage.getItem(item);
                 }
                 return JSON.parse(val);
             },
             LoadEchartBars: (obj, document, options) => {
                 let barecharts = obj.$echarts.init(document);
                 barecharts.setOption({
                     legend: {},
                     tooltip: {},
                     dataset: {
                        dimensions: options.dataset,
                        source: options.source
                     },
                     xAxis: {type: 'category'},
                     yAxis: {},
                     series: [
                         {type: 'bar'},
                         {type: 'bar'},
                         {type: 'bar'},
                         {type: 'bar'}
                     ]
                 })
                 window.addEventListener("resize", function() {
                     barecharts.resize();
                 })
             }
         }
     }
 }