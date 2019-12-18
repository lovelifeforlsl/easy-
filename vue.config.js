var data = require('./data.json')
// var type = data.type
// var jingxuan=data.jingxuan

module.exports = {
    //...
    devServer: {
        before(app){
            app.get('/bookmall', function (req, res) {
                res.json({data: data});
            });

        },

        proxy: {
       //获取分类书单
            "/cats": {
                target: "http://api.zhuishushenqi.com",
                changeOrigin: true
                //"/cats/lv2/statistics"
            },
            "/ranking": {
                target: "http://api.zhuishushenqi.com",
                changeOrigin: true
                // http://api.zhuishushenqi.com  
            },
            // //排行榜详情
            // "/book": {
            //     target: "http://api.zhuishushenqi.com",
            //     changeOrigin: true
            //     // http://api.zhuishushenqi.com/ranking/gender
            // },

            //获取分类的书籍
            "/book": {
                target: "http://api.zhuishushenqi.com",
                changeOrigin: true
                // https://api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=%E4%B8%9C%E6%96%B9%E7%8E%84%E5%B9%BB&start=0&limit=20
            },
            
            //获取小说章节列表
            "/toc": {
                target: "http://lunbo.gdugm.cn",
                changeOrigin: true
                // http://lunbo.gdugm.cn/toc/mix?bookId=59ba0dbb017336e411085a4e
            },

            // 小说解码代理
            "/chapter": {
                target: "http://chapter.xmxingheju.com",
                changeOrigin: true,
                // pathRewrite:{
                //     '^/chapter':'/chapter/http://book.kdqb.cc/getBooks.aspx?method=content&bookId=2217899&chapterFile=U_2217899_201907151545066597_5542_1.txt',
                // }
                // http://lunbo.gdugm.cn/toc/mix?bookId=59ba0dbb017336e411085a4e
            },
            // http://chapter.xmxingheju.com/chapter/

            'info':{
                target:'http://chapter.xmxingheju.com',
                changeOrigin:true,
                pathRewrite: { // 路径重写
                  '^/info': '',
                }
              }

            // 拿到书籍详情
            // http://api.zhuishushenqi.com/book/548d9c17eb0337ee6df738f5
            
            // http://api.zhuishushenqi.com/cats/lv2/statistics

            // https://api.zhuishushenqi.com/book/by-categories?gender=male&type=hot&major=%E7%8E%84%E5%B9%BB&minor=&start=0&limit=20


            // http://api.zhuishushenqi.com/ranking/54d43437d47d13ff21cad58b
            // "/api": {
            //     target: "http://capi.douyucdn.cn",
            //     changeOrigin: true
            // },

        }
    }
};