// 设置导航条默认选中
    // var li = document.get('li');
    // var i;
    // 轮播图
    //获取imglist宽度
    var imglist = document.getElementById('imglist');
    //获取页面中所有图片
    var imgArr = document.getElementsByTagName('img');
    //设置imglist宽度
    imglist.style.width = 980*imgArr.length+'px';

    // 设置导航按钮居中
    var navdiv = document.getElementById('navdiv');
    var outer = document.getElementById('outer');
    //设置navdiv的left值
    navdiv.style.left = (outer.offsetWidth - navdiv.offsetWidth)/2+"px";

    //图片默认索引值
    var index = 0;
    //获取所有 a

    
    var allA = document.getElementsByTagName('a');
    allA = navdiv.children;
    //设置默认选中的效果
    allA[index].style.backgroundColor = 'rgba(243, 194, 34, 0.884)';

    //点击超链接切换到指定图片
    //为所有超链接绑定单击响应函数
    for(var i=0; i<allA.length; i++){
        //为每一个超链接添加一个num属性
        allA[i].num = i;
        allA[i].onclick = function(){
            //点击时关闭自动切换定时器
            clearInterval(timer);
            //获取单击超链接的索引,并将其设置为index
            index = this.num;
            //切换图片
            // imglist.style.left = -520*index + 'px';

            //修改正在选中的 a
            setA();

            //使用move函数切换图片
            move(imglist, "left", -980*index, 50, function(){
                //动画执行完毕，开启自动切换
                autoCh();
            });
        };
    }

    //自动切换图片
    autoCh();

    //定义一个方法，设置选中的a
    function setA(){

        //判断当前索引是否是最后一张图片
        if(index >= imgArr.length - 1){
            //是则设置为0
            index = 0;
            //此时显示的最后一张图片，而最后一张图片和第一章是一抹一样
            //通过CSS将最后一张切换成第一张
            imglist.style.left = 0;
        }
        //遍历所有a，并将背景设置为原色
        for(var i=0; i<allA.length; i++){
            allA[i].style.backgroundColor = '';
        }
        //将选中的a设置为黑色
        allA[index].style.backgroundColor = 'rgba(243, 194, 34, 0.884)';
    };
    //创建一个函数，开启自动切换
    function autoCh(){
        //开启定时器
        timer = setInterval(function(){
            //索引自增
            index++;
            //判断index值
            index %= imgArr.length;
            //执行动画，切换图片
            move(imglist, "left", -987*index, 60, function(){
                //修改导航点切换
                setA();
            });

        }, 4000);
    }