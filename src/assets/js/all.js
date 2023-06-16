
function ex() {
var option = {
    xAxis:{
        type:'category',
        data:xDataArr
    },
    yAxis:{
        type:'value'
    },
    series:[
        {
            type:'bar',
            data:yDataArr
        }
    ]
}
}

export {
    ex
}