/**
 * 请求地址：http://wthrcdn.etouch.cn/weather_mini
 * 请求方法：get
 * 请求参数：city
 * 响应内容：天气信息
 * 
 * 1.点击回车
 * 2.查询数据
 * 3.渲染数据
 */

 var app = new Vue({
     el:"#app",
     data:{
         city:"",
         forecast:[]
     },
     methods:{
         getWeather:function(){
             console.log("HELLO")
             var that = this
             axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + that.city).then
             (function(response){
                 console.log(response.data.data.forecast)
                 that.forecast = response.data.data.forecast
             }, function(err) {})
         }
     }
 })