import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://api.leyouv.com/api/v1'  

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/shop/discoverlist');
const getAdList=(params)=>wxRequest(params,apiMall+'/shop/adlist') 
//查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiMall + '/shop/detail');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/usercenter/getuserinfo');
const messageInfo = (params) => wxRequest(params, apiMall + '/usercenter/messageInfo');

const getUserAddress = (params) => wxRequest(params, apiMall + '/usercenter/address/list');
const getAddressById = (params) => wxRequest(params, apiMall + '/usercenter/address/info');
const addAddress = (params) => wxRequest(params, apiMall + '/usercenter/add/address');
const updateAddress = (params) => wxRequest(params, apiMall + '/usercenter/update/address');
const hostProdctList = (params) => wxRequest(params, apiMall + '/shop/host/list');
//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/usercenter/jscode2session"); 
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiMall + '/usercenter/userbrowse/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/keywords/list');
//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/keywords/add'); 
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/keywords/clear');


module.exports = {
  getHomeDisvocerList,
  getAdList,
  goodsDetail,
  getUserInfo,
  messageInfo,
  getUserAddress,
  getAddressById,
  addAddress,
  updateAddress,
  hostProdctList,
  wxJsCode2Session,
  addBrowser,
  searchKeywordList,
  addSearchKeyword,
  clearSearchKeyword
}
// const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

// //微信的jscode换取sessionKey
// const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
// const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

// //商品接口---begin
// //首页发现商品接口
// const hostGoodsList = (params) => wxRequest(params, apiMall + '/api/home/hostGoodsList');
// const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/api/v1/law/mall/discoverList');
// //查询商品列表
// const getGoodsList = (params) => wxRequest(params, apiMall + '/api/mall/searchGoodsList');

// //查询商品详情信息
// const goodsDetail = (params) => wxRequest(params, apiMall + '/api/mall/goods');
// //商品加入购物车
// const addCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/add');
// //用户的购物车商品列表
// const cartList = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/list');
// //购物车的商品选中状态
// const cartCheck = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/check');
// //购物车的商品选中状态(全选)
// const cartCheckAll = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/checkAll');
// //购物车的商品删除
// const cartDel = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/delete');
// //购物车的商品数量更新
// const cartUpdateNum = (params) => wxRequest(params, apiMall + '/api/mall/goodsCart/updateNum');
// //直接购买商品
// const preOrder = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/commitData');

// //支付前生成订单
// const saveByCart = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/saveByCart');

// //支付统一下单
// const toPay = (params) => wxRequest(params, apiMall + '/wepay/toPay'); 

// //商品接口---end

// //用户相关信息--begin
// //用户的当天签到信息
// const userSginInfo = (params) => wxRequest(params, apiMall + '/api/userSign/signInfo');
// const doSign = (params) => wxRequest(params, apiMall + '/api/userSign/doSign');
// //获取最近七天签到情况
// const getSignDate = (params) => wxRequest(params, apiMall + '/api/userSign/getSignDate');

// //用户积分信息
// const pointInfo = (params) => wxRequest(params, apiMall + '/api/userPoint/pointInfo');

// //用户足迹信息
// const browseInfo = (params) => wxRequest(params, apiMall + '/api/userBrowse/browseInfo');
// //添加用户足迹
// const addBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/add');
// //添加用户足迹
// const delUserBrowser = (params) => wxRequest(params, apiMall + '/api/userBrowse/delete');
 

// //用户消息
// const messageInfo = (params) => wxRequest(params, apiMall + '/api/systemMessage/messageInfo');

// //用户手机绑定
// const registerUser = (params) => wxRequest(params, apiMall + '/api/userCenter/register');
// //发送短信
// const sendRandCode = (params) => wxRequest(params, apiMall + '/api/sms/send');

// //用户是否绑定手机号
// const getUserInfo = (params) => wxRequest(params, apiMall + '/api/userCenter/getUserInfo');

// //用户收货地址
// const getUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/list');

// //保存用户收货地址
// const saveAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/saveOrUpdate');

// //用户收货地址根据id查询
// const receiverInfoById = (params) => wxRequest(params, apiMall + '/api/receiverInfo/receiverInfoById');

// //根据Id删除收货地址
// const delUserAddress = (params) => wxRequest(params, apiMall + '/api/receiverInfo/operation');

// //查询关键字保存
// const addSearchKeyword = (params) => wxRequest(params, apiMall + '/api/searchkeyword/add');
// //查询关键字列表
// const searchKeywordList = (params) => wxRequest(params, apiMall + '/api/searchkeyword/list');

// //查询我的订单
// const getMyOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderList');

// //查询我的订单数量
// const getMyOrderSize = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getMyOrderSize');

// //根据订单号查询详情
// const getOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getOrderDetail');

// //根据订单号查询详情
// const getPayOrderDetail = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/getPayOrderDetail');

// //根据订单号查询详情
// const editOrderInfo = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/opt');

// //根据订单号查询物流
// const orderExpressInfo = (params) => wxRequest(params, apiMall + '/api/orderExpress/orderExpressInfo');

// //查询用户的已订购产品
// const goodsUserOrderList = (params) => wxRequest(params, apiMall + '/api/mall/goodsOrder/goodsUserOrderList');

// //用户相关信息--end

// //商品分类--begin
// //一级分类
// const rootCtegoryList = (params) => wxRequest(params, apiMall + '/api/mall/rootCtegoryList');
// //二级三级分类
// const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/api/mall/childGoodsCatetoryList');
// //商品分类--end


// module.exports = {
//   hostGoodsList,
//   getDiscoverList, getHomeDisvocerList,
//   getGoodsList,
//   goodsDetail,
//   wxJsCode2Session,
//   user2session,
//   userSginInfo,
//   doSign,
//   addCart, cartList, cartCheck, cartCheckAll, cartDel, cartUpdateNum,
//   preOrder,refundApply,
//   pointInfo,
//   browseInfo,addBrowser,delUserBrowser,
//   messageInfo,
//   registerUser,sendRandCode,
//   getUserInfo,
//   getUserAddress,
//   saveAddress,
//   receiverInfoById,
//   getUserAddress,
//   addSearchKeyword, searchKeywordList, clearSearchKeyword,
//   getMyOrderList, saveByCart,toPay,
//   rootCtegoryList, childGoodsCatetoryList,
//   getOrderInfo,
//   editOrderInfo, goodsUserOrderList,
//   orderExpressInfo,
//   delUserAddress, 
//   getMyOrderSize,getPayOrderDetail,
//   getAdList,
//   getSignDate
// }
