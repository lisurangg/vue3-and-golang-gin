// import router from "@/router"
import axios from "axios";
import { useRoute } from "vue-router"

function getRouterData() {

    const router = useRoute();
	console.log('username:',router.query.username);

    var username = router.query.username
    //将数据赋值到 params
    var params = new URLSearchParams();
    params.append('username', username);
    // 向后端发送请求，返回各学年学分以及总和
    axios.post('http://localhost:9999/home', params)
    .then(function(response) {
        // 打印返回的json对象
        // console.log(response)
        // var data = response.data 这种方法也可以

        // 提取后端返回的每一个json参数
        console.log(response.data);
        var name = response.data['name'];
        var score1 = response.data.score1;
        var score2 = response.data.score2;
        var scoreAll = response.data.scoreAll;
        console.log(name, score1, score2, scoreAll)
    })


    .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
  }


export{
    getRouterData
}
