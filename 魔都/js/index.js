$(function() {
    $(window).on("resize", function() {
        // 1 获取窗口的宽度
        let clientW = $(window).width()
            // 2 设置临界值
        let isShowBigImage = clientW >= 700
            // 3 获取每个轮播的item
        let $allItems = $("#carousel-id .item")
            // 4 遍历
        $allItems.each(function(index, item) { //屏幕宽度大于700 设置背景图，否则插入一张图片
            // 4.1 通过.data()取出绑定在item上的图片的路径
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img")
            let imgUrl = 'url("' + src + '")'
                // 4.2设置背景
            $(item).css({
                    backgroundImage: imgUrl
                })
                // 4.3 设置img标签
            if (!isShowBigImage) { //empty()是每次插入图片时先清空item的图片，否则会一直添加图片
                let $img = "<img src='" + src + "'>"
                $(item).empty().append($img)
            } else {
                $(item).empty()
            }
        })

    })
    $(window).trigger("resize") //使用trigger可以一开始进来就调用resize方法
})