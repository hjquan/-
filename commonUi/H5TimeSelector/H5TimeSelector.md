# 功能描述

该模块用于选择时间控制器，支持时间戳、yyyy/MM、yyyy/MMdd、yyyy/MM/dd hh:mm:ss等格式，选择器以传入的时间格式为条件显示年月日时分秒，UI可自定义。用例见 demo_win.html。

# 效果图

<img src="exampleimg/example1.jpg" width = "300"/>
<img src="exampleimg/example2.jpg" width = "300" align="right"/>

# 依赖的模块

无

# 快速使用


js 调用
```js
timeSelector.fnOpenSelector({
    title: '时间选择',                          //选填 |  '时间选择'    |  String         |  选择器标题文案
    sureText: '完成',                          //选填 |    '完成'      |  String        |   确定按钮文案
    isShowUnit: true,                         //选填 |     true      |  Boolean        |  是否显示中文单位名称
    itemShowCount: 5,                         //选填 |      5        |  Number         |  显示的行数
    itemHeight: 55,                           //选填 |      55       |  Number         |  行高度（单位px）
    date: 'new Date()'                          //选填 |   new Date    |  Date/String     |  默认选中的时间
                                              //                       new Date()、'1541224673842'    展示年月日时分秒
                                              //                       '2018/12'                      展示年月
                                              //                       '2018/12/12'                   展示年月日
                                              //                       '2018/12/12 12'                展示年月日时
                                              //                       '2018/12/12 12:12'             展示年月日时分
                                              //                       '2018/12/12 12:12:12'          展示年月日时分秒
}, function(ret){
    //ret.date                                //非必返     |          |  Date            |  如果点击确定则返回选中的时间，否则返回空

})
```

# 特别说明

选择器样式修改，见用例 demo_win.html。
