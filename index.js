const container = document.getElementsByTagName('body');
const oDiv = document.createElement("div");
const oImg = document.createElement("img");

let noticeUrl = 'http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg';
let noticeTitle = '紧急通知：多会儿多会儿系统升级维护，为避免您的数据受影响，系统升级期间，系统暂停使用。';


const getNoticeData = (post, api) => {
    post(api).then(() => {});
    return 2
};

// 显示公告内容
const isShowNotice = () => {
    oDiv.innerHTML = noticeTitle;
    oDiv.className = 'oDiv';
    container[0].parentNode.insertBefore(oDiv, container[0]);
};

// 显示图片式儿的公告
const imgShowNotice = () => {
    oImg.src = noticeUrl;
    oImg.className = 'oImg';
    container[0].style.overflow = 'hidden';
    container[0].appendChild(oImg);
};

export { getNoticeData ,isShowNotice, imgShowNotice }