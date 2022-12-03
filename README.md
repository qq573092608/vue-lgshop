<<<<<<< Updated upstream
adasd# vue-lgshop
=======
# vue-lgshop


/*
 * 常用宏
 */
#ifdef debug
#define DEBUG_LOG(fmt, ...) NSLog((@"*****%@,%@, [Line %d]: " fmt), [self class],NSStringFromSelector(_cmd),__LINE__, ##__VA_ARGS__);
#else
#define DEBUG_LOG(...)
#endif

#define UIColorFromRGB(rgbValue) [UIColor colorWithRed:((float)((rgbValue & 0xFF0000) >> 16))/255.0 green:((float)((rgbValue & 0xFF00) >> 8))/255.0 blue:((float)(rgbValue & 0xFF))/255.0 alpha:1.0]
#define NotNilAndNull(_ref)  (((_ref) != nil) && (![(_ref) isEqual:[NSNull null]]))
#define NotNil(_ref)  (_ref) != nil
#define NotNull(_ref)  ![_ref isEqual:[NSNull null]]
#define WEAK_SELF(weakeSelf) __weak typeof(self) weakeSelf = self
#define SCREEN_WIDTH  [UIScreen mainScreen].bounds.size.width
#define SCREEN_HEIGHT [UIScreen mainScreen].bounds.size.height
#define STATUSBAR_HEIGHT [[UIApplication sharedApplication] statusBarFrame].size.height
#define NAVIGATIONBAR_HIGHT self.navigationController.navigationBar.frame.size.height
#define isNSDictionary(json) [json isKindOfClass:[NSDictionary class]]
#define isNSString(string) [string isKindOfClass:[NSString class]]
#define get_Value_for_key_from_obj(obj,key) [obj objectForKey:key]

#define invoice_file_paths [[[NSFileManager defaultManager] URLForDirectory:NSDocumentDirectory inDomain:NSUserDomainMask appropriateForURL:nil create:NO error:nil] URLByAppendingPathComponent:@"invoicesPath"]
#define localizableString(string) NSLocalizedString(string, nil)

#define FONT(s)       [UIFont systemFontOfSize:s]
#define screen_Width [UIScreen mainScreen].bounds.size.width
#define screen_Height [UIScreen mainScreen].bounds.size.height
//#define BackgroundColor [UIColor colorWithRed:240/255.0f green:240/255.0f blue:244/255.0f alpha:1]
#define selectColor    [UIColor orangeColor]
#define Appcolor  [UIColor colorWithRed:234/255.0 green:86/255.0 blue:69/255.0 alpha:1]

#define DISCOUNT_PRICE_FONT       [UIFont systemFontOfSize:15.0f]

/** 主色调，用于分类标题、价格、订单/售后状态 */
#define MainColor  [UIColor ColorWithHexString:@"#F45846"]
/** 下划线 */
#define UnderLineColor  [UIColor ColorWithHexString:@"#E0E0E0"]
/** 配送费 */
#define FreightColor  [UIColor ColorWithHexString:@"#FBCC08"]
/** 背景色 */
#define MainBackgroundColor  [UIColor ColorWithHexString:@"#F2F2F2"]

// 通知宏
/*  发通知  */
#define sendNotification(name,obj)  [[NSNotificationCenter defaultCenter] postNotificationName:name object:obj];
#define NSNotificationReceive_(yfm_SEL, yfm_name) \
[[NSNotificationCenter defaultCenter] addObserver:self selector:yfm_SEL name:yfm_name object:nil]
#define RemovoResiveMessage(name) [[NSNotificationCenter defaultCenter]removeObserver:self name:name object:nil];


/*
 * 接口
 */
#define CREATE_URL(url) [NSString stringWithFormat:@"%@%@",server_url,url]

#ifdef DEBUG
 static NSString *server_url = @"http://www.lgcasa.com/";
#else
static NSString *server_url = @"http://www.lgcasa.com/";
#endif

static NSString *successKey = @"stateCode";
static NSString *messageKey = @"message";
static NSString *dataKey = @"data";
static NSString *listKey = @"list";
static NSString *totalKey = @"total";
static NSString *pageKey = @"page";
static NSString *rowsKey = @"rows";
static NSString *merchantcode = @"ideastore";
static NSString *shoppingcar = @"shoppingcar";



//登录
static NSString *url_login = @"/user/login";
//登出
static NSString *url_logout = @"/user/logout";
//注册
static NSString *url_register = @"/user/register";
//忘记密码
static NSString *url_forget_password = @"/user/updatePwd";
//验证码
static NSString *url_send_auth_code = @"/user/verification";
//查询所有分类
static NSString *url_get_all_types = @"/classify/selectAll";
//解绑
static NSString *url_delete_bind = @"/user/unbindBusiness";
//绑定公司
static NSString *url_bind_merchant = @"/user/bindingBusiness";
//我的绑定列表
static NSString *url_bind_merchant_list = @"/user/bindingList";
//商品列表
static NSString *url_product_list = @"/products/seleByQuery";
//根据条码查商品
static NSString *url_search_product = @"/products/seleBygoods_code";
//添加/编辑收货地址
static NSString *url_create_address = @"/address/createOrUpdate";
//收货地址列表
static NSString *url_address_list = @"/address/list";
//删除地址列表//
static NSString *url_address_delete = @"/address/del";
//地址详情
static NSString *url_address_info = @"/address/info";
//反馈
static NSString *url_recommand = @"/feedback/create";
//订单列表
//static NSString *url_order_list = @"/order/seleByuser_id";
//离线版本驼峰兼容订单列表
static NSString *url_order_list = @"/order/orderLists";
//订单详情
//static NSString *url_order_detail= @"/order/seleByKey";
//离线版本驼峰兼容订单详情
static NSString *url_order_detail = @"/order/orderInfos";
//单个公司购物车列表
static NSString *url_company_shopping_car_list = @"/car/selectCarByuser_id";
//添加商品到购物车
static NSString *url_add_product_to_shopping_car = @"/car/insertCar";
//删除购物车中的商品
static NSString *url_delete_product = @"/car/deleCar_products";
//提交订单
static NSString *url_commit_order = @"/order/submitOrder";
//提交订单（本地化）
static NSString *url_commit_order_new = @"/order/submitOrders";
//上传图片
static NSString *url_upload_image = @"/upLoad/upLoadFile";
//修改个人信息
static NSString *url_update_userinfo = @"/user/updateUser";
//清空购物车
static NSString *url_clear_shopping_car = @"/car/clearCart";
//获取商家配送地区
static NSString *url_companyAPP = @"/companyAPP/selectByInvitationCode";
//获取大区、省、市镇
static NSString *url_district = @"/district/selectByPid";
//主页轮播图
static NSString *url_imageurls = @"/advertisingApp/selectByCompanyInvitationCode";
//轮播图广告链接
static NSString *url_advertising = @"/advertisingApp/selectByCompanyInvitationCode";
//static NSString *url_imageurls = @"/advertisingApp/CompanyInvitationCode";
//商家信息
static NSString *url_merchantinfo = @"/companyAPP/selectCompanyByInvitationCode";
//检测商品是否下架
static NSString *url_goods_shelves = @"/products/seleBygoodsCodes";
//检测是否有新版本
static NSString *url_version = @"/version/versionCheck";
//支付订单
/*
 * 支付订单
 * orderCode 订单编号
 * invitationCode 公司邀请码
 * paymentMethod 支付方式名称
 */
static NSString *url_updatePayState = @"/order/updatePayState";

/**
    流水id绑定给订单
 */
static NSString *url_updatePaymentSerialNumber = @"/order/updatePaymentSerialNumber";

/**
    用交易id轮询等待真实交易结果
 */
static NSString *url_getIpn = @"/companyAPP/getIpn";


//获取运费
static NSString *url_getCompanyFee = @"/companyAPP/getCompanyFee";
//提供个人微信
static NSString *url_providewechat = @"/user/updateUserCompanyWeChat";
//用户信息
static NSString *url_userinfo = @"/user/seleUserById";
//库存信息
static NSString *url_findGoodsInfo = @"/products/findGoodsInfo";
//绑定微信
static NSString *url_user_bindingWeChat = @"/user/bindingWeChat";
//解绑微信
static NSString *url_user_unbindWeChat = @"/user/unbindWeChat";
//微信登录补全资料
static NSString *url_user_updateUserPhone = @"/user/updateUserPhone";

#pragma mark 推销员接口
//我的公司
static NSString *url_saler_companys = @"/user/myServiceCompany";
//推销员确认订单
static NSString *url_saler_confirm_order = @"/order/confirm";
//打包数据
//static NSString *url_saler_package_data = @"/packageData/pack";
static NSString *url_saler_package_data = @"/packageData/packLocal";
//删除数据压缩包
static NSString *url_saler_delete_package = @"/packageData/deleteZipData";
//更新离线数据
static NSString *url_saler_updata_data = @"/packageData/packLocal";
//客户地址
static NSString *url_saler_user_address = @"/address/salesPersonUsersList";
//会员补全电话号码
static NSString *url_complete_info = @"/member/completionPhone";
//绑定会员
static NSString *url_binding_vip = @"/member/completionMember";
//我的会员列表
static NSString *url_vip_list = @"/member/myMembers";
//编辑客户地址
static NSString *url_saler_editor_address = @"/address/createOrUpdateOfsalesPerson";
//删除客户地址
static NSString *url_saler_delete_address = @"/address/delBysalesPerson";

/// 取消订单
static NSString *url_saler_order_cancel = @"/goodsOrder/orderCancel";

// 确认完成
static NSString *url_saler_confirm_order_cancel = @"/order/userConfirmOrder";

// 用户申请售后
static NSString *url_order_after_Sale = @"/order/afterSaleOrder";

// 获取退货单详情
static NSString *url_order_sellBackInfos = @"/order/sellBackInfos";

/*
 * 静态key
 */
static NSString *kLoginCookies = @"kLoginCookies";
static NSString *kUserName = @"kUserName";
static NSString *kPassword = @"kPassword";
static NSString *kphoneNumberLogin = @"kphoneNumberLogin";
static NSString *kAutoLogin = @"kAutoLogin";
static NSString *KInvitationCode = @"invitationCode";
static NSString *kIconPath = @"avatarpath";
static NSString *kMerchantLogoUrl = @"kMerchantLogoUrl";
static NSString *kIsSale = @"kIsSale";
static NSString *kNickName = @"nickname";
static NSString *kPhoneNumber = @"phoneNumber";
static NSString *kIsLogin = @"kIsLogin";
static NSString *kAvatarpath = @"avatarpath";
static NSString *Kopenid = @"Kopenid";
static NSString *WXAPPid = @"wx5ef1a529dc6887a8";
static NSString *WXAppSecret = @"85acad19e6274e8a0505b40aa6acca2b";
static NSString *kIsWeChatLogin = @"kIsWeChatLogin";
static NSString *KIsHidden = @"KIsHidden";  // (0:显示  1:隐藏 )
static NSString *kIsRows = @"kIsRows";    // (0:双排 1:单排)
static NSString *kPaymentType = @"kPaymentType";  // (1:默认的支付方式 2：微信支付方式)
static NSString *KHomeIsHidden = @"KHomeIsHidden";
static NSString *kHomeIsRows = @"kHomeIsRows";

/** 售后的联系方式 */
static NSString *kAfterSalesContactInformation = @"afterSalesContactInformation";

/*
 * 颜色值
 */
static int colorBlack = 0x000000;
static int colorTextBlack = 0x333333;
static int colorTextLight = 0x999999;
static int colorTextMiddleLight = 0x666666;
static int colorTextPlaceholder = 0xc2c2c2;
static int colorLoginNotEnable = 0xe97a8e;
//static int colorLoginNotEnable = 0xFF8C00;
//static int colorLoginEnable = 0xdb2134;
// static int colorLoginEnable = 0xea5645;
static int colorFontWhite = 0xf5f5f5;

/**
    服务器连接错误
 */
static NSString *LGConServiceErrCodeStr = @"-9999";

/**
    服务器连接未知错误
 */
static NSString *LGConServiceUnknowErrorStr = @"UnkownError";

/*
 * 通知名
 */
static NSString *kTableViewDidScrollNotification = @"kTableViewDidScrollNotification";
static NSString *kTableViewDidScrollNotificationKey = @"kTableViewDidScrollNotificationKey";
static NSString *kTableViewDidScrollCallbackNotification = @"kTableViewDidScrollCallbackNotification";
static NSString *kTableViewDidScrollCallbackNotificationKey = @"kTableViewDidScrollCallbackNotificationKey";
static NSString *kDeleteMerchantSuccessNotification = @"kDeleteMerchantSuccessNotification";
static NSString *kChangeMerchantNotification = @"kChangeMerchantNotification";
static NSString *kProductNotification = @"kProductNotification";
static NSString *kProductNotificationKey = @"kProductNotificationKey";
static NSString *kAddShoppingCarSuccess = @"kAddShoppingCarSuccess";
static NSString *kUploadImageSuccessNotification = @"kUploadImageSuccessNotification";
static NSString *kAddOrderSuccessNotification = @"kAddOrderSuccessNotification";

static NSString *kProductclassidNotification = @"kProductclassidNotification";
static NSString *kProductclassidNotificationKey = @"kProductclassidNotificationKey";

static NSString *kProductchildrenclassidNotification = @"kProductchildrenclassidNotification";
static NSString *kProductchildrenclassidNotificationKey = @"kProductchildrenclassidNotificationKey";

static NSString *kProductdetailNotification = @"kProductdetailNotification";
static NSString *kProductdetailNotificationKey = @"kProductdetailNotificationKey";

static NSString *kProductspecificationsNotification = @"kProductspecificationsNotification";
static NSString *kProductspecificationsNotificationKey = @"kProductspecificationsNotificationKey";

static NSString *kProductListProductCountChangeNotification = @"kProductListProductCountChangeNotification";
static NSString *kProductDetailProductCountChangeNotification = @"kProductDetailProductCountChangeNotification";
//监听滑动
static NSString *kProducthiddencellNotification = @"kProducthiddencellNotification";
static NSString *kProducthiddencellNotificationKey = @"kProducthiddencellNotificationKey";

static NSString *kProductscrollowNotification = @"kProductscrollowNotification";
static NSString *kProductscrollowNotificationKey = @"kProductscrollowNotificationKey";

//微信授权成功
static NSString *kWeChatSuccessNotification = @"kWeChatSuccessNotification";

//提示登录
static NSString *kPromptLoginNotification = @"kPromptLoginNotification";
static NSString *kPromptLoginNotificationKey = @"kPromptLoginNotificationKey";

//点击广告
static NSString *kClickontheadsNotification = @"kClickontheadsNotification";
static NSString *kClickontheadsNotificationKey = @"kClickontheadsNotificationKey";

//支付完成
static NSString *kPaymentcompletedNotification = @"kPaymentcompletedNotification";

//显示子分类按钮
static NSString *kProductisshowbuttonNotification = @"kProductisshowbuttonNotification";
static NSString *kProductisshowbuttonNotificationKey = @"kProductisshowbuttonNotificationKey";

static NSString *kShoppingCarProductCountChangeNotification = @"kShoppingCarProductCountChangeNotification";
static NSString *kShoppingCarDeleteProductNotification = @"kShoppingCarDeleteProductNotification";
static NSString *keyGoodsCode = @"goodsCode";
static NSString *keyGoodsCount = @"goodsCount";

static NSString *kShoppingCarClearNotification = @"kShoppingCarClearNotification";
static NSString *kCommitOrderNotification = @"kCommitOrderNotification";
static NSString *keyInvitationCode = @"keyInvitationCode";

#endif /* PrefixHeader_pch */


>>>>>>> Stashed changes
