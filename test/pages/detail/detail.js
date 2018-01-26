// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //绑定radio
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //取值
    var width = e.detail.value.width;
    var u1 = e.detail.value.u1;
    var u2 = e.detail.value.u2;
    var u3 = e.detail.value.u3;
    var u4 = e.detail.value.u4;
    var if4 = e.detail.value.radio;
    var l4 = e.detail.value.l4;
    var u5 = e.detail.value.u5;
    var u6 = e.detail.value.u6;
    var lossRate = e.detail.value.lossRate;
    var freight = e.detail.value.freight;
    var packageFee = e.detail.value.packageFee;
    var makeFee = e.detail.value.makeFee;
    var installFee = e.detail.value.installFee;
    var rate = e.detail.value.rate;
    //验证数据
    if(width == "" || width == "0"){ 
      wx.showModal({
        title: '提示',
        content: '请填写宽度！'
      });
    } else if (u1 == "") {
      wx.showModal({
        title: '提示',
        content: '请填写油漆单价！'
      });
    }else if (u2 == "") {
      wx.showModal({
        title: '提示',
        content: '请填写钢角铁单价！'
      });
    }else if (u3 == "") {
      wx.showModal({
        title: '提示',
        content: '请填写锌钢支架单价！'
      });
    }else if (u4 == "") {
      wx.showModal({
        title: '提示',
        content: '请填写钢拉索单价！'
      });
    }else if (l4 == "") {
      wx.showModal({
        title: '提示',
        content: '请填写钢索数量！'
      });
    }else if (u5 == "") {
      wx.showModal({
        title: '提示',
        content: '请填写喷涂单价！'
      });
    }else if (u6 == "") {
      wx.showModal({
        title: '提示',
        content: '请填写其他配件单价！'
      });
    }else if (lossRate == "") {
      wx.showModal({
        title: '提示',
        content: '请填写损耗比重！'
      });
    }else if (freight == "") {
      wx.showModal({
        title: '提示',
        content: '请填写运费！'
      });
    } else if (packageFee == "") {
      wx.showModal({
        title: '提示',
        content: '请填写包装费！'
      });
    } else if (makeFee == "") {
      wx.showModal({
        title: '提示',
        content: '请填写制作费！'
      });
    } else if (installFee == "") {
      wx.showModal({
        title: '提示',
        content: '请填写安装费！'
      });
    }else if (rate == "") {
      wx.showModal({
        title: '提示',
        content: '请填写总单价调整比例！'
      });
    }
    else{
      u1 = parseInt(u1);
      width = parseInt(width);
      u2 = parseInt(u2);
      u3 = parseInt(u3);
      u4 = parseInt(u4);
      l4 = parseInt(l4);
      u5 = parseInt(u5);
      u6 = parseInt(u6);
      lossRate = parseInt(lossRate);
      freight = parseInt(freight);
      packageFee = parseInt(packageFee);
      makeFee = parseInt(makeFee);
      installFee = parseInt(installFee);
      var l5 = parseFloat((width * 0.6).toFixed(1));
      console.log("l5:"+ l5);
      rate = parseInt(rate);
      //初始化
      var materialRate = parseInt(1);
      //管理费
      var manageRate = parseFloat(0.05);
      //利润
      var profitRate = parseFloat(0.1);
      //tax
      var taxRate = parseFloat(0.11);
      //其他费用总计（总价二）
      var sum2 = parseInt(parseInt(freight + packageFee + makeFee + installFee) * width);
      console.log("sum2:" + sum2);
      //计算结果
      var result = getUnitPrice(width, u1, u2, u3, l4, u4, if4, l5, u5, u6, lossRate, sum2, materialRate, manageRate, profitRate, taxRate);
      var initPrice = parseFloat(result[6]);
      console.log("initPrice:"+initPrice);
      var actuallRate = parseInt(100 + rate);
      console.log("actuallRate=" + actuallRate);
      var rate_d = parseFloat(100 + rate - 0.3);
      console.log("rate_d=" + rate_d);
      var rate_u = parseFloat(100 + rate + 2);
      console.log("rate_u=" + rate_u);
      var tt1 = parseFloat((initPrice * rate_d).toFixed(2));
      console.log("tt1:" + tt1);
      var targetPrice_d = parseFloat((tt1 / 100).toFixed(2));
      console.log("targetPrice_d=" + targetPrice_d);
      var tt2 = parseFloat((initPrice * rate_u).toFixed(2));
      console.log("tt2:" + tt2);
      var targetPrice_u = parseFloat((tt2 / 100).toFixed(2));
      console.log("targetPrice_u=" + targetPrice_u);
      
      //从1.1开始算起
      materialRate = parseFloat((actuallRate / 100).toFixed(2));
      var target = new Array();
      while (materialRate <= 3) {
        target = getUnitPrice(width, u1, u2, u3, l4, u4, if4, l5, u5, u6, lossRate, sum2, materialRate, manageRate, profitRate, taxRate);
        if ((targetPrice_d < target[6]) && (target[6] < targetPrice_u)) {
          console.log("搞定！！！");
          break;
        }
        materialRate += 0.01;
      }
      var targetRate = (parseFloat(target[6] - initPrice) * 100 / initPrice).toFixed(2);
      //页面跳转
      wx.navigateTo({
        url: '../result/result?u1=' + target[0] + "&u2=" + target[1] + "&u3=" + target[2] + "&u4=" + target[3] + "&u5=" + target[4] + "&u6=" + target[5] + "&if4=" + if4 + "&l4=" + l4 + "&lossRate=" + lossRate + "&rate=" + targetRate + "&freight=" + freight + "&packageFee=" + packageFee + "&makeFee=" + makeFee + "&installFee=" + installFee + "&initValue=" + initPrice + "&targetValue=" + target[6] + "&width=" + width
      }) 
    }
  },

  formReset: function () {
    console.log('form发生了reset事件')
  }
})

// toFixed 修复
function toFixed(num, s) {
  var times = Math.pow(10, s)
  var des = num * times + 0.5
  des = parseInt(des, 10) / times
  return des + ''
}

function getUnitPrice(width, u1, u2, u3, l4, u4, if4, l5, u5, u6, lossRate, sum2, materialRate, manageRate, profitRate, taxRate) {
  var result = new Array();
  var u11 = Math.round(u1 * materialRate);
  //console.log("u11=" + u11);
  var u22 = Math.round(u2 * materialRate);
  //console.log("u22=" + u22);
  var u33 = Math.round(u3 * materialRate);
  //console.log("u33=" + u33);
  //console.log("if4=" + if4);
  var u44 = u4;
  if (if4 == "yes") {//如果钢索参与调价
    u44 = parseFloat((u4 * materialRate).toFixed(1));
  }
  //console.log("u44=" + u44);
  var u55 = Math.round(u5 * materialRate);
  //console.log("u55=" + u55);
  var u66 = Math.round(u6 * materialRate);
  //console.log("u66=" + u66);
  //材料费合计
  var t1 = parseFloat(((u11 + u22 + u33 + u66) * width).toFixed(2));
  //console.log("t1:" + t1);
  var t2 = parseFloat((u44 * l4).toFixed(2));
  //console.log("t2:" + t2);
  var t3 = parseFloat((u5 * l5).toFixed(2));
  //console.log("t3:" + t3);
  var materialCost = parseFloat(t1 + t2 + t3);
  //console.log("材料费合计：" + materialCost);
  //loss
  var loss = parseFloat((materialCost * lossRate/100).toFixed(2));
  //console.log("损耗：" + loss);
  var sum1 = parseFloat((materialCost + loss).toFixed(2));
  //console.log("合计一：" + sum1);
  var sum3 = parseFloat(toFixed(sum1 + sum2, 2));
  //console.log("合计三：" + sum3);
  var sum4 = parseFloat((sum3 * manageRate).toFixed(2));
  //console.log("合计四：" + sum4);
  var sum5 = parseFloat((sum3 * profitRate).toFixed(2));
  //console.log("合计五：" + sum5);
  var t4 = parseFloat(toFixed(sum3 + sum4 + sum5, 2));
  var sum6 = parseFloat((t4 * taxRate).toFixed(2));
  //console.log("合计六：" + sum6);
  var sum = parseFloat(toFixed((sum3 + sum4 + sum5 + sum6), 2));
  //console.log("合计：" + sum);
  var unitPrice = parseFloat((sum / width).toFixed(2));
  console.log("单价：" + unitPrice);
  result.push(u11);
  result.push(u22);
  result.push(u33);
  result.push(u44);
  result.push(u55);
  result.push(u66);
  result.push(unitPrice);
  return result;
}