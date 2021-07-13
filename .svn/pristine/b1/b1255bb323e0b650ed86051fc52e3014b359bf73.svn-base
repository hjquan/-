function randomWord(randomFlag, min, max) { //随机生成字符加数字
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}

function randomNumber(randomFlag, min, max) { //随机生成6位数字
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
        pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}
var ts = Math.round(new Date().getTime() / 1000);
var rCode = randomWord(false, 10, 15);
var authId = '6c5c7df6-77e6-424b-9c14-28b1684032b0';
var authSecret = '03e7c133453445e49451837337e3b968';
var sign = hex_sha1(rCode + '_' + ts + '_03e7c133453445e49451837337e3b968');
// 签名生成完毕

// 请求头参数

const header = {
    'Content-Type': 'application/json;charset=utf-8',
    'ts': ts,
    'authId': '6c5c7df6-77e6-424b-9c14-28b1684032b0',
    'rCode': rCode,
    'sign': sign
}

const fileHeader = {
    'ts': ts,
    'authId': '6c5c7df6-77e6-424b-9c14-28b1684032b0',
    'rCode': rCode,
    'sign': sign
}
// 关闭当前页面
function openWin() {

    api.closeWin();
}
//   /*验证用户名格式*/
function fnUsername(str) {
    var Regex = /^1\d{10}$/;
    if (Regex.test(str)) {
        return true;
    } else {
        return false;
    }
}
// 特殊字符验证
function checkName(val) {
    var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
        regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

    if (regEn.test(val) || regCn.test(val)) {
        return true;
    }
}

function pwdReg(val) { //验证长度
    var reg = /^[a-z0-9]{6,16}$/ig;
    if (reg.test(val)) {
        return true;
    } else {
        return false;
    }
}
// 登录接口地址
const HOST_DOMAIN = {
    'dev': 'http://119.23.146.206:8080/ZhuJi_new_project/', //开发
    'prod': 'http://119.23.153.66/', //生产
    'local': 'http://192.168.1.150:8080/ZhuJi_new_project/' //本地
}
// const ENV = 'local';
const ENV = 'dev';
const BASE_URL = HOST_DOMAIN[ENV];

const PAGE_NUMBER = 20; //分页展示数量个数

const loginURL = BASE_URL + 'app/user/appLogin'; //用户登录

const getEnterpriseLoginUserInfoURL = BASE_URL + 'appE/user/getEnterpriseLoginUserInfo'; //获取企业登录用户信息

const smsValidateURL = BASE_URL + 'app/user/smsValidate'; //发送验证码

const forgotPassWordEditURL = BASE_URL + 'app/user/forgotPassWordEdit' //忘记密码后修改密码

const appEditPassWordURL = BASE_URL + 'app/user/appEditPassWord' //登录后找回密码

const aboutZJURL = BASE_URL + 'app/about/getAboutZJ' //关于筑迹

const processPassURL = BASE_URL + 'appE/newFreeFlow/processPass' //流程通过

const processBackURL = BASE_URL + 'appE/newFreeFlow/processBack' //流程退回

const editStateURL = BASE_URL + 'appE/securityCheck/editState' //更新当前问题状态



// 企业

const enterpriseMenuURL = BASE_URL + 'appE/menu/enterpriseMenu' //企业菜单菜单权限

const enterpriseListsURL = BASE_URL + 'appE/user/getEnterpriseLists' //获取企业列表

const uplodeEnterpriseFileURL = BASE_URL + 'appE/file/uplodeEnterpriseFile' //企业图片上传

const getProjectListURL = BASE_URL + '/appE/enterpriseInfo/getProjectList' //企业下的项目列表

const showDictListURL = BASE_URL + 'app/dictionaries/showDictList' //获取字典

const getUserListURL = BASE_URL + '/appE/userManager/getUserList' //获取企业下的员工

const addSecurityCheckURL = BASE_URL + 'appE/securityCheck/addSecurityCheck'

const getMyCheckProjectArraysURL = BASE_URL + 'appE/securityCheck/getMyCheckProjectArrays' //我的检查项目列表

const getMyCheckArraysByProjectIdURL = BASE_URL + 'appE/securityCheck/getMyCheckArraysByProjectId' //通过项目ID获取我的检查列表

const getSecurityCheckDetailURL = BASE_URL + 'appE/securityCheck/getSecurityCheckDetail' //获取安全详情

const getHomePageTotalsURL = BASE_URL + 'appE/securityCheck/getHomePageTotals' //获取首页列表数量总数统计

const getMyProblemProjectArraysURL = BASE_URL + 'appE/securityCheck/getMyProblemProjectArrays' //获取与我相关的发现问题

const getMyNoCloseProblemArraysURL = BASE_URL + 'appE/securityCheck/getMyNoCloseProblemArrays' //获取与我相关的未封闭问题列表

const getCheckLedgerProjectArraysURL = BASE_URL + 'appE/securityCheck/getCheckLedgerProjectArrays' // 获取检查台账项目列表

const getCheckLedgerArraysByProjectIdURL = BASE_URL + 'appE/securityCheck/getCheckLedgerArraysByProjectId';

const getTaskHandleStepListsURL = BASE_URL + 'appE/securityCheck/getTaskHandleStepLists' //获取流程步骤列表

const getTodoMessageArraysURL = BASE_URL + 'appE/newTodoMessage/getTodoMessageArrays' // 获取待办列表（分页）

const getUnReadMessageArraysURL = BASE_URL + 'appE/newTodoMessage/getUnReadMessageArrays' //获取未读消息

const getAlreadyReadMessageArraysURL = BASE_URL + 'appE/newTodoMessage/getAlreadyReadMessageArrays' //获取已读消息列表

const getAllMessageNumTotalURL = BASE_URL + 'appE/newTodoMessage/getAllMessageNumTotal' //获取所有消息数量统计

const updateMessageReadTimeURL = BASE_URL + 'appE/newTodoMessage/updateMessageReadTime' //更新消息时间

const editCurrentEnterpriseURL = BASE_URL + 'appE/user/editCurrentEnterprise' //切换企业端

// 消息通知
const saveNoticeMessageURL = BASE_URL + 'appE/notice/saveNoticeMessage' //新增消息通知

const getPEUserInfoArraysURL = BASE_URL + 'appE/notice/getPEUserInfoArrays' //获取企业所在得所有项目列表对应的用户信息

const getNoticeArraysURL = BASE_URL + 'appE/notice/getNoticeArrays' //获取通知分页列表

const getNoticeMessageDetailURL = BASE_URL + 'appE/notice/getNoticeMessageDetail' //获取通知详情

const getReciveIsReadInfoURL = BASE_URL + 'appE/notice/getReciveIsReadInfo' //获取通知消息接收人已读未读信息列表

// 项目

const uplodeFile = BASE_URL + 'app/file/uplodeFile' //图片传入项目端

const allgetUserList = BASE_URL + 'app/user/getUserList' //根据传入参数获取不同人员信息

const projectGetProjectLists = BASE_URL + 'app/user/getProjectLists' //获取用户项目信息列表

const projectGetTodoMessageArrays = BASE_URL + 'app/newTodoMessage/getTodoMessageArrays' //获取待办列表

const projectMenu = BASE_URL + 'app/menu/projectMenu' //获取相应菜单权限

const getAllMessageNumTotal = BASE_URL + 'app/newTodoMessage/getAllMessageNumTotal' //获取消息条数

const getUnReadMessageArrays = BASE_URL + 'app/newTodoMessage/getUnReadMessageArrays' //获取未读列表

const getAlreadyReadMessageArrays = BASE_URL + 'app/newTodoMessage/getAlreadyReadMessageArrays' //获取已读消息列表哦

const getProjectUserList = BASE_URL + '/app/projectUserController/getProjectUserList' // 获取项目用户列表

const getSecurityCheckArrays = BASE_URL + 'app/securityCheck/getSecurityCheckArrays' //通过项目ID获取项目安全检查列表

const editRectificationInfo = BASE_URL + 'app/securityCheck/editRectificationInfo' //指派整改人并启动流程

const updateMessageReadTime = BASE_URL + 'app/newTodoMessage/updateMessageReadTime' //更新消息是时间

const editCurrentProject = BASE_URL + 'app/user/editCurrentProject' //切换项目列表

// 塔机？
const getTowerDeviceLists = BASE_URL + 'app/towerRelevant/getTowerDeviceLists' //获取塔机列表

const getTowerHistoryRunDataListsURL = BASE_URL + 'app/towerRelevant/getTowerHistoryRunDataLists' //获取塔机历史运行数据列表

const getTowerRunDataUrl = BASE_URL + 'app/towerRelevant/getTowerRunDataUrl' //获取塔机运行数据仿真动画URL地址

const getTowerAlarmType = BASE_URL + 'app/towerRelevant/getTowerAlarmType' //获取塔机预警/报警类型列表

const getTowerAlarmInfoLists = BASE_URL + 'app/towerRelevant/getTowerAlarmInfoLists' // 获取塔机预警/报警信息列表


//阿里云接口

const getAliyunOssAuthInfo = BASE_URL + 'app/oss/getAliyunOssAuthInfo' //获取阿里云OSS服务器授权相关信息

const getListObjectsByPrefix = BASE_URL + 'app/oss/getListObjectsByPrefix' //获取文件对象列表（含：文件夹和文件）

const getAllObjectsByPrefix = BASE_URL + 'app/oss/getAllObjectsByPrefix' //通过前缀获取所有文件

const getFileUrl = BASE_URL + 'app/oss/getFileUrl' //获取文件URL地址

const getCloudDiskInfo = BASE_URL + 'app/oss/getCloudDiskInfo'

// 施工日志撤销

const statisticalLog = BASE_URL + '/app/sgrz/statisticalLog' //施工日志统计

const listxq = BASE_URL + 'app/sgrz/listxq' //施工日志详情

const list = BASE_URL + 'app/sgrz/list' //app施工日志列表查询

const sgrzadd = BASE_URL + '/app/sgrz/sgrzadd' //app新增（编辑）施工日志

const sgrzCreatWord = BASE_URL + '/app/sgrz/sgrzCreatWord' //app施工日志生成文档

const delLog = BASE_URL + '/app/sgrz/delLog' //app施工日志撤销

const importContent = BASE_URL + '/app/sgrz/importContent' //app施工日志一键导入日总结

const projectButtonList = BASE_URL + 'app/role/projectButtonList' //获取项目按钮权限列表（新）

const getAreaByUser = BASE_URL + 'app/sgrz/getAreaByUser' //获取用户下的区域列表

// 评论
const plcommentList = BASE_URL + 'app/comment/commentList' //获取评论列表

const plgetCommentNum = BASE_URL + 'app/comment/getCommentNum' //获取评论总数

const plsaveComment = BASE_URL + 'app/comment/saveComment' //新增评论

const pldelComment = BASE_URL + 'app/comment/delComment' //删除评论

//安全日志
const securityLoglist = BASE_URL + 'app/SecurityLog/List' //安全日志列表

const getSecurityLog = BASE_URL + 'app/SecurityLog/getSecurityLog' //安全日志详情

const addSecurityLog = BASE_URL + 'app/SecurityLog/addSecurityLog' //安全日志新增

const SecurityLogNumber = BASE_URL + 'app/SecurityLog/statisticalLog' //安全日志统计

const SecurityLogWord = BASE_URL + 'app/SecurityLog/sgrzsecurityWord' //生成安全日志word文档


////质量问题

const qualityList = BASE_URL + 'app/quality/qualityList' //质量问题列表接口

const qualityDetails = BASE_URL + 'app/quality/qualityDetails' //质量详情列表

const getOperationRecordList = BASE_URL + 'app/quality/getOperationRecordList' //质量问题操作记录接口

const addsubmitQuality = BASE_URL + '/app/quality/submitQuality' //app新增质量问题

const freeFlowDeal = BASE_URL + 'app/quality/freeFlowDeal' //质量问题不进入流程的处理

const revokeFlow = BASE_URL + 'app/task/revokeFlow' //质量流程撤回接口

const revokeFreeFlow = BASE_URL + 'app/quality/revokeFreeFlow' //质量流程撤回接口不进入流程

const getQualityAreaCount = BASE_URL + 'app/countReport/getQualityAreaCount' //质量问题按发生部位统计

// 安全问题
const securityaddsubmit = BASE_URL + 'app/security/submitSecurity' //app新增安全问题

const securityList = BASE_URL + 'app/security/qualityList' //安全问题列表接口

const securityDetails = BASE_URL + 'app/security/qualityDetails' //安全问题详情接口

const securityOperationRecordList = BASE_URL + 'app/security/getOperationRecordList' //安全问题操作记录接口

const securityrevokeFreeFlow = BASE_URL + 'app/security/revokeFreeFlow' //安全流程撤回接口不进入流程

const securityfreeFlowDeal = BASE_URL + '/app/security/freeFlowDeal' //安全问题不进入流程的处理


// 质量统计
const getQualityCountLink = BASE_URL + 'app/countReport/getQualityCountLink' //APP获取报表链接地址接口

const getLaborList = BASE_URL + '/app/laborController/getLaborList' //获取劳务队列表

const backFlow = BASE_URL + 'app/task/backFlow' //流程处理退回上一步

const nextFlow = BASE_URL + 'app/task/nextFlow' //流程处理下一步
//任务模块

const giveMeTaskList = BASE_URL + '/app/taskManager/giveMeTaskList' // app查询派给我的任务列表

const arrangeTaskList = BASE_URL + '/app/taskManager/arrangeTaskList' // app查询我安排的任务列表

const submitTask = BASE_URL + '/app/taskManager/submitTask' // app第一次新增任务和任务详情

const taskDetails = BASE_URL + '/app/taskManager/taskDetails' // app任务详情

const getStateList = BASE_URL + '/app/taskManager/getStateList' // app获取最新状态列表

const taskgetOperationRecordList = BASE_URL + '/app/taskManager/getOperationRecordList' //

//公文

const documentList = BASE_URL + 'app/document/allList' // 获取公文列表

const documentgetDetail = BASE_URL + 'app/document/getDetail' // 获取公文详情

const documentinsertNew = BASE_URL + 'app/document/insertNew' // 新增公文

const documenteditById = BASE_URL + '/app/document/editById' // 修改公文

const documentgetAllType = BASE_URL + '/app/document/getAllType' // 获取公文type

//实测实量

const actualmeasurementList = BASE_URL + '/app/actualmeasurement/MeasureList' //实测实量

const actualmeasurementListDetails = BASE_URL + '/app/actualmeasurement/ListDetails' //app获取检测内容列表及以下的图纸、测量标准和详情数据等

const actualBuilontentdList = BASE_URL + '/app/actualmeasurement/BuilontentdList' //app获取测量构建和测量内容列表

const actualmeasurementnewMeasure = BASE_URL + '/app/actualmeasurement/newMeasure' //app新增测量数据(二)

const updateMeasure = BASE_URL + '/app/actualmeasurement/updateMeasure' //app修改测量数据（二）

const showAreaList = BASE_URL + '/app/areaRelevant/showAreaList' //查询区域列表

const getDrawingList = BASE_URL + '/app/actualmeasurement/getDrawingList' //图片列表

const delDrawing = BASE_URL + '/app/actualmeasurement/delDrawing' //删除图纸

const addDrawing = BASE_URL + '/app/actualmeasurement/addDrawing' //新增或修改

const getRecordList = BASE_URL + '/app/actualmeasurement/getRecordList' // 获取整改数据列表

const devareAera = BASE_URL + '/app/actualmeasurement/DevareAera' //app删除实测区 以及对应的检测内容 和数据

const deleteAera = BASE_URL + '/app/actualmeasurement/DeleteAera'

// 统计

const getAllFromComponent = BASE_URL + '/app/AppActualMeasurementArchive/getAllFromComponent' // 从构件开始归档（1），传入项目id

const getAllpercent = BASE_URL + '/app/AppActualMeasurementArchive/getAllpercent' //从区域开始归档(1)传入项目id

const getAllFromComponentToArea = BASE_URL + '/app/AppActualMeasurementArchive/getAllFromComponentToArea' // 从构件归档（2）：传入构件id和检测内容id

const getAllpercentToComponent = BASE_URL + '/app/AppActualMeasurementArchive/getAllpercentToComponent' // 从区域开始归档（2）：传入区域id,父区域id,子区域id

//实名认证
const selectElectronicSignature = BASE_URL + 'app/ElectronicSignature/selectElectronicSignature' //查询电子签名

const addElectronicSignature = BASE_URL + 'app/ElectronicSignature/addElectronicSignature' //新增(编辑)电子签名

const deleteElectronicSignature = BASE_URL + 'app/ElectronicSignature/deleteElectronicSignature' //删除电子签名

const getUserAuthentication = BASE_URL + 'app/authentication/getUserAuthentication' //获取实名认证

const userAuthentication = BASE_URL + 'app/authentication/userAuthentication' //进行实名认证


//实名考勤

const realNameAdd = BASE_URL + '/app/realName/realNameAdd' //新增实名制信息

const realNameEdit = BASE_URL + '/app/realName/realNameEdit' //编辑实名制

const realNameList = BASE_URL + '/app/realName/realNameList' //获取实名制列表

const realNameUplode = BASE_URL + '/app/realName/uplode' //上传文件

const realNamedicListByType = BASE_URL + '/app/realName/dicListByType' //获取数据词典

const realNameruleAdd = BASE_URL + '/app/realName/ruleAdd' //新增考勤规则

const ruleEdit = BASE_URL + '/app/realName/ruleEdit' //修改考勤规则

const ruleInfoById = BASE_URL + '/app/realName/ruleInfoById' // 通过ID获取规则详情

const realNameruleList = BASE_URL + '/app/realName/ruleList' //获取考勤规则列表

const realNameAccount = BASE_URL + '/app/realName/realNameAccount' //获取实名制台账信息

const realNameTeamCount = BASE_URL + '/app/realName/realNameTeamCount' //获取实名制台账班组统计信息

const recordLogClock = BASE_URL + '/app/realName/recordLogClock' //查询出勤打卡和班组统计

const realNamerecordList = BASE_URL + '/app/realName/recordList' //获取打卡详情列表

const getGroupRecordInfo = BASE_URL + '/app/realName/getGroupRecordInfo' //日考勤获取班组下打卡信息

const getStationRecordInfo = BASE_URL + '/app/realName/getStationRecordInfo' //日考勤获取项目岗位下打卡信息

const getGroupAndStationCount = BASE_URL + '/app/realName/getGroupAndStationCount' //获取出勤统计-班组/岗位统计

const getGroupPersonCount = BASE_URL + '/app/realName/getGroupPersonCount' //获取班组下人员出勤统计

const getStationPersonCount = BASE_URL + '/app/realName/getStationPersonCount' //获取项目岗位下人员出勤统计

const getRealNameById = BASE_URL + '/app/realName/getRealNameById' //通过ID获取实名制信息

const evaluateAdd = BASE_URL + '/app/realName/evaluateAdd' //新增评价

const getEvaluateList = BASE_URL + '/app/realName/getEvaluateList' //获取评价列表

const evaluateDel = BASE_URL + '/app/realName/evaluateDel' //删除评论

const getPersonAttendanceCount = BASE_URL + '/app/realName/getPersonAttendanceCount' //获取个人考勤统计信息

const getPersonAmrsAndGcrs = BASE_URL + '/app/realName/getPersonAmrsAndGcrs' //获取个人考勤统计信息

const updatePersonStatus = BASE_URL + '/app/realName/updatePersonStatus' // 退场结算

const getUnitAttendanceDetail = BASE_URL + '/app/realName/getUnitAttendanceDetail' // （新添）获取首页打卡人数及各所属单位(公司)打卡详细(考勤台账-日考勤)

const getUnitDetailInfo = BASE_URL + '/app/realName/getUnitDetailInfo' // （新添）获取首页各所属单位(公司)出勤详细(考勤台账-出勤统计)

const getUnitList = BASE_URL + '/app/realName/getUnitList' // （新添）获取所属单位列表

const getCategoryUnitCount = BASE_URL + '/app/realName/getCategoryUnitCount' // 获取首页不同人员类别下所属单位统计信息

const getUnitPersonCountInfo = BASE_URL + '/app/realName/getUnitPersonCountInfo' // 分包单位下所属单位各班组实名制人员信息

const unitAddURL = BASE_URL + '/app/realName/unitAdd' // （新添）新增所属单位

const unitDeleteURL = BASE_URL + '/app/realName/unitDelete' //删除所属单位

const unitUpdateURL = BASE_URL + '/app/realName/unitUpdate' // 更新所属单位

const ruleDeleteURL = BASE_URL + '/app/realName/ruleDelete' // （新添）删除考勤规则


//考勤模块

const getAttendanceRecordURL = BASE_URL + '/app/appAttendanceRecord/getAttendanceRecord' // 用户打卡页面详情（包括第一次进入打卡页面）

const getProjectLoginUserInfoURL = BASE_URL + '/app/appAttendanceRecord/getAttendanceRecord' // 获取项目登录用户信息（新）

const attendanceRuleListURL = BASE_URL + '/app/attendance/attendanceRuleList' // 获取考勤规则列表

const delAttendanceRuleURL = BASE_URL + '/app/attendance/delAttendanceRule' // 删除考勤规则列表

const attendanceForMonthURL = BASE_URL + '/app/attendance/attendanceForMonth' // 月统计:获取项目所有人考勤统计

const attendanceRuleDetailURL = BASE_URL + '/app/attendance/attendanceRuleDetail' // 考勤规则详情

const punchClocklURL = BASE_URL + '/app/appAttendanceRecord/punchClock' // 上下班考勤/更新打卡

const applyListInfoURL = BASE_URL + '/app/appAttendanceRecord/applyListInfo' //申请记录列表

const attendanceForDayListURL = BASE_URL + '/app/attendance/attendanceForDayList' //日统计打卡详情列表

const roleListURL = BASE_URL + '/app/role/roleList' //获取角色列表

const getAttendanceMissListURL = BASE_URL + '/app/attendance/getAttendanceMissList' //获取用户缺卡列表（补卡申请时）

const sendStartApplyURL = BASE_URL + '/app/appAttendanceRecord/sendStartApply' //补卡/出差/请假发起申请、修改申请

const attendanceRuleURL = BASE_URL + 'app/attendance/attendanceRule' //新增/修改考勤规则

const attendanceForDayURL = BASE_URL + '/app/attendance/attendanceForDay' //日统计全部打卡

const laveEarlyForDayListURL = BASE_URL + '/app/attendance/laveEarlyForDayList' //日统计打卡迟到/早退列表

const missCordForDayListURL = BASE_URL + '/app/attendance/missCordForDayList' //日统计所有缺卡列表

const outAttendanceForDayListURL = BASE_URL + '/app/attendance/outAttendanceForDayList' //日统计：获取项目中当天所有外勤列表


//塔机接口
const getDeviceNumAndStatusURL = BASE_URL + '/app/tower/getDeviceNumAndStatus' //根据项目ID获取项目所属的设备数及状态

const getProjectinfoURL = BASE_URL + '/app/projectinfo/getProjectinfo' //获取项目信息详情

const getCallAndEarlyNumURL = BASE_URL + '/app/tower/getCallAndEarlyNum' //获取24小时内的报警预警数

const getTowerDeviceListsURL = BASE_URL + 'appE/towerRelevant/getTowerDeviceLists' //获取塔机设备列表

const getCallListInfoURL = BASE_URL + '/app/tower/getCallListInfo' //获取报警列表信息

const getCallHistoryInfoURL = BASE_URL + '/app/tower/getCallHistoryInfo' //获取单个报警历史信息

const towerAlarmAddURL = BASE_URL + '/app/tower/towerAlarmAdd' //添加报警处理原因

const uplodeURL = BASE_URL + '/app/realName/uplode' //获取项目信息详情

const getTowerListInfoURL = BASE_URL + 'app/tower/getTowerListInfo' //获取塔机列表信息

const towerBasicInfoEditURL = BASE_URL + 'app/tower/towerBasicInfoEdit' //编辑塔机基本信息

const getRepairOrderListURL = BASE_URL + 'app/tower/getRepairOrderList' //获取报修订单列表

const healthAddURL = BASE_URL + 'app/tower/healthAdd' //新增预约保养信息

const getTowerRunMonitorListURL = BASE_URL + 'app/tower/getTowerRunMonitorList' //获取塔机运行监控列表

const getJackupsListURL = BASE_URL + 'app/tower/getJackupsList' //获取塔机列表信息

const getTowerInfoByIdURL = BASE_URL + 'app/tower/getTowerInfoById' //获取单个塔机详细信息

const dailyManagerAddURL = BASE_URL + 'app/tower/DailyManagerAdd' //新增日常管理

const getEarlyListInfoURL = BASE_URL + '/app/tower/getEarlyListInfo' //获取24小时内的预警数

const getAlarmCountURL = BASE_URL + 'app/tower/getAlarmCount' //获取报警统计

const getTowerRealTimeInfoURL = BASE_URL + 'app/tower/getTowerRealTimeInfo' //获取塔机实时数据

const getJackupsInfoURL = BASE_URL + 'app/tower/getJackupsInfo' //获取顶升监控详情

const getRepairDetailInfolURL = BASE_URL + 'app/tower/getRepairDetailInfo' //查询单个报修明细信息

const getHealthOrderListURL = BASE_URL + 'app/tower/getHealthOrderList' //获取预约保养订单列表

const healthCancelOrderlURL = BASE_URL + 'app/tower/healthCancelOrder' //预约保养订单取消

const cancelOrderURL = BASE_URL + 'app/tower/cancelOrder' //故障报修取消订单

const getHealthDetailInfoURL = BASE_URL + 'app/tower/getHealthDetailInfo' //查询单个预约保养明细

const repairAddURL = BASE_URL + 'app/tower/RepairAdd' //新增故障报修管理

const dailyManagerDelURL = BASE_URL + 'app/tower/DailyManagerDel' //删除日常管理信息（设备通用）

const getEarlyHistoryInfoURL = BASE_URL + 'app/tower/getEarlyHistoryInfo' //获取单个预警历史信息

const getJobAccountURL = BASE_URL + 'app/tower/getJobAccount' //获取作业统计

const alarmHandleAddURL = BASE_URL + '/app/tower/alarmHandleAdd' //添加报警处理原因

const towerAlarmDelURL = BASE_URL + '/app/tower/towerAlarmDel' //删除报警处理信息

const getPoliceHandleInfoURL = BASE_URL + '/app/tower/getPoliceHandleInfo' //获取报警处理原因

const getTowerWorkCycleInfoURL = BASE_URL + 'app/tower/getTowerWorkCycleInfo' //获取塔机工作循环记录

//塔机维保

const getDeviceUserListURL = BASE_URL + 'app/tower/getDeviceUserList' //查询设备用户信息列表

const repairEditURL = BASE_URL + 'app/tower/RepairEdit' //获取作业统计

const deviceUserInfoAddURL = BASE_URL + 'app/tower/deviceUserInfoAdd' //获取作业统计

const getAlarmTrendURL = BASE_URL + '/app/tower/getAlarmTrend' //设备报警趋势统计

const healthEditURL = BASE_URL + '/app/tower/healthEdit' //更新预约保养信息

//升降机

const getElevatorListInfoURL = BASE_URL + '/app/elevator/getElevatorListInfo' //获取升降机列表信息

const getCallAndEarlyURL = BASE_URL + '/app/elevator/getCallAndEarlyNum' //获取24小时内的报警预警数

const getDeviceNumAndURL = BASE_URL + '/app/elevator/getDeviceNumAndStatus' //获取项目所属的升降机设备数及状态信息

const getElevatorRunMonitorListURL = BASE_URL + '/app/elevator/getElevatorRunMonitorList' //获取升降机运行监控列表

const getElevatorInfoById = BASE_URL + '/app/elevator/getElevatorInfoById' //获取升降机单个详情信息(包含日常管理，报修保养等)

const elevatorBasicInfoEdit = BASE_URL + '/app/elevator/ElevatorBasicInfoEdit' //编辑升降机基本信息

const getCallListInfo = BASE_URL + '/app/elevator/getCallListInfo' //获取24小时报警列表信息

const getCallHistoryInfo = BASE_URL + '/app/elevator/getCallHistoryInfo' //获取升降机单个报警历史信息

const alarmHandleAdd = BASE_URL + '/app/elevator/alarmHandleAdd' //获取升降机添加报警处理原因

const getEarlyListInfo = BASE_URL + '/app/elevator/getEarlyListInfo' //获取24小时内的预警数

const getEarlyHistoryInfo = BASE_URL + '/app/elevator/getEarlyHistoryInfo' //获取单个预警历史信息

const getPoliceHandleInfo = BASE_URL + '/app/elevator/getPoliceHandleInfo' //获取报警处理原因

const alarmHandleDel = BASE_URL + '/app/elevator/alarmHandleDel' //删除报警处理信息

const getElevatorHistoryInfo = BASE_URL + '/app/elevator/getElevatorHistoryInfo' //获取升降机历史数据

const getElevatorRealTimeInfo = BASE_URL + '/app/elevator/getElevatorRealTimeInfo' //获取升降机实时数据

const getElevatorWorkCycleInfo = BASE_URL + '/app/elevator/getElevatorWorkCycleInfo' //获取升降机工作循环记录

const getRepairDetailInfo = BASE_URL + '/app/elevator/getRepairDetailInfo' //获取升降机查询单个报修明细信息

const getHealthDetailInfo = BASE_URL + '/app/elevator/getHealthDetailInfo' //查询单个预约保养明细
//环境监测
const getDustBasicInfoURL = BASE_URL + '/app/dust/getDustBasicInfo' //获取环境监测设备基本信息

const getDustRealTimeInfoURL = BASE_URL + '/app/dust/getDustRealTimeInfo' //获取环境监测实时数据

const getAlarmCount = BASE_URL + '/app/dust/getAlarmCount' //查询24小时报警统计

const getSprayDeviceInfoURL = BASE_URL + '/app/dust/getSprayDeviceInfo' //获取喷淋设备列表

const updateDustDeviceNameURL = BASE_URL + '/app/dust/updateDustDeviceName' //修改环境监测设备名称

const updateSprayDeviceNameURL = BASE_URL + '/app/dust/updateSprayDeviceName' //修改喷淋设备名称

const sprayControlURL = BASE_URL + '/app/dust/sprayControl' //喷淋设备远程控制

const getAlarmListURL = BASE_URL + '/app/dust/getAlarmList' //查询24小时报警列表

const getAlarmHistoryListURL = BASE_URL + '/app/dust/getAlarmHistoryList' //查询报警历史记录

const updateAlarmHandleInfoURL = BASE_URL + '/app/dust/updateAlarmHandleInfo' //添加/更新报警处理信息

const getTrendChartListInfoURL = BASE_URL + '/app/dust/getTrendChartListInfo' //获取环境监测趋势图信息

//视屏监控
const getCameraListInfoURL = BASE_URL + '/app/video/getCameraListInfo' //查询摄像头列表（包含塔机视频监控）

const getAICaptureInfoListURL = BASE_URL + '/app/video/getAICaptureInfoList' //查询AI抓拍事件列表

const captureEventEditURL = BASE_URL + '/app/video/captureEventEdit' //AI抓拍事件修改

const getCameraPlaybackURL = BASE_URL + '/app/video/getCameraPlayback' //获取单个摄像头的回放地址

const editHomePageURL = BASE_URL + '/app/video/editHomePage' //更新是否首页显示状态

//零星用工

const getShowDictListURL = BASE_URL + 'app/dictionaries/showDictList' //查询单个喷淋设备详情

const addWorkerApplyURL = BASE_URL + 'app/workerapply/addWorkerApply' //新增用工申请

const getWorkerApplyArraysURL = BASE_URL + 'app/workerapply/getWorkerApplyArrays' //获取用工申请列表

const getWorkerApplyByIdURL = BASE_URL + 'app/workerapply/getWorkerApplyById' //通过ID获取用工申请详情

const editStateInfoURL = BASE_URL + 'app/workerapply/editStateInfo' //修改流程状态信息

const getMechanicsApplyArraysURL = BASE_URL + 'app/mechanicsapply/getMechanicsApplyArrays' //获取零星机械使用申请列表

const addmechanicsApplyURL = BASE_URL + 'app/mechanicsapply/addmechanicsApply' //新增零星机械使用申请

const getMechanicsApplyByIdURL = BASE_URL + 'app/mechanicsapply/getMechanicsApplyById' //通过ID获取零星机械使用申请

const mechanicsapplyEditStateURL = BASE_URL + 'app/mechanicsapply/editStateInfo' //修改流程状态信息

const getWorkerConfirmArraysURL = BASE_URL + 'app/workerconfirm/getWorkerConfirmArrays' //获取用工使用确认列表

const addWorkerConfirmURL = BASE_URL + 'app/workerconfirm/addWorkerConfirm' //新增用工使用确认

const getWorkerConfirmByIdURL = BASE_URL + 'app/workerconfirm/getWorkerConfirmById' //通过ID获取用工使用确认详情

const editworkerconfirmURL = BASE_URL + 'app/workerconfirm/editStateInfo' //修改流程状态信息

const getMechanicsConfirmArraysURL = BASE_URL + 'app/mechanicsconfirm/getMechanicsConfirmArrays' //获取机械使用确认列表

const getMechanicsConfirmByIdURL = BASE_URL + 'app/mechanicsconfirm/getMechanicsConfirmById' //通过ID获取机械使用确认

const addMechanicsConfirmIdURL = BASE_URL + 'app/mechanicsconfirm/addMechanicsConfirm' //新增机械使用确认

const getTaskHandleStepWorkerapply = BASE_URL + 'app/workerapply/getTaskHandleStepLists' //获取流程处理步骤列表

const getTaskHandleStepWorkerconfirm = BASE_URL + 'app/workerconfirm/getTaskHandleStepLists' //获取流程处理步骤列表

const getTaskHandleStepMechanicsapply = BASE_URL + 'app/mechanicsapply/getTaskHandleStepLists' //获取流程处理步骤列表

const getTaskHandleStepMechanicsconfirm = BASE_URL + 'app/mechanicsconfirm/getTaskHandleStepLists' //获取流程处理步骤列表

const editStateInfoMechanicsconfirm = BASE_URL + 'app/mechanicsconfirm/editStateInfo' //修改流程状态信息（



function ajaxGet(ismessg, wonrname, interfaceurl, jsonDate, fn) { //网络请求
    if (ismessg) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: wonrname,
            text: '请稍后...',
            modal: true
        });
    }
    header.DeviceID = api.deviceId;
    header.userId = $api.getStorage('userId');
    api.ajax({
        url: interfaceurl,
        method: 'get',
        headers: header,
        data: {
            body: jsonDate
        },
    }, function (ret, err) {
        api.hideProgress()
        if (ismessg) {
            api.refreshHeaderLoadDone();
        }
        if (err) {

            api.toast({
                msg: err.msg,
                duration: 2000,
                location: 'bottom'
            });
            return

        }
        if (ret.status == -10) { //过期
            $api.clearStorage('token');

        }
        if (ret.status == 505) {

            api.alert({
                title: '提示',
                msg: '系统检测到你的账号在别的设备登录...',
            }, function (ret, err) {
                if (ret) {
                    $api.clearStorage();
                    api.closeToWin({
                        name: 'root'
                    });
                    setTimeout(function () {
                        api.closeWin();
                    }, 100)
                } else { }
            });
            return

        }
        if (ret.status == 1) {
            fn(ret)
        } else {

            api.toast({
                msg: ret.msg,
                duration: 2000,
                location: 'bottom'
            });

        }
    });
}

function ajaxPost(ismessg, wonrname, interfaceurl, jsonDate, fn) { //网络请求
    if (ismessg) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: wonrname,
            text: '请稍后...',
            modal: true
        });
    }
    header.DeviceID = api.deviceId;
    header.userId = $api.getStorage('userId');
    api.ajax({
        url: interfaceurl,
        method: 'post',
        headers: header,
        data: {
            body: jsonDate
        },
    }, function (ret, err) {
        api.refreshHeaderLoadDone();
        if (ismessg) {
            api.hideProgress()
        }
        if (err) {
            api.toast({
                msg: err.msg,
                duration: 2000,
                location: 'bottom'
            });
            return

        }
        if (ret.status == -10) {
            $api.clearStorage('token');

        }
        if (ret.status == 505) {

            api.alert({
                title: '提示',
                msg: '系统检测到你的账号在别的设备登录...',
            }, function (ret, err) {
                if (ret) {
                    $api.clearStorage();
                    api.closeToWin({
                        name: 'root'
                    });
                    setTimeout(function () {
                        api.closeWin();
                    }, 100)
                } else { }
            });
            return

        }
        if (ret.status == 1) {
            fn(ret)
        } else {

            api.toast({
                msg: ret.msg,
                duration: 2000,
                location: 'bottom'
            });

        }
    });
}

function ajaxFile(ismessg, wonrname, interfaceurl, dataValue, dataFile, fn) { //网络请求
    if (api.connectionType === 'none') {
        api.toast({
            msg: '请检查网络',
            duration: 2000,
            location: 'bottom'
        });
        return false
    }
    if (ismessg) {
        api.showProgress({
            style: 'default',
            animationType: 'fade',
            title: wonrname,
            text: '请稍后...',
            modal: true
        });
    }
    header.DeviceID = api.deviceId;
    header.userId = $api.getStorage('userId');
    api.ajax({
        url: interfaceurl,
        method: 'post',
        cache: 'false',
        timeout: 30,
        headers: fileHeader,
        dataType: 'json',
        data: {

            values: dataValue,
            files: dataFile
        },
    }, function (ret, err) {
        api.refreshHeaderLoadDone();
        if (ismessg) {
            api.hideProgress()
        }
        if (err) {
            console.log($api.jsonToStr(err));
            api.toast({
                msg: err.msg,
                duration: 2000,
                location: 'bottom'
            });
            return

        }
        if (ret.status == -10) {
            $api.clearStorage('token');

        }
        if (ret.status == 505) {

            api.alert({
                title: '提示',
                msg: '系统检测到你的账号在别的设备登录...',
            }, function (ret, err) {
                if (ret) {
                    $api.clearStorage();
                    api.closeToWin({
                        name: 'root'
                    });
                    setTimeout(function () {
                        api.closeWin();
                    }, 100)
                } else { }
            });
            return

        }
        if (ret.status == 1) {
            fn(ret)
        } else {

            api.toast({
                msg: ret.msg,
                duration: 2000,
                location: 'bottom'
            });

        }
    });
}

(function (window) {

    var o = {};
    /*
      @params ismessg,//是否显示加载状态
      @params wonrname,//状态文字
      @params interfaceurl,接口地址
      @params jsonDate,请求参数
      @params   callback 回调函数
    */
    o.get = function (ismessg, interfaceurl, jsonDate, callback) {
        if (ismessg) {
            api.showProgress({
                style: 'default',
                animationType: 'fade',
                title: '加载中',
                text: '请稍后...',
                modal: true
            });
        }
        header.DeviceID = api.deviceId;
        header.userId = $api.getStorage('userId');
        api.ajax({
            url: interfaceurl,
            method: 'get',
            headers: header,
            data: {
                body: jsonDate
            },
        }, function (ret, err) {
            api.hideProgress()
            if (ismessg) {
                api.refreshHeaderLoadDone();
            }
            if (err) {
                console.log("请求错误：" + JSON.stringify(err));
                api.toast({
                    msg: err.msg,
                    duration: 2000,
                    location: 'bottom'
                });
                return

            }
            if (ret.status == -10) { //过期
                $api.clearStorage('token');

            }
            if (ret.status == 505) {

                api.alert({
                    title: '提示',
                    msg: '系统检测到你的账号在别的设备登录...',
                }, function (ret, err) {
                    if (ret) {
                        $api.clearStorage();
                        api.closeToWin({
                            name: 'root'
                        });
                        setTimeout(function () {
                            api.closeWin();
                        }, 100)
                    } else { }
                });
                returngetProjectinfoURL
            }
            if (ret.status == 1) {
                callback(ret)
            }
        });
    };
    o.post = function (ismessg, interfaceurl, jsonDate, callback) { //网络请求
        if (ismessg) {
            api.showProgress({
                style: 'default',
                animationType: 'fade',
                title: '加载中',
                text: '请稍后...',
                modal: true
            });
        }
        header.DeviceID = api.deviceId;
        header.userId = $api.getStorage('userId');
        api.ajax({
            url: interfaceurl,
            method: 'post',
            headers: header,
            data: {
                body: jsonDate
            },
        }, function (ret, err) {
            api.refreshHeaderLoadDone();
            if (ismessg) {
                api.hideProgress()
            }
            if (err) {
                console.log("请求错误：" + JSON.stringify(err));
                api.toast({
                    msg: err.msg,
                    duration: 2000,
                    location: 'bottom'
                });
                return

            }
            if (ret.status == -10) {
                $api.clearStorage('token');
                return false

            }
            if (ret.status == 505) {

                api.alert({
                    title: '提示',
                    msg: '系统检测到你的账号在别的设备登录...',
                }, function (ret, err) {
                    if (ret) {
                        $api.clearStorage();
                        api.closeToWin({
                            name: 'root'
                        });
                        setTimeout(function () {
                            api.closeWin();
                        }, 100)
                    } else { }
                });
                return

            }
            if (ret.status == 0) {
                console.log("请求错误：" + JSON.stringify(err));
                api.alert({
                    title: '提示',
                    msg: ret.msg,
                }, function (ret, err) {
                    if (ret) {

                    } else {

                    }
                });

            }
            if (ret.status == 1) {
                // console.log("返回参数："+JSON.stringify(ret));
                callback(ret);
            }
        });
    };
    //下拉刷新
    o.downrefresh = function (callback) {
        api.setRefreshHeaderInfo({
            visible: true,
            loadingImg: 'widget://image/refresh.png',
            bgColor: '#ccc',
            textColor: '#fff',
            textDown: '下拉刷新...',
            textUp: '松开刷新...',
            showTime: true
        }, function (ret, err) {
            callback()
        });

    };
    //上拉加载
    o.uploding = function (callback) {
        api.addEventListener({
            name: 'scrolltobottom',
            extra: {
                threshold: 0 //设置距离底部多少距离时触发，默认值为0，数字类型
            }
        }, function (ret, err) {
            callback()
        });

    };
    o.fillDate = function (data) {
        return ('0' + data).slice(-2)
    };
    o.checkPhone = function (phone) {
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))) {
            return false;
        } else {
            return true
        }
    };
    //时间选择
    // 回调函数
    //isflag(true为年月日时分秒)（false为年月日）
    //date(指定时间)
    o.timeFn = function (callback, isflag, date) {
        var timeDate = date ? new Date(date) : new Date();
        var _this = this;
        var curDate = isflag ?
            (timeDate.getFullYear() + '/' + (timeDate.getMonth() + 1) + '/' + timeDate.getDate() + '  ' + timeDate.getHours() + ':' + timeDate.getMinutes() + ':' + timeDate.getSeconds()) :
            curDate = (timeDate.getFullYear() + '/' + (timeDate.getMonth() + 1) + '/' + timeDate.getDate());
        timeSelector.fnOpenSelector({
            title: ' ', //选填 |  '时间选择'    |  String         |  选择器标题文案
            sureText: '完成', //选填 |    '完成'      |  String        |   确定按钮文案
            isShowUnit: true, //选填 |     true      |  Boolean        |  是否显示中文单位名称
            itemShowCount: 5, //选填 |      5        |  Number         |  显示的行数
            itemHeight: 55, //选填 |      55       |  Number         |  行高度（单位px）
            date: curDate //选填 |   new Date    |  Date/String     |  默认选中的时间
        }, function (ret) {
            if (!ret || !ret.date) {
                return false
            }
            var seletiem = isflag ?
                _this.formDate(ret.date, '-') + ' ' + (+_this.fillDate(ret.date.getHours()) + ':' + _this.fillDate(ret.date.getMinutes()) + ':' + _this.fillDate(ret.date.getSeconds())) :
                _this.formDate(ret.date, '-');
            callback(seletiem)
            //  vm.logTime = $app.formDate(date,'-')
        })
    };
    //monthNum 加减数值可为负
    //yearMonthDay "2020-08"
    //月份加减法
    o.addMonths = function (yearMonthDay, monthNum) {
        var arr = yearMonthDay.split('-');//2020-08-19或2020-08
        var year = parseInt(arr[0]);
        var month = parseInt(arr[1]);
        month = month + monthNum;
        if (month > 12) {//月份加
            var yearNum = parseInt((month - 1) / 12);
            month = month % 12 == 0 ? 12 : month % 12;
            year += yearNum;
        } else if (month <= 0) {//月份减
            month = Math.abs(month);
            var yearNum = parseInt((month + 12) / 12);
            year -= yearNum;
        }
        month = month < 10 ? "0" + month : month;
        return year + "-" + month;
    };
    //加减天数函数
    o.addDate = function (date, days) {
        var d = new Date(date);
        d.setDate(d.getDate() + days);
        var hh = d.getHours();
        var mm = d.getMinutes();
        var ss = d.getSeconds();
        var day = d.getDate();
        var m = d.getMonth() + 1;
        if (hh < 10) {
            hh = "0" + hh
        }
        if (mm < 10) {
            mm = "0" + mm
        }
        if (ss < 10) {
            ss = "0" + ss
        }
        if (m < 10) {
            m = "0" + m
        }
        if (d.getDate() < 10) {
            day = "0" + d.getDate()
        }
        return d.getFullYear() + '-' + m + '-' + day + " " + hh + ":" + mm + ":" + ss;
    };
    //数据大小转换
    o.fromCatcheSize = function (size, length) {
        if ((size / 1024) < 500) {
            return ((size / 1024).toFixed(length)) + 'k'
        } else if (size / (1024 * 1024) < 100) {
            return ((size / (1024 * 1024)).toFixed(length)) + 'M'
        } else {
            return ((size / (1024 * 1024 * 1024)).toFixed(length)) + 'G'
        }
    }
    //格式化时间
    /*
        date,（可选参数，传false为当前时间）
        separator 、、//以何种分割date
        isDate  true(年月日时分秒)false(年月日)
    */
    o.formDate = function (date, separator, isDate) {
        var data = date ? new Date(date) : new Date(),
            y = data.getFullYear(),
            moth = data.getMonth() + 1,
            day = data.getDate(),
            h = data.getHours(),
            Minu = data.getMinutes(),
            s = data.getSeconds();
        switch (separator) {
            case '-':
                if (isDate) {
                    return (y + '-' + this.fillDate(moth) + '-' + this.fillDate(day) + '  ' + this.fillDate(h) + ':' + this.fillDate(Minu) + ':' + this.fillDate(s))
                } else {
                    return (y + '-' + this.fillDate(moth) + '-' + this.fillDate(day))
                }
                break;
            case '/':
                if (isDate) {
                    return (y + '-' + this.fillDate(moth) + '-' + this.fillDate(day) + '  ' + this.fillDate(h) + ':' + this.fillDate(Minu) + ':' + this.fillDate(s))
                } else {
                    return (y + '/' + this.fillDate(moth) + '/' + this.fillDate(day))
                }
                break;
            default:
                break;
        }
    };
    //时间戳转换函数
    o.timeStampTurnTime = function (timeStamp) {
        if (timeStamp > 0) {
            var date = new Date();
            date.setTime(timeStamp);
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
        } else {
            return "";
        }
    }
    /*获取一个月的天数 */
    o.getCountDays = function (timeStamp) {
        var curDate = new Date(specifiedTime);
        /* 获取当前月份 */
        var curMonth = curDate.getMonth();
        /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
        curDate.setMonth(curMonth + 1);
        /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
        curDate.setDate(0);
        /* 返回当月的天数 */
        return curDate.getDate();
    };
    /*  图片缓存
        el ,img图片组class类型
        thumbnail //是否使用缩略图
    */
    o.imageCache = function (el, thumbnail) {
        var imgBox = document.getElementsByClassName(el);
        for (var i = 0; i < imgBox.length; i++) {
            var curImg = imgBox[i];
            var remoteUrl = curImg.getAttrbute('data-img') || '';
            (function () {
                api.imageCache({
                    url: remoteUrl,
                    thumbnail: thumbnail || false
                }, function (ret, err) {
                    if (ret && ret.status) {
                        var url = ret.url;
                        curImg.setAttrbute('src', url)
                    } else {
                        console.log(JSON.stringify(err));
                    }
                });

            })(curImg)
        }

    };
    //计算日期之间差返回天时分秒
    o.getYMDHMS = function (startTime, endTime) {
        if (api.systemType == 'ios') {
            startTime = startTime.replace(/-/g, '/')
        }
        console.log(startTime);
        var star = new Date(startTime).getTime();
        var end = new Date(endTime).getTime()
        var dateInterval = Math.abs(end - star); //获取时间差毫秒
        //计算出相差天数
        var days = Math.floor(dateInterval / (24 * 60 * 60 * 1000));
        //计算小时数
        var hourLevel = dateInterval % (24 * 60 * 60 * 1000);
        var hours = Math.floor(hourLevel / (60 * 60 * 1000))
        //计算分钟数
        var minutesLevel = hourLevel % (60 * 60 * 1000);
        var minutes = Math.floor(minutesLevel / (60 * 1000));
        //计算秒数
        var seconds = Math.round((minutesLevel % (60 * 1000)) / 1000);
        console.log(days, hours, minutes);
        return (days + '天 ' + this.fillDate(hours) + '小时' + this.fillDate(minutes) + '分钟')
    }
    //按key分类
    o.groupArr = function (list, field) {
        var obj = {};
        for (var i = 0; i < list.length; i++) {
            for (item in list[i]) {
                if (item == field) {
                    obj[list[i][item]] = {
                        list: obj[list[i][field]] ? obj[list[i][field]].list : [],
                        type: list[i].type
                    };
                }
            }
            obj[list[i][field]].list.push(list[i])
        }
        var att = [];
        for (item in obj) {
            att.push({
                list: obj[item].list,
                type: obj[item].type,
            })
        }
        return att;
    }
    //返回指定长度字符串，超出部分用...代替
    o.strNum = function (txt, num) {
        var str = txt;
        str = str.substr(0, num) + '...';
        return str;
    }
    //获取字典并重组数据
    o.getDictInfo = function (dictCode, callback) {
        var dictCodeInfo = {};
        var name = [];
        var dictionariesId = [];
        $app.post(
            false,
            getShowDictListURL,
            { dictCode: dictCode },
            function (ret) {
                ret.obj.map(function (item) {
                    name.push(item.name);
                    dictionariesId.push(item.dictionaries_id);
                });
                dictCodeInfo = {
                    name: name,
                    dictionariesId: dictionariesId
                };
                callback(dictCodeInfo);
            }
        )
    }
    o.changeNumMoneyToChinese = function (money) {
        var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //汉字的数字
        var cnIntRadice = new Array("", "拾", "佰", "仟"); //基本单位
        var cnIntUnits = new Array("", "万", "亿", "兆"); //对应整数部分扩展单位
        var cnDecUnits = new Array("角", "分", "毫", "厘"); //对应小数部分单位
        var cnInteger = "整"; //整数金额时后面跟的字符
        var cnIntLast = "元"; //整型完以后的单位
        var maxNum = 999999999999999.9999; //最大处理的数字
        var IntegerNum; //金额整数部分
        var DecimalNum; //金额小数部分
        var ChineseStr = ""; //输出的中文金额字符串
        var parts; //分离金额后用的数组，预定义
        var Symbol = "";//正负值标记
        if (money == "") {
            return "";
        }

        money = parseFloat(money);
        if (money >= maxNum) {
            alert('超出最大处理数字');
            return "";
        }
        if (money == 0) {
            ChineseStr = cnNums[0] + cnIntLast + cnInteger;
            return ChineseStr;
        }
        if (money < 0) {
            money = -money;
            Symbol = "负 ";
        }
        money = money.toString(); //转换为字符串
        if (money.indexOf(".") == -1) {
            IntegerNum = money;
            DecimalNum = '';
        } else {
            parts = money.split(".");
            IntegerNum = parts[0];
            DecimalNum = parts[1].substr(0, 4);
        }
        if (parseInt(IntegerNum, 10) > 0) { //获取整型部分转换
            var zeroCount = 0;
            var IntLen = IntegerNum.length;
            for (var i = 0; i < IntLen; i++) {
                var n = IntegerNum.substr(i, 1);
                var p = IntLen - i - 1;
                var q = p / 4;
                var m = p % 4;
                if (n == "0") {
                    zeroCount++;
                }
                else {
                    if (zeroCount > 0) {
                        ChineseStr += cnNums[0];
                    }
                    zeroCount = 0; //归零
                    ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
                }
                if (m == 0 && zeroCount < 4) {
                    ChineseStr += cnIntUnits[q];
                }
            }
            ChineseStr += cnIntLast;
            //整型部分处理完毕
        }
        if (DecimalNum != '') { //小数部分
            var decLen = DecimalNum.length;
            for (var i = 0; i < decLen; i++) {
                var n = DecimalNum.substr(i, 1);
                if (n != '0') {
                    ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
                }
            }
        }
        if (ChineseStr == '') {
            ChineseStr += cnNums[0] + cnIntLast + cnInteger;
        } else if (DecimalNum == '') {
            ChineseStr += cnInteger;
        }
        ChineseStr = Symbol + ChineseStr;

        return ChineseStr;
    }
    o.accAdd = function (arg1, arg2) {
        var r1, r2, m, c, n;
        try {
            r1 = arg1.toString().split(".")[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace(".", ""));
                arg2 = Number(arg2.toString().replace(".", "")) * cm;
            } else {
                arg1 = Number(arg1.toString().replace(".", "")) * cm;
                arg2 = Number(arg2.toString().replace(".", ""));
            }
        } else {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", ""));
        }

        n = (r1 >= r2) ? r1 : r2;
        return ((arg1 + arg2) / m).toFixed(n);
    }
    window.$app = o;
})(window)
