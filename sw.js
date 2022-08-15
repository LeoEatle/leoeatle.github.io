/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/01/29/hello-2015/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2015/04/14/unix-linux-note/post-bg-unix-linux.jpg","c48aa178cea20c0b766dfe0790803337"],["/2015/05/25/js-module-loader/post-bg-js-module.jpg","c813533f88f10e75e7725607a10f9426"],["/2015/09/22/js-version/javascript-java.jpg","27cf6dba01010760a885db49c37c16a8"],["/2015/09/22/js-version/keep-calm-and-learn-javascript.png","a5c44173a8d6669ab43cf85fe5252da0"],["/2015/09/22/js-version/post-bg-js-version.jpg","2870973c65864ce20973340d672f842f"],["/2016/07/28/Hello-Hexo/bangong.jpg","9eace6cb6c3782ccf47ab6fe6723bb74"],["/2016/07/28/Hello-Hexo/dalou.jpg","267e8de9a0fc8e3380744b713609ef79"],["/2016/07/28/Hello-Hexo/index.html","87c4cae323868012506cf770e88cad80"],["/2016/07/28/Hello-Hexo/kaifa.jpg","c1573aab8b7c4799e9acd1c85b0dbe74"],["/2016/07/28/Hello-Hexo/louti.jpg","af907eb5f1cb685ad50ab22de0c11a39"],["/2016/07/28/Hello-Hexo/nan.png","c54b6983be4a749aeaf74b4bc6c62627"],["/2016/07/28/Hello-Hexo/post-bg-2015.jpg","60c0fdc97779a352360a2a87189811ae"],["/2016/07/28/Hello-Hexo/shitang.jpg","4aa6d984830082bb7c350ab5f72b3543"],["/2016/07/28/Hello-Hexo/yejing.jpg","08ab3f859291db09e57fc5837d6248c1"],["/2016/07/28/Hello-Hexo/zonbu.jpg","84c1bc40902054ba7f5721cee27cf214"],["/2016/08/08/A-intresting-js/1.png","291f5b7b6470e8b7dabd0dd137cd564e"],["/2016/08/08/A-intresting-js/index.html","1310f2417a56a207783dcf11aa7f3307"],["/2016/09/02/The-inherit-in-javascript/index.html","20e845a4ecbe28e0926c3baf48b990cd"],["/2016/09/20/令人伤心的博客碎片/index.html","9145ac91038a15084b65a2aa2d7c63a1"],["/2016/11/11/LeetCode-121-Best-time-to-Buy-and-Sell-Stock/index.html","d6563f7d607cc6639776533b07a69698"],["/2016/11/13/LeetCode-112-Path-Sum/index.html","4da1c944c46e5ed64a80cc6913310f10"],["/2016/11/13/Leetcode-70-Climbing-Stairs/index.html","238f14249909b2c013acaedda36a52a0"],["/2016/11/14/LeetCode-413-Arithmetic-Slices/index.html","4c9587a6019418caffdc5b8bdf1b6766"],["/2016/11/14/爬虫的意义在哪里？/index.html","41718609f22ada14dc329fc807af9450"],["/2016/11/15/LeetCode-202-Happy-Number/index.html","393d85095778689b1f12f1902a19fc8a"],["/2016/11/20/LeetCode-453-Minimum-Moves-to-Equal-Array-Elements/index.html","95862c0d15a4ad2377d100024f12e43f"],["/2016/11/21/LeetCode-438-Find-All-Anagrams-in-a-String/index.html","5b7ac7feaf3775c5a1c84effab7a4738"],["/2016/11/22/LeetCode-448-Find-All-Numbers-Disappeared-in-an-Array/index.html","7f4481018d52d42189383c6dd6a29930"],["/2016/11/23/LeetCode-455-Assign-Cookies/index.html","b6b0d0dd177a93abf142e4950caa3b4b"],["/2016/11/26/LeetCode-130-Surrounded-Regions/index.html","e46807b6fe25b2bee65e956e427dd4bb"],["/2016/11/28/Docker学习笔记/2016-11-28 at 下午4.11.png","02f7488e4d747da509e7e1be9d4dcf7a"],["/2016/11/28/Docker学习笔记/container-layers.jpg","97c622c247ef510b06fee1aff4ec890f"],["/2016/11/28/Docker学习笔记/image-layers.jpg","adaabb4ae931eba8837211749d674dd3"],["/2016/11/28/Docker学习笔记/index.html","3ce1954c48d4d0631396496a7164056e"],["/2016/11/28/LeetCode-190-Reversed-Bits/index.html","cb9eff2960416545f8d430932bf8a4f2"],["/2016/11/28/SegmentFault开发文档笔记/index.html","53bebc8f7df8c27139ec6c03afbd824e"],["/2016/11/29/LeetCode-123-Best-Time-to-Buy-and-Sell-Stock-3/index.html","21891d0ddf6d6594f4cffb26bcaf4545"],["/2016/11/29/Twig模板引擎学习笔记/index.html","93ba933c4b9e0e963995c9318bfb69f0"],["/2016/11/30/Angular2-Typescript入门笔记/index.html","058571cc3d37468fd12c947b0c445f03"],["/2016/11/30/compositionstart事件/index.html","660d9d47196cf6f9c25e8fd70a90334b"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/index.html","c4834459b847d5234545f7ba5c2dff6b"],["/2016/12/06/记录一次有趣的coffee-script插件魔改/需求.png","bb1d6b7833c3adaa2b65a9b1a0da2bf5"],["/2016/12/07/Javascript各种模块引入机制比较/index.html","ffd62300e4a869ece487a6fa790b95b1"],["/2016/12/07/LeetCode-415-Add-Strings/index.html","e5946970f264041193731f47db0ff0f9"],["/2016/12/08/Javascript设计模式与开发实践-笔记/index.html","d07a2c37e436cd41efab9ffe10a3bb32"],["/2016/12/08/SegmentFault-gulp配置笔记/index.html","7d2259897216b26ea5b984ebfb2ebc29"],["/2016/12/10/SFDC笔记/index.html","a3ecd18712ff2be920cf52c7b86ba362"],["/2016/12/13/LeetCode-396-Rotate-Function/index.html","a136aa886187f9c9adff5a1a90f4ce57"],["/2016/12/13/深入浅出node-js-笔记/index.html","4431837f287664c2e4af39c91ea10ffe"],["/2016/12/17/LeetCode-274-H-index/index.html","a4d223ae055647e0fe71062537db1ef1"],["/2016/12/19/SegmentFault打工日记-魔改tagpopup组件纪录/index.html","836c8c8b05a410976cdabf1c31c8db38"],["/2016/12/23/LeetCode-467-Unique-Substrings-in-Wraparound-String/index.html","04189baa2e11e3c967403920b66008d1"],["/2016/12/25/LeetCode-129-Sum-Root-to-Leaf-Numbers/index.html","a23d6480573509d502c53d9c1a676836"],["/2016/12/25/iOS-iOS-Apprentice-note/UIkit.png","e7407e9f8a33eaa1ff0ffff5c0a47f4e"],["/2016/12/25/iOS-iOS-Apprentice-note/connection.png","2d667856aac63dfadc1977e513ad6d72"],["/2016/12/25/iOS-iOS-Apprentice-note/index.html","f6a613d41703184d02ea182b6e0c3853"],["/2016/12/26/LeetCode-23-Merge-k-Sorted-Lists/index.html","86811c503dfd2a4f43b8c3ffc0bf2d47"],["/2016/12/26/iOS-Stanford-Developing-iOS7/index.html","d5f34ffae4037a569ec3b6b28612fb76"],["/2016/12/27/SegmentFault打工日记-Video-js和直播平台/index.html","4a0f871440b896ec67f0061fb4aad51a"],["/2016/12/27/iOS-Stanford-Developing-iOS-Open-Class/index.html","215e88fe2936cdb7df451b850be15884"],["/2016/12/31/LeetCode-116-Populating-Next-Right-Pointers-in-Each-Node/index.html","a8b19c7ce6396698819e57f7a6ad93e8"],["/2017/01/02/LeetCode-367-Valid-Perfect-Square/index.html","8b788d11334dd907c35145a3982af741"],["/2017/01/02/LeetCode-74-Search-a-2D-matrix/index.html","58f838d73cd6667c6eb351e2e467faf5"],["/2017/01/03/LeetCode-125-Valid-Palindrome/index.html","f12894067440183814bcff1732829c4b"],["/2017/01/03/Swift-官方Swift-Tour学习笔记/index.html","5554c599bd57aeac0ce64ddc73abe253"],["/2017/01/04/LeetCode-103-Binary-Tree-Zigzag-Level-Order-Traversal/index.html","fcd443e49c18f53abf461c5b9c094038"],["/2017/01/09/LeetCode-397-Integer-Replacement/index.html","8b3afff9426bb2936b85b4bb3bf6f6b3"],["/2017/01/10/LeetCode-419-Battleships-in-a-Board/index.html","b3080f79599617abc88beff7513eeb50"],["/2017/01/10/Ng-Angular1-x复习笔记/index.html","1b5d5e83597d453051e3c2420d28fcd8"],["/2017/01/11/LeetCode-406-Queue-Reconstruction-by-Height/index.html","bd6087ced643762af15ab0986497756e"],["/2017/01/13/LeetCode-357-Count-Numbers-with-Unique-Digits/index.html","ef4d82985e374c19743b05b99dcabe6a"],["/2017/01/13/iOS-Start-Developing-iOS-Apps-Apple-Doc/index.html","b573d4eaff48a5d54a8e6eb3cc1b9d98"],["/2017/01/18/iOS-官网-iOS-Apps-Developing-2/index.html","c141a5b6cd7d6bfb0f3cfea8f13c42aa"],["/2017/01/22/Javascript忍者秘籍-读后感/index.html","f1fa94f1d789e80091c7bac25ee13017"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/index.html","a2ab6cf456f64a70537ddbcb114c75fc"],["/2017/01/25/iOS-官网的iOS-Guide-in-Swift-3/lifecircle.png","8dbd58d7b830402462d9708acbbfd01d"],["/2017/02/14/iOS-官网的iOS-Guide-in-Swift-4/index.html","31b855deab5a5412b6693e1fcc52c0d9"],["/2017/02/15/iOS-官网的iOS-Guide-in-Swift-5/index.html","69aba73f7deb6db4ba0ac6fbc544d9e5"],["/2017/02/17/iOS-官网的iOS-Guide-in-Swift-6/index.html","37ff7df2f9b61300b6c431660b1d9916"],["/2017/02/17/鹅厂打工日记——Redux文档学习-1/index.html","9f71b571f8b6832bfcac37f49df9f9eb"],["/2017/02/28/《The-JS-you-Dont-know》读书笔记/index.html","d2fa82558ed3cf2140a82470e357824d"],["/2017/03/02/鹅厂打工日记——Jest-强大的React测试工具/index.html","fbfcd7a029b63ea385bbd43d343ffcf0"],["/2017/03/03/Google-Android-System-learning/index.html","19dab03359cc67d56dd25a98a68a030f"],["/2017/03/04/iOS-官网的iOS-Guide-in-Swift-7/index.html","fa802292cbe8d71aa25a21f01fa3cc42"],["/2017/03/10/为什么WebAssembly能给javascript提速？/index.html","693b5002ff8870c754221aacb413c326"],["/2017/03/10/为什么WebAssembly能给javascript提速？/langs.png","f5f05c390e7205b40b3dd18286926b9f"],["/2017/03/10/为什么WebAssembly能给javascript提速？/toolchain.png","a1fd026158f74b82a81e43ce298ece17"],["/2017/03/14/鹅厂打工日记-React-loading组件设计/index.html","fc24f9d3435a152029d5be12f1dab1c4"],["/2017/03/27/一个小坑-如何更改base64编码的svg图片颜色？/index.html","6928edd7cd4d3c9f8c2c9aa450d9cdca"],["/2017/03/30/鹅厂打工日记-Mocha/index.html","4a5b059626f833d10ace1d8a3e3e0531"],["/2017/03/31/鹅厂打工日记-Karma的使用和与Mocha的配合/index.html","6673b1547be4c0b2cad94aaed2b54cf4"],["/2017/04/14/鹅厂打工日记-Webpack原理/index.html","063c74bce718823bb70bf327a4499ae6"],["/2017/06/01/pwn-Windows逆向神器-OD-IDA/index.html","015c0cff69edc8c14d6f5c223e574ea9"],["/2017/06/16/【鹅厂打工日记】iOS的UIWebView和Javascript的交互/index.html","1f428efc76379d9a56578d0eba6311d3"],["/2017/06/21/CSS的新属性：clip-path和mask/clip-path.gif","159f17e0931cc07a3b1d3e91e73c0687"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/firefox-mask-vs-clip2.gif","93d99f9bb711759fcdb821fc92aeb4cb"],["/2017/06/21/CSS的新属性：clip-path和mask/font.png","3668a198be8d7bcb9de9e7561f3a1229"],["/2017/06/21/CSS的新属性：clip-path和mask/img_in_text.png","9e75d6a59cef73b29a9f70e613346c39"],["/2017/06/21/CSS的新属性：clip-path和mask/index.html","8ba7a0f4a51dd4352f7df9946ab37bbe"],["/2017/06/21/CSS的新属性：clip-path和mask/move_mouse.gif","d60b8bddb40969b83a59abe8b63b67c6"],["/2017/06/22/Hybird的关键：WebView相关-1/index.html","653011e4e386b8391edbd3c42c7de688"],["/2017/09/08/编写Webpack插件笔记/index.html","5b22048ba66f3765ef8d5aeb83cd646c"],["/2017/11/30/Mobx学习笔记/index.html","cea54d7d7879a6497f9ca53fe4c13f44"],["/2017/11/30/Test-travis-ci/index.html","0735b2132eb373ce3695bfb4c990c7c0"],["/2017/12/01/Use-flow-type-in-React-project/index.html","d24b5944c6395fd1da3578901360dcbd"],["/2017/12/06/modify-ssh-config-to-login-with-different-rsa-key/index.html","c201d982ecb49de9c5beb5ac3e7bd339"],["/2018/06/26/flex-end-make-scrollbar-disappear/index.html","f2df9ff559040c75789bca5e6deec45f"],["/2018/06/26/redux-state-change-but-react-not-render/index.html","8fc787c453d821c52525d7fd4fe43af9"],["/2018/07/02/阅读代码和英文文章小技巧/index.html","764ea6cd70ac58a99b5179b8fce3dd64"],["/2018/07/12/UI库的目录设计和babel-plugin-import/index.html","534ccfc657353cc6835b90eae1bb9f21"],["/2018/07/31/SDT自我决定理论/index.html","954a8558583eb669907315899ec6c27f"],["/2018/08/04/React16源码解析-As-required-order/index.html","62d297526663e7f91544babff728de2b"],["/2018/08/05/React16源码解析（Fiber）/index.html","1b3b500027096065ec4e332505a249e7"],["/2018/08/05/React16源码解析（ReactDOM）/index.html","e1ee3e877e31908537aed0cc9334df08"],["/2018/08/27/释放webpack的真正潜力/index.html","1e81b7cf23d252abd6c99ad1b6889899"],["/2018/08/27/释放webpack的真正潜力/vscode-demo.png","4414ef03ced847b4673f625517a1c692"],["/2018/08/30/iOS-webview-scrolling-issue/index.html","d1db32e5dc3225ffb8d74fbf8e41d175"],["/2018/09/17/升级到Babel-7的经验/index.html","646260eccf63afaa9b520a7f9e20683a"],["/2018/10/16/React-tip组件的设计/index.html","7f1a5756fa30b9fdee6cf922832d5306"],["/2018/11/17/【译】Facebook如何通过工具学习自动修复Bug ？/index.html","2ccd7047e9d7a03df837e5aa0d5ff946"],["/2018/12/08/jenkins问题定位/index.html","f50fc52a769315ab1f33645310b61bda"],["/2018/12/21/React-SSR实践-压测/index.html","2c3ca4de81774dec8b438dcc380f2c5e"],["/2019/01/11/如何使用iOS的捷径生成PWA图标和web-app-manifest/index.html","be71eebe3b1f67d262af62e00493f106"],["/2019/01/21/item2-profile-config/index.html","a8bd841edde787d077601726642676b5"],["/2019/01/22/i18n-about-Access-Language/index.html","baaf77cff95d9fc1ac66601aec818ae9"],["/2019/02/27/Node-C-addon-学习笔记/index.html","8855c79252b05143c0e7b132ce104bce"],["/2019/05/16/Modern-Crusaders/index.html","390ea4d40152f8eaf003adc2bea086be"],["/2019/05/22/使用docker构建老旧的前端项目/index.html","82fa332b8d54a1aca75854ad11fef0eb"],["/2019/08/28/关于docker使用的一些记录/index.html","4875cc24725cf7013d2e8ab16799de86"],["/2019/08/30/全干工程师的基本素养/index.html","6fc22f23cf12d4302840995347436a5d"],["/2019/10/30/Using-rxdb-to-make-your-node-application-more-reactive/index.html","802582140c3871df7f583206a9a25cae"],["/2019/11/05/Node中的C-与Javascript如何连接/index.html","055dfef253f81f860a9a25d987167b72"],["/2019/12/02/One-example-of-Typescript-generics/index.html","4ea19aa36595921db59686132c61ea81"],["/2019/12/04/有趣的上网冲浪之旅/index.html","a8a610f7aed914278212d78b3978757f"],["/2020/04/17/企业微信国际化方案总结/index.html","99deed0815000e48da1382b51207d8a4"],["/2020/04/27/come-on-sweet-death/index.html","7808724f5ef8eebdd2b587dbbecb072c"],["/2020/05/21/LeetCode-1277-Count-Square-Submatrices-with-All-Ones/index.html","c10e5c43bca6e933098a9af7063d9955"],["/2020/05/27/LeetCode-886-Possible-Bipartition/index.html","1497f4edaf4ce45c727ae6710640d059"],["/2020/05/28/525-Contiguous-Array/index.html","6db9978d24231059b55a0be1cdf55f2a"],["/2020/06/01/LeetCode-207-Course-Schedule/index.html","b43b4e647478576bf44e34cf1f935ed6"],["/2020/06/03/LeetCode-1029-Two-City-Scheduling/index.html","cdaeafa04fd4a462e870a9a47fe49540"],["/2020/07/21/Node-js-与-epoll/index.html","068a6b3102403825d69ea39c30cdda11"],["/2021/01/14/记录一个babel编译typescript代码的坑/index.html","d32a1bd09fd7fb0568ca762a8285e6d6"],["/2021/03/02/总结一些测试vue组件的经验/index.html","b4b8ae74ced18af22b72116a89ca3c18"],["/2021/03/15/Purpose/index.html","e3a3a3f073f60cc44f781f0d9d7020f4"],["/2021/03/16/和安全团队的斗智斗勇/index.html","24fb1d6d74c83b28b31e68cf531c39fa"],["/2021/10/26/nw-js-的devtool要如何设置成dark主题/index.html","5ed04dba7d5e72dcd62c681feeaa1952"],["/2022/08/10/关于图片处理的一些事情/index.html","3ad9d8fa0cda73ec2668c799b289a47f"],["/404.html","6cd440afe5019c2da18d3516e294f170"],["/about/index.html","9fbbf45a6662040bc959d4886cdaadb8"],["/archive/index.html","400ab942d2ae0fe11aa23d8d2656c076"],["/archives/2016/07/index.html","aa067c5690c48d1fe7106999b3047ec2"],["/archives/2016/08/index.html","95b86dee84cc6896835693309a3a8c75"],["/archives/2016/09/index.html","66399266e40e919b43f267cab66ded69"],["/archives/2016/11/index.html","186261e4cb688c3ca6b2074753101588"],["/archives/2016/11/page/2/index.html","bc33506a09f74d92398ba717ca542620"],["/archives/2016/12/index.html","1f4e82ce72bda5322873bdc9f726cd53"],["/archives/2016/12/page/2/index.html","18e8c95bc4cf3b913a8d7171f47e9146"],["/archives/2016/index.html","f17d1c2a37a6962aff2e118a18126d56"],["/archives/2016/page/2/index.html","27c35bb170895e79f20b5a6521be1524"],["/archives/2016/page/3/index.html","43ae5b4d92a713a09c11bd85bea76b9d"],["/archives/2016/page/4/index.html","fcbaf3c0c7a9a0cf776d0aa33bf69590"],["/archives/2017/01/index.html","b98dbda473aa85eeefa60f611c074a46"],["/archives/2017/01/page/2/index.html","d070f4c5976af84c1d40d24e65f9feed"],["/archives/2017/02/index.html","37bb6ab2167b524979060769c63ebe5c"],["/archives/2017/03/index.html","3d0dcb5a21bf932dd7a6b3142d570a3c"],["/archives/2017/04/index.html","c5ada3d440c4b6bbc034e2f5a24ba5fe"],["/archives/2017/06/index.html","f5ebf2efcab1b196225187ee727357b4"],["/archives/2017/09/index.html","0a630233080077a43e137925fdc3a859"],["/archives/2017/11/index.html","593d3307f07e1c382fe07d0d8412f548"],["/archives/2017/12/index.html","71f2ddf68322ca0c49d2842c9d1ebdf4"],["/archives/2017/index.html","f90d471d16cd71ed11dbcd727bd9e030"],["/archives/2017/page/2/index.html","d584199b317780bea2650f52118dcd6d"],["/archives/2017/page/3/index.html","b3657932f3e607692eb5425c3df73788"],["/archives/2017/page/4/index.html","c8680462499dbcca8f2ddd83ae82dd62"],["/archives/2018/06/index.html","605df5c16f6d341e663a5c753ae2eafd"],["/archives/2018/07/index.html","2af65ae21b63f8f8de97cf6ba2dd0f41"],["/archives/2018/08/index.html","a0489102e969123fd8cec75357ea3a33"],["/archives/2018/09/index.html","895b0128459c932269e627c14f6563eb"],["/archives/2018/10/index.html","09e4fadb0c391942377c187d67e6c929"],["/archives/2018/11/index.html","a83d4e3a99f7bcdf7b12744c5d744238"],["/archives/2018/12/index.html","7da68f8856e908d47e73fab0c974693b"],["/archives/2018/index.html","0e760823bc608fdeb2ad9bba1b23e0cb"],["/archives/2018/page/2/index.html","c481379e75ee9d37a00f282bb6a204c0"],["/archives/2019/01/index.html","5de900cfd9f159bcfecf975e2831cf6a"],["/archives/2019/02/index.html","0625b344376257c646d07465ef779e59"],["/archives/2019/05/index.html","ebaf644d196d618474232cbfbc14be90"],["/archives/2019/08/index.html","82c4a3a9d8c78c88fcac10c8ba721514"],["/archives/2019/10/index.html","db637f78879239c2209652886f878321"],["/archives/2019/11/index.html","848ae7357878e9c2b1a6289f055fafdb"],["/archives/2019/12/index.html","609636b84681e3dfcaef1c957dca25f8"],["/archives/2019/index.html","1c11dfefaf9e3b0b5533af32bee7203f"],["/archives/2019/page/2/index.html","67c037d3c4a5323e4d1528e9abc5df03"],["/archives/2020/04/index.html","3989ad7d7f4cb8579b874bb6b2db0b91"],["/archives/2020/05/index.html","f38ec0666cb632dd693d254c31cbd8f0"],["/archives/2020/06/index.html","b3ad8ece27626d97fe10e935e15aa81c"],["/archives/2020/07/index.html","028e4a94e44235e5cd06df36ac6ef941"],["/archives/2020/index.html","27a3761faa74969b9005475ec687810b"],["/archives/2021/01/index.html","d8faa96b70e0c7ca670a16dba84d6d61"],["/archives/2021/03/index.html","a54f75a4e5492075576f235381c70045"],["/archives/2021/10/index.html","050d7c302bc48c0546aad1e12250ee05"],["/archives/2021/index.html","9808c3f16adb927970094a4ad804d314"],["/archives/2022/08/index.html","5c87da70971c8b8a18721b551c148d42"],["/archives/2022/index.html","c7e9989ae70d752746086b201fd1b305"],["/archives/index.html","6a10b2167fb2afbf1acde0d8d06c46d5"],["/archives/page/10/index.html","0e2ebb9f19c5bae1f29c4aea9ebd1684"],["/archives/page/11/index.html","a8265edf86de82ac52f2ecbb47a6e636"],["/archives/page/12/index.html","6f5f200e8ea5c3670c383caf7a5c245a"],["/archives/page/2/index.html","de235e348f18e1da7729e21aebed621c"],["/archives/page/3/index.html","7be5ecb8a6fede1774a9bb6efd755f17"],["/archives/page/4/index.html","3b1f9b8fc7eb2909e72e86d8618d9fed"],["/archives/page/5/index.html","9c69f943eb2d2cee333a8c5456383231"],["/archives/page/6/index.html","45ebee4fe80e812bfe0df4df934d22bc"],["/archives/page/7/index.html","33ed1dcc6461a010fa499d1223adecd4"],["/archives/page/8/index.html","3140f27b8a24890ea228cc8fc8dfa9a7"],["/archives/page/9/index.html","4fc27bd6f3e473ec7b41f3f877b746da"],["/css/bootstrap.css","be665bb9f0f7fc89f515adb828fa0a9b"],["/css/bootstrap.min.css","58a49b3689d699cb72ffda7252d99fcb"],["/css/hux-blog.css","b669eb0511b08a52a6fa0037ef268aed"],["/css/hux-blog.min.css","7c52a5e8fd56bc562ae3115df1013793"],["/css/syntax.css","7f76d2bfdb381ddb5ecae3adbee461e2"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/404-bg.jpg","8f22a4ecdbdd94fd10f25ba8a934fe1d"],["/img/about-bg.jpg","64285147432e40ef95b1a2ff869d75a5"],["/img/avatar.jpg","abbbad189b36cb1d0f01e689d361b034"],["/img/contact-bg.jpg","0e38f139028cb4a784071a5865b9be85"],["/img/home-bg-o.jpg","afbd595ed462e39a93a3b676aa2ea7a4"],["/img/home-bg.jpg","47e73ec09d800c915d07de3628411082"],["/img/icon/android-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/android-icon-192x192.png","3db39aa67a190c7cc228142c38ca3116"],["/img/icon/android-icon-36x36.png","564010017e892a6b155df282eb4219f1"],["/img/icon/android-icon-48x48.png","f253397924f9f26643c7c6a79db8ba1a"],["/img/icon/android-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/android-icon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/apple-icon-114x114.png","0afdd9a37902c212f000f2f32a8e60d2"],["/img/icon/apple-icon-120x120.png","e4751e71e836f37d4c5fe262b0024dad"],["/img/icon/apple-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/apple-icon-152x152.png","93388257840293e1d40e81512fe01ab4"],["/img/icon/apple-icon-180x180.png","6190429a55a26ea620f8738fe3f86f85"],["/img/icon/apple-icon-57x57.png","afca9e7605c04cacf65241ef697b0dc0"],["/img/icon/apple-icon-60x60.png","7d312bb24cb3156775afed056ef7dd7b"],["/img/icon/apple-icon-72x72.png","5ec2b6219eeb2ce5ae6248a38b088de2"],["/img/icon/apple-icon-76x76.png","dda4b1174095d91bda96193e149bc0db"],["/img/icon/apple-icon-precomposed.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/apple-icon.png","c36f75fe9134eb5f6d25720f6dcfd8af"],["/img/icon/favicon-16x16.png","7ff5e2f720a1ff68aff44956a7cd496e"],["/img/icon/favicon-32x32.png","aa12518f9eb4a5cd98aa32232757ada8"],["/img/icon/favicon-96x96.png","dd08e7a189e9d04907ade304879573a7"],["/img/icon/icon-128x128.png","685d7eda0555b997d8a911461592490f"],["/img/icon/icon-144x144.png","2764561b941647d7608be02fa39accef"],["/img/icon/icon-152x152.png","f51cdcd069f2e9a825e3717903b72fa0"],["/img/icon/icon-192x192.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-384x384.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-512x512.png","68893733522f8e023dcf00f33a6b072a"],["/img/icon/icon-72x72.png","cee41433a2cde5c6c96dfa13d1dd4f29"],["/img/icon/icon-96x96.png","d2b978d993bfbb81bfabfcafebfbba4a"],["/img/icon/ms-icon-144x144.png","d202a43f4acc9ab58d8b49db52f3b1bd"],["/img/icon/ms-icon-150x150.png","0de44329bf3786b62d2ff890987f3ebc"],["/img/icon/ms-icon-310x310.png","d533790d064141237c076cd34d7f229d"],["/img/icon/ms-icon-70x70.png","e604c81e7280860ff7e25a743756c907"],["/img/tag-bg.jpg","f7631fc49641e65a4ea663378526e323"],["/index.html","e94c1a85dc9c283035f39732c1a8b665"],["/js/bootstrap.js","6bfd171748f088ad503cb07c080b1f33"],["/js/bootstrap.min.js","046ba2b5f4cff7d2eaaa1af55caa9fd8"],["/js/hux-blog.js","c55159aa9ce700288f00a5ac4d6c8597"],["/js/hux-blog.min.js","506a54b6cbf3629bb9e71b1bd09e6317"],["/js/jquery.js","cf26f8f0ccb06be71e92d8db0fb64ab5"],["/js/jquery.min.js","32015dd42e9582a80a84736f5d9a44d7"],["/js/jquery.nav.js","773b606a62ed173595099c9238c4728a"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/motto.min.js","32ac04a01348373cdd7d9799ca1baa5e"],["/js/scrollreveal.min.js","4606eec941fee1fea86cf4494c4f227f"],["/leetcode/index.html","ec0b073fe106d4cb9653a6b02465b869"],["/page/10/index.html","92df7cb8d603ad10ac1da1f52ca32f5d"],["/page/11/index.html","d00c9472e15673d07a22d3a2cee2b3aa"],["/page/12/index.html","7c532e87c71b1a8be32612f8e44526b2"],["/page/2/index.html","90b3aa515813dbbdae90a6c9c5d65c98"],["/page/3/index.html","b6ed9b2b9d7cd0cfb71845aa3f9ba101"],["/page/4/index.html","a995701a6be320aed963b06599ffff5b"],["/page/5/index.html","010dcf5730028c67813de685f4448ab9"],["/page/6/index.html","3bc256110779f2366b03de39d034b56d"],["/page/7/index.html","997ed380165ae498e490609713987421"],["/page/8/index.html","3b8bb4bc04be0ce535b60dc7fcaed41a"],["/page/9/index.html","7d12acf0946174f71e3a113c6672faba"],["/sw-register.js","a0b65b9e230856d1276db1c3f9defa45"],["/tags/Android/index.html","ae8aad9dd5e57de5b2391bfb4f14ca62"],["/tags/Angular2/index.html","218fe1345224d0140c844491902c37fc"],["/tags/Babel/index.html","d87682fddede2504a58987a2a907b0d0"],["/tags/C/index.html","71e490d3a153304c6b2e53e07208de94"],["/tags/CSS/index.html","5640af2010ff9f727db68b1b17d364b3"],["/tags/Coffeescript/index.html","7992e13550a2dc8842f263d6b2051854"],["/tags/Compiler/index.html","728b36a8a80b94b125529eec9a1662e5"],["/tags/Component/index.html","5d4c6169fb2db502a10220a0be6a59ab"],["/tags/Design-Pattern/index.html","f158fe959394e93a76bcd89e420d6d9d"],["/tags/Docker/index.html","df174ca4f82c5bafd95ace9759d986e8"],["/tags/ES6/index.html","d352330d5eb7db17f537963dcc6ee2b9"],["/tags/Game/index.html","ff431a367ff92b3cbf9bf692dc804464"],["/tags/Gulp/index.html","f418415279b04b404cfaad4fccbc4ada"],["/tags/Hybird/index.html","da53b5229c65e92a44201d9481fd4865"],["/tags/JIT/index.html","8c322553c90f9ea1748eb50452096cdd"],["/tags/Javascirpt/index.html","9593e148499a940fb35cf27217c022b3"],["/tags/Javascript/index.html","dac71d330363a45bd92716bce903d234"],["/tags/Jest/index.html","d3fc560c6df4fb73fabdac7f2a18f6d7"],["/tags/LeetCode/index.html","4f0603cba10ad268add6a64bc1cecb9b"],["/tags/LeetCode/page/2/index.html","3f17d5fd82c513c6e7de71acc700b70d"],["/tags/LeetCode/page/3/index.html","c10062da60ee40a8313fa7a249f56fb4"],["/tags/Leetcode/index.html","a25aab702eb4659929b1fc1e2188a234"],["/tags/Linux/index.html","c57c2e765a5a165f3aca1ae29b5b4a3a"],["/tags/Lyrics/index.html","04e5b3600e15b16beb119e5915d9338e"],["/tags/Mobx/index.html","552f9e83ef2c0b02454d3bd743f69ee4"],["/tags/Mocha/index.html","18435c77b56244aedada776ab52b61d7"],["/tags/Module/index.html","125cac12bb57a3340f15ce2c28182693"],["/tags/Node-js/index.html","ae7cf01da2dfa9a47f8829445d77b633"],["/tags/Node/index.html","677e5ea1d8b5d140e6978677fb67af70"],["/tags/Note/index.html","2786520078462a7d106cd32deda072ae"],["/tags/Object-C/index.html","7ba67e66cd18a3fb4bd5e8348b16d80e"],["/tags/Objective-C/index.html","fa9ca8a6a6e21460087995a90bbf7304"],["/tags/PHP/index.html","515c09ffde1ff43fc831656cfa17ce62"],["/tags/Python/index.html","ed42f0ce9df528ad71f738ac8f065cd1"],["/tags/Python/page/2/index.html","23f2b0a455af2e81b4da8dad87414206"],["/tags/Python/page/3/index.html","99a94ad56c2c2639c6e53cb10159c4d7"],["/tags/React-js/index.html","c9415a4b99ad1de93c5e2ada455d04f0"],["/tags/React/index.html","5dee0c3d62adfac941bd2e2302f2cfba"],["/tags/Redux/index.html","568e329fd5308118eab2d811951f49f2"],["/tags/Require-js/index.html","2bb45fe3092d1bc166ab5789d02802e2"],["/tags/SSR/index.html","f80dadff2de8fbf8d702308344df7e90"],["/tags/SegmentFault/index.html","9c187786cc56e0615b0cf24c2df1a9b6"],["/tags/Swift/index.html","a3570d61eb77c6cd1e001213cb2d1c89"],["/tags/Template-Engine/index.html","fc133faee844f381d3474fc6d46a7679"],["/tags/Test/index.html","7bc954a61429340a6d6a98a301f4a9c6"],["/tags/Twig/index.html","e853cb3226cdd7b340a6d09963aa5cf2"],["/tags/Typescript/index.html","9cd835cb49edf2e962c0d069826a08ef"],["/tags/V8/index.html","010c4950b1a831b6200291f45531317c"],["/tags/WebAPI/index.html","438e2940005540c67cd94ba9e357a00d"],["/tags/Webpack/index.html","b6870c31cbee4fe6029ff446fdec5b25"],["/tags/Webview/index.html","967f6707210108ce1256cb64c84be377"],["/tags/Windows/index.html","0a363dfe9e013443e7abdbac8faab95f"],["/tags/babel/index.html","932636dcc17d7a424287317f7417a6cb"],["/tags/base64/index.html","85a785f398821c82d0610c2cfcfae5bd"],["/tags/bootstrap/index.html","f127c71192127b2ae2a6b55ce701b13d"],["/tags/ci/index.html","75a7493a1ffb371bbd47bd192de6716a"],["/tags/codepen/index.html","c51bd0758e62c86edb50f3cbeea27395"],["/tags/compact/index.html","55b9bc0a4b793a05b22ba75d71b08fe4"],["/tags/css/index.html","a581278b2386a68725f159dedfc744a1"],["/tags/database/index.html","f35a90893c45235b3b0f97e586bb4c75"],["/tags/docker/index.html","43c096cd2591dd2db66c32794fbf77de"],["/tags/event/index.html","b23bd4759ea9f3b3fe0180b961fe79de"],["/tags/facebook/index.html","80e9419c550bf246d13a8bc8a1d90d65"],["/tags/flask/index.html","3e15ba498ede4ed3c85ef25e38811099"],["/tags/flow/index.html","3a63b990b134eb91a1bf239fecd24b1a"],["/tags/i18n/index.html","25aebe71ce1c42922117b8674c4ad778"],["/tags/iOS/index.html","02d6ba0f1d97fa57fcf2df2c124401c4"],["/tags/iOS/page/2/index.html","f2b70393720aeb2ca58a996b40dc0427"],["/tags/index.html","5b5d4afab0d1cecd0a3d77d566f3c598"],["/tags/javascirpt/index.html","f921c68280024895d32f3921ea200d1f"],["/tags/jest/index.html","fb440440dbf44877b0d155dd34907ccb"],["/tags/jquery/index.html","b900c18067743ce6ca04bafc90af280c"],["/tags/life/index.html","07891dcb2a0a78c71dde10ee86cec22b"],["/tags/lyrics/index.html","596d43f59924191788f5846cbb7825f8"],["/tags/node/index.html","46adabe7ffe9b7ff53f719709d19862b"],["/tags/npm/index.html","982f1dac6045ef575b5880fd252c2a18"],["/tags/pwn/index.html","57f17d06a7060a9ac0f0193e1cd8036e"],["/tags/python/index.html","cd454fc1bb3dbea2ea7a8fde11ab2588"],["/tags/reactive/index.html","7990c990c77c243981dd1942edf7f1ad"],["/tags/shell/index.html","dd1b8cb76e21b42e2168eab335ee711f"],["/tags/ssh/index.html","afbec24f3a02a27ce27a65821a905811"],["/tags/svg/index.html","b3871797e46183cf9ca0daba9c7ec91a"],["/tags/translate/index.html","90bc97dada74977fae21206129930c53"],["/tags/translation/index.html","837d41b0e1a758fe82bb4333e6f0b768"],["/tags/typescript/index.html","791aafe3891691046a9e4da39a222673"],["/tags/underscore/index.html","a23dc5ae348b410c249e6928b76c19d5"],["/tags/video-js/index.html","8fd1381fecc90696979b0ee22d1f0aae"],["/tags/webpack/index.html","38ce109cd545e41c839455ab49181338"],["/tags/web安全/index.html","7de2aac85c12d3951301170c4ee2af1f"],["/tags/函数式编程/index.html","c7b6e33513c01561856baa94fc1306f1"],["/tags/各种开发者大会/index.html","0cabb376aca924dd4e20cfeefefa72a5"],["/tags/文档/index.html","5a5136ffdd00a5dce890c5a1fbcdb3df"],["/tags/构建工具/index.html","e32d8c3b9fbc7ed57df1c9144abbc222"],["/tags/测试/index.html","e31964486e455ae17164ce5081ef1d81"],["/tags/生活/index.html","9095361e10270f63ddbe2a5a836a176a"],["/tags/笔记/index.html","f97e984e59cfa23067a37282cac1e21d"],["/tags/读书笔记/index.html","dbb978f4a81249bf5b0edcb0ec525805"],["/tags/逆向/index.html","b7ef0ad0fef46eea9e83663cdc7a6574"],["/tags/随笔/index.html","de8ac019fe34017733007756210fec2a"],["/tags/－-Test-Karma/index.html","fbea9501c5f4b43692a88396c0776f7b"],["/tags/－-杂谈/index.html","a3b912f7abbb56803a5d88b4ef854d25"],["/tags/－生活/index.html","06f8f3f3718c1e3b93cc69b8669ffd52"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
