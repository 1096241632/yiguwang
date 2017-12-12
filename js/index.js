
    var oEnlargeBox= document.getElementById('enlarge-box');
    var oSmallBox  = document.getElementById('small-box');
    var aSmallImg  = Array.from(oSmallBox.children);
    var oMiddleImg = document.getElementById('middle-img');
    var oLargeBox  = document.getElementById('large-box');
    var oLargeImg  = document.getElementById('large-img');
    var oMiddleBox = document.getElementById('middle-box');
    var oShadow    = document.getElementById('shadow');
    var omagnifier = document.getElementById("magnifier");

    // 选项开效果
    aSmallImg.forEach((v) => {
        v.addEventListener('mouseenter', (() => {
            aSmallImg.forEach((m) => {
                m.className = '';
            });
            v.className = 'active';
            oMiddleImg.src = v.src;
            oLargeImg.src  = v.src;
        }).bind(v));
    });

    // 放大镜效果
    var iMaxL = oMiddleBox.offsetWidth  - oShadow.offsetWidth;
    console.log(iMaxL);
    var iMaxT = oMiddleBox.offsetHeight - oShadow.offsetHeight;

    oMiddleBox.addEventListener('mousemove', (ev) => {
        var e = ev || window.event;
           oShadow.style.display="block"; 
        var
            iL = e.clientX - oMiddleBox.offsetLeft - oShadow.offsetWidth ;
            iT = e.clientY -oMiddleBox.offsetTop- oShadow.offsetHeight ;


        if(iL<0){
            iL=0;
        }else if(iL>iMaxL){
            iL=iMaxL;
        }
        if(iT<0){
            iT=0;
        }else if(iT>iMaxT){
            iL=iMaxt;
        }


        // 大图移动的距离和遮罩层移动的距离的比例关系
        // iShadowCurL / iShadowMaxL = iImgCurL / iImgMaxL

        var iBigImgL = iL * (oLargeImg.offsetWidth - oLargeBox.offsetWidth) / iMaxL;
        var iBigImgT = iT * (oLargeImg.offsetHeight - oLargeBox.offsetHeight) / iMaxT;


        oShadow.style.left = iL + 'px';
        oShadow.style.top  = iT + 'px';

        oLargeImg.style.left = -iBigImgL + 'px';
        oLargeImg.style.top  = -iBigImgT + 'px';
    });
    oMiddleBox.addEventListener('mouseenter', () => {
        oLargeBox.style.display = 'block';
    });
    oMiddleBox.addEventListener('mouseleave', () => {
        oShadow.style.left = '-1000px';
        oLargeBox.style.display = 'none';
    });













/*

showMirror();
function showMirror(){
    $("#con-MirrorBox").mousemove(function(ev){
        let e=ev || window.event;
        $("#imgId").attr("src",$("#m-img").attr("src"));

        let MirrorBox=document.getElementById("con-MirrorBox");
        let content1=document.getElementById("content-1");
        let bigMirror=document.getElementById("bigMirror");
        let imgId=document.getElementById("imgId");
        let bigShow=document.getElementById("bigShow");

        $("#bigMirror").css("display","block");
        $("#bigShow").css("display","block");

        
        let left1 = e.pageX-content1.offsetLeft-100;
          let top1 =  e.pageY-content1.offsetTop-100;

          if(left1<0){
              left1=0;
          }else if(left1>MirrorBox.offsetWidth-200){
              left1=MirrorBox.offsetWidth-200;
          }
          if(top1<0){
              top1=0;
          }else if(top1>MirrorBox.offsetHeight-200){
              top1=MirrorBox.offsetHeight-200;
          } 

        bigMirror.style.left = left1+"px";
        bigMirror.style.top =top1+"px";
        imgId.style.left = -1*2*left1+"px";
        imgId.style.top =-1*2*top1+"px";

    });

    $("#con-MirrorBox").mouseout(function(){
        bigMirror.style.display="none";
        bigShow.style.display="none";
    });
}*/