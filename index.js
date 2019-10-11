const container = document.getElementsByTagName('body');
const oDiv = document.createElement("div");
const oImg = document.createElement("img");

let noticeUrl = 'http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg';
let noticeTitle = '公告栏';


const getNoticeData = (post) => {
    post('/v1/list').then(() => {});
    return 1
}


// 显示公告内容
const isShowNotice = () => {
    oDiv.innerHTML = noticeTitle;
    oDiv.className = 'oDiv';
    container[0].appendChild(oDiv);
}

// 显示图片式儿的公告
const imgShowNotice = () => {
    oImg.src = noticeUrl;
    container[0].appendChild(oImg);
}

export { getNoticeData ,isShowNotice, imgShowNotice }