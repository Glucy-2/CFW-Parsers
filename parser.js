let areas =[
    {"flag":"🇦🇨","name":"阿森松岛"},
    {"flag":"🇦🇩","name":"安道尔"},
    {"flag":"🇦🇪","name":"阿拉伯联合酋长国"},
    {"flag":"🇦🇫","name":"阿富汗"},
    {"flag":"🇦🇬","name":"安提瓜和巴布达"},
    {"flag":"🇦🇮","name":"安圭拉"},
    {"flag":"🇦🇱","name":"阿尔巴尼亚"},
    {"flag":"🇦🇲","name":"亚美尼亚"},
    {"flag":"🇦🇴","name":"安哥拉"},
    {"flag":"🇦🇶","name":"南极洲"},
    {"flag":"🇦🇷","name":"阿根廷"},
    {"flag":"🇦🇸","name":"美属萨摩亚"},
    {"flag":"🇦🇹","name":"奥地利"},
    {"flag":"🇦🇺","name":"澳大利亚"},
    {"flag":"🇦🇼","name":"阿鲁巴"},
    {"flag":"🇦🇽","name":"奥兰群岛"},
    {"flag":"🇦🇿","name":"阿塞拜疆"},
    {"flag":"🇧🇦","name":"波斯尼亚和黑塞哥维那"},
    {"flag":"🇧🇧","name":"巴巴多斯"},
    {"flag":"🇧🇩","name":"孟加拉国"},
    {"flag":"🇧🇪","name":"比利时"},
    {"flag":"🇧🇫","name":"布基纳法索"},
    {"flag":"🇧🇬","name":"保加利亚"},
    {"flag":"🇧🇭","name":"巴林"},
    {"flag":"🇧🇮","name":"布隆迪"},
    {"flag":"🇧🇯","name":"贝宁"},
    {"flag":"🇧🇱","name":"圣巴泰勒米"},
    {"flag":"🇧🇲","name":"百慕大"},
    {"flag":"🇧🇳","name":"文莱"},
    {"flag":"🇧🇴","name":"玻利维亚"},
    {"flag":"🇧🇶","name":"荷属加勒比区"},
    {"flag":"🇧🇷","name":"巴西"},
    {"flag":"🇧🇸","name":"巴哈马"},
    {"flag":"🇧🇹","name":"不丹"},
    {"flag":"🇧🇻","name":"布韦岛"},
    {"flag":"🇧🇼","name":"博茨瓦纳"},
    {"flag":"🇧🇾","name":"白俄罗斯"},
    {"flag":"🇧🇿","name":"伯利兹"},
    {"flag":"🇨🇦","name":"加拿大"},
    {"flag":"🇨🇨","name":"科科斯（基林）群岛"},
    {"flag":"🇨🇩","name":"刚果（金）"},
    {"flag":"🇨🇫","name":"中非共和国"},
    {"flag":"🇨🇬","name":"刚果（布）"},
    {"flag":"🇨🇭","name":"瑞士"},
    {"flag":"🇨🇮","name":"科特迪瓦"},
    {"flag":"🇨🇰","name":"库克群岛"},
    {"flag":"🇨🇱","name":"智利"},
    {"flag":"🇨🇲","name":"喀麦隆"},
    {"flag":"🇨🇳","name":"中国"},
    {"flag":"🇨🇴","name":"哥伦比亚"},
    {"flag":"🇨🇵","name":"克利珀顿岛"},
    {"flag":"🇨🇷","name":"哥斯达黎加"},
    {"flag":"🇨🇺","name":"古巴"},
    {"flag":"🇨🇻","name":"佛得角"},
    {"flag":"🇨🇼","name":"库拉索"},
    {"flag":"🇨🇽","name":"圣诞岛"},
    {"flag":"🇨🇾","name":"塞浦路斯"},
    {"flag":"🇨🇿","name":"捷克"},
    {"flag":"🇩🇪","name":"德国"},
    {"flag":"🇩🇬","name":"迪戈加西亚岛"},
    {"flag":"🇩🇯","name":"吉布提"},
    {"flag":"🇩🇰","name":"丹麦"},
    {"flag":"🇩🇲","name":"多米尼克"},
    {"flag":"🇩🇴","name":"多米尼加共和国"},
    {"flag":"🇩🇿","name":"阿尔及利亚"},
    {"flag":"🇪🇦","name":"休达及梅利利亚"},
    {"flag":"🇪🇨","name":"厄瓜多尔"},
    {"flag":"🇪🇪","name":"爱沙尼亚"},
    {"flag":"🇪🇬","name":"埃及"},
    {"flag":"🇪🇭","name":"西撒哈拉"},
    {"flag":"🇪🇷","name":"厄立特里亚"},
    {"flag":"🇪🇸","name":"西班牙"},
    {"flag":"🇪🇹","name":"埃塞俄比亚"},
    {"flag":"🇪🇺","name":"欧盟"},
    {"flag":"🇫🇮","name":"芬兰"},
    {"flag":"🇫🇯","name":"斐济"},
    {"flag":"🇫🇰","name":"福克兰群岛"},
    {"flag":"🇫🇲","name":"密克罗尼西亚"},
    {"flag":"🇫🇴","name":"法罗群岛"},
    {"flag":"🇫🇷","name":"法国"},
    {"flag":"🇬🇦","name":"加蓬"},
    {"flag":"🇬🇧","name":"英国"},
    {"flag":"🇬🇩","name":"格林纳达"},
    {"flag":"🇬🇪","name":"格鲁吉亚"},
    {"flag":"🇬🇫","name":"法属圭亚那"},
    {"flag":"🇬🇬","name":"根西岛"},
    {"flag":"🇬🇭","name":"加纳"},
    {"flag":"🇬🇮","name":"直布罗陀"},
    {"flag":"🇬🇱","name":"格陵兰"},
    {"flag":"🇬🇲","name":"冈比亚"},
    {"flag":"🇬🇳","name":"几内亚"},
    {"flag":"🇬🇵","name":"瓜德罗普"},
    {"flag":"🇬🇶","name":"赤道几内亚"},
    {"flag":"🇬🇷","name":"希腊"},
    {"flag":"🇬🇸","name":"南乔治亚和南桑威奇群岛"},
    {"flag":"🇬🇹","name":"危地马拉"},
    {"flag":"🇬🇺","name":"关岛"},
    {"flag":"🇬🇼","name":"几内亚比绍"},
    {"flag":"🇬🇾","name":"圭亚那"},
    {"flag":"🇭🇰","name":"香港"},
    {"flag":"🇭🇲","name":"赫德岛和麦克唐纳群岛"},
    {"flag":"🇭🇳","name":"洪都拉斯"},
    {"flag":"🇭🇷","name":"克罗地亚"},
    {"flag":"🇭🇹","name":"海地"},
    {"flag":"🇭🇺","name":"匈牙利"},
    {"flag":"🇮🇨","name":"加纳利群岛"},
    {"flag":"🇮🇩","name":"印度尼西亚"},
    {"flag":"🇮🇪","name":"爱尔兰"},
    {"flag":"🇮🇱","name":"以色列"},
    {"flag":"🇮🇲","name":"马恩岛"},
    {"flag":"🇮🇳","name":"印度"},
    {"flag":"🇮🇴","name":"英属印度洋领地"},
    {"flag":"🇮🇶","name":"伊拉克"},
    {"flag":"🇮🇷","name":"伊朗"},
    {"flag":"🇮🇸","name":"冰岛"},
    {"flag":"🇮🇹","name":"意大利"},
    {"flag":"🇯🇪","name":"泽西岛"},
    {"flag":"🇯🇲","name":"牙买加"},
    {"flag":"🇯🇴","name":"约旦"},
    {"flag":"🇯🇵","name":"日本"},
    {"flag":"🇰🇪","name":"肯尼亚"},
    {"flag":"🇰🇬","name":"吉尔吉斯斯坦"},
    {"flag":"🇰🇭","name":"柬埔寨"},
    {"flag":"🇰🇮","name":"基里巴斯"},
    {"flag":"🇰🇲","name":"科摩罗"},
    {"flag":"🇰🇳","name":"圣基茨和尼维斯"},
    {"flag":"🇰🇵","name":"朝鲜"},
    {"flag":"🇰🇷","name":"韩国"},
    {"flag":"🇰🇼","name":"科威特"},
    {"flag":"🇰🇾","name":"开曼群岛"},
    {"flag":"🇰🇿","name":"哈萨克斯坦"},
    {"flag":"🇱🇦","name":"老挝"},
    {"flag":"🇱🇧","name":"黎巴嫩"},
    {"flag":"🇱🇨","name":"圣卢西亚"},
    {"flag":"🇱🇮","name":"列支敦士登"},
    {"flag":"🇱🇰","name":"斯里兰卡"},
    {"flag":"🇱🇷","name":"利比里亚"},
    {"flag":"🇱🇸","name":"莱索托"},
    {"flag":"🇱🇹","name":"立陶宛"},
    {"flag":"🇱🇺","name":"卢森堡"},
    {"flag":"🇱🇻","name":"拉脱维亚"},
    {"flag":"🇱🇾","name":"利比亚"},
    {"flag":"🇲🇦","name":"摩洛哥"},
    {"flag":"🇲🇨","name":"摩纳哥"},
    {"flag":"🇲🇩","name":"摩尔多瓦"},
    {"flag":"🇲🇪","name":"黑山"},
    {"flag":"🇲🇫","name":"法属圣马丁"},
    {"flag":"🇲🇬","name":"马达加斯加"},
    {"flag":"🇲🇭","name":"马绍尔群岛"},
    {"flag":"🇲🇰","name":"北马其顿"},
    {"flag":"🇲🇱","name":"马里"},
    {"flag":"🇲🇲","name":"缅甸"},
    {"flag":"🇲🇳","name":"蒙古"},
    {"flag":"🇲🇴","name":"澳门"},
    {"flag":"🇲🇵","name":"北马里亚纳群岛"},
    {"flag":"🇲🇶","name":"马提尼克"},
    {"flag":"🇲🇷","name":"毛里塔尼亚"},
    {"flag":"🇲🇸","name":"蒙特塞拉特"},
    {"flag":"🇲🇹","name":"马耳他"},
    {"flag":"🇲🇺","name":"毛里求斯"},
    {"flag":"🇲🇻","name":"马尔代夫"},
    {"flag":"🇲🇼","name":"马拉维"},
    {"flag":"🇲🇽","name":"墨西哥"},
    {"flag":"🇲🇾","name":"马来西亚"},
    {"flag":"🇲🇿","name":"莫桑比克"},
    {"flag":"🇳🇦","name":"纳米比亚"},
    {"flag":"🇳🇨","name":"新喀里多尼亚"},
    {"flag":"🇳🇪","name":"尼日尔"},
    {"flag":"🇳🇫","name":"诺福克岛"},
    {"flag":"🇳🇬","name":"尼日利亚"},
    {"flag":"🇳🇮","name":"尼加拉瓜"},
    {"flag":"🇳🇱","name":"荷兰"},
    {"flag":"🇳🇴","name":"挪威"},
    {"flag":"🇳🇵","name":"尼泊尔"},
    {"flag":"🇳🇷","name":"瑙鲁"},
    {"flag":"🇳🇺","name":"纽埃"},
    {"flag":"🇳🇿","name":"新西兰"},
    {"flag":"🇴🇲","name":"阿曼"},
    {"flag":"🇵🇦","name":"巴拿马"},
    {"flag":"🇵🇪","name":"秘鲁"},
    {"flag":"🇵🇫","name":"法属波利尼西亚"},
    {"flag":"🇵🇬","name":"巴布亚新几内亚"},
    {"flag":"🇵🇭","name":"菲律宾"},
    {"flag":"🇵🇰","name":"巴基斯坦"},
    {"flag":"🇵🇱","name":"波兰"},
    {"flag":"🇵🇲","name":"圣皮埃尔和密克隆群岛"},
    {"flag":"🇵🇳","name":"皮特凯恩群岛"},
    {"flag":"🇵🇷","name":"波多黎各"},
    {"flag":"🇵🇸","name":"巴勒斯坦领土"},
    {"flag":"🇵🇹","name":"葡萄牙"},
    {"flag":"🇵🇼","name":"帕劳"},
    {"flag":"🇵🇾","name":"巴拉圭"},
    {"flag":"🇶🇦","name":"卡塔尔"},
    {"flag":"🇷🇪","name":"留尼汪"},
    {"flag":"🇷🇴","name":"罗马尼亚"},
    {"flag":"🇷🇸","name":"塞尔维亚"},
    {"flag":"🇷🇺","name":"俄罗斯"},
    {"flag":"🇷🇼","name":"卢旺达"},
    {"flag":"🇸🇦","name":"沙特阿拉伯"},
    {"flag":"🇸🇧","name":"所罗门群岛"},
    {"flag":"🇸🇨","name":"塞舌尔"},
    {"flag":"🇸🇩","name":"苏丹"},
    {"flag":"🇸🇪","name":"瑞典"},
    {"flag":"🇸🇬","name":"新加坡"},
    {"flag":"🇸🇭","name":"圣赫勒拿"},
    {"flag":"🇸🇮","name":"斯洛文尼亚"},
    {"flag":"🇸🇯","name":"斯瓦尔巴和扬马延"},
    {"flag":"🇸🇰","name":"斯洛伐克"},
    {"flag":"🇸🇱","name":"塞拉利昂"},
    {"flag":"🇸🇲","name":"圣马力诺"},
    {"flag":"🇸🇳","name":"塞内加尔"},
    {"flag":"🇸🇴","name":"索马里"},
    {"flag":"🇸🇷","name":"苏里南"},
    {"flag":"🇸🇸","name":"南苏丹"},
    {"flag":"🇸🇹","name":"圣多美和普林西比"},
    {"flag":"🇸🇻","name":"萨尔瓦多"},
    {"flag":"🇸🇽","name":"荷属圣马丁"},
    {"flag":"🇸🇾","name":"叙利亚"},
    {"flag":"🇸🇿","name":"斯威士兰"},
    {"flag":"🇹🇦","name":"特里斯坦-达库尼亚群岛"},
    {"flag":"🇹🇨","name":"特克斯和凯科斯群岛"},
    {"flag":"🇹🇩","name":"乍得"},
    {"flag":"🇹🇫","name":"法属南部领地"},
    {"flag":"🇹🇬","name":"多哥"},
    {"flag":"🇹🇭","name":"泰国"},
    {"flag":"🇹🇯","name":"塔吉克斯坦"},
    {"flag":"🇹🇰","name":"托克劳"},
    {"flag":"🇹🇱","name":"东帝汶"},
    {"flag":"🇹🇲","name":"土库曼斯坦"},
    {"flag":"🇹🇳","name":"突尼斯"},
    {"flag":"🇹🇴","name":"汤加"},
    {"flag":"🇹🇷","name":"土耳其"},
    {"flag":"🇹🇹","name":"特立尼达和多巴哥"},
    {"flag":"🇹🇻","name":"图瓦卢"},
    {"flag":"🇹🇼","name":"台湾"},
    {"flag":"🇹🇿","name":"坦桑尼亚"},
    {"flag":"🇺🇦","name":"乌克兰"},
    {"flag":"🇺🇬","name":"乌干达"},
    {"flag":"🇺🇲","name":"美国本土外小岛屿"},
    {"flag":"🇺🇳","name":"联合国"},
    {"flag":"🇺🇸","name":"美国"},
    {"flag":"🇺🇾","name":"乌拉圭"},
    {"flag":"🇺🇿","name":"乌兹别克斯坦"},
    {"flag":"🇻🇦","name":"梵蒂冈"},
    {"flag":"🇻🇨","name":"圣文森特和格林纳丁斯"},
    {"flag":"🇻🇪","name":"委内瑞拉"},
    {"flag":"🇻🇬","name":"英属维尔京群岛"},
    {"flag":"🇻🇮","name":"美属维尔京群岛"},
    {"flag":"🇻🇳","name":"越南"},
    {"flag":"🇻🇺","name":"瓦努阿图"},
    {"flag":"🇼🇫","name":"瓦利斯和富图纳"},
    {"flag":"🇼🇸","name":"萨摩亚"},
    {"flag":"🇽🇰","name":"科索沃"},
    {"flag":"🇾🇪","name":"也门"},
    {"flag":"🇾🇹","name":"马约特"},
    {"flag":"🇿🇦","name":"南非"},
    {"flag":"🇿🇲","name":"赞比亚"},
    {"flag":"🇿🇼","name":"津巴布韦 "}
    ]

//路由规则
let rule_providers=""

/**
 * rules规则
 *
 * 匹配规则,域名或者关键字等,类型
 *
 * {@link https://docs.cfw.lbyczf.com/contents/ui/profiles/rules.html#%E8%A7%84%E5%88%99%E7%BC%96%E8%BE%91}
 */
let rules=[]

//切换时间 5分钟
let intervalTime = 300

//需要代理的
let proxy={
  "name": "🪜 代理",
  "type": "select",
  "proxies":["🌏 全球直连","🛑 全球拦截","♻️ 自动选择","✅ 选择节点"]
}

//自动选择
let automatic={
    "name": "♻️ 自动选择",
    "type": "url-test",
    "url": "http://www.gstatic.com/generate_204",
    "interval": intervalTime,//更新周期
    "proxies":[]
}
//选择节点
let select={
    "name": "✅ 选择节点",
    "type": "select",
    "proxies":["♻️ 自动选择"]
}
//故障转移
let fallback={
    "name": "🔯 故障转移",
    "type": "fallback",
    "url": "http://www.gstatic.com/generate_204",
    "interval": 600,
    "proxies":[]
}
//直连
let direct={
    "name": "🌏 全球直连",
    "type": "select",
    "proxies":["DIRECT","✅ 选择节点","♻️ 自动选择"]
}
//阻止链接
let prevent={
    "name": "🛑 全球拦截",
    "type": "select",
    "proxies":["REJECT", "DIRECT"]
}
//所有节点，方便测试连通
let all={
    "name": "🈷️ 所有节点",
    "type": "url-test",
    "url": "http://www.gstatic.com/generate_204",
    "interval": intervalTime,//更新周期
    "proxies":[]
}
//私有网络
let privateNetwork={
  "name": "⛓️ 私有网络",
  "type": "select",
  "proxies":["🌏 全球直连","🛑 全球拦截","♻️ 自动选择","✅ 选择节点"]
}
//icloud
let icloud={
  "name": "☁️ Icloud",
  "type": "select",
  "proxies":["♻️ 自动选择","✅ 选择节点","🌏 全球直连","🛑 全球拦截"]
}
//apple
let apple={
  "name": "📱 Apple",
  "type": "select",
  "proxies":["♻️ 自动选择","✅ 选择节点","🌏 全球直连","🛑 全球拦截"]
}
//google
let google={
  "name": "📫 Google",
  "type": "select",
  "proxies":["♻️ 自动选择","✅ 选择节点","🌏 全球直连","🛑 全球拦截"]
}

//telegram
let telegram={
  "name": "📲 Telegram",
  "type": "select",
  "proxies":["♻️ 自动选择","✅ 选择节点","🌏 全球直连","🛑 全球拦截"]
}
//youtube
let youtube={
  "name": "📺 Youtube",
  "type": "select",
  "proxies":["♻️ 自动选择","✅ 选择节点","🌏 全球直连","🛑 全球拦截"]
}
//微软
let microsoft={
  "name": "Ⓜ️ 微软服务",
  "type": "select",
  "proxies":["♻️ 自动选择","✅ 选择节点","🌏 全球直连","🛑 全球拦截"]
}
//其他没命中的
let others={
  "name": "🐟 未命中规则",
  "type": "select",
  "proxies":["🌏 全球直连","🛑 全球拦截","♻️ 自动选择","✅ 选择节点"]
}

//内置代理规则
let builtInProxyGroups=[
  proxy,automatic,select,fallback,direct,prevent,all,privateNetwork,icloud,apple,google,telegram,youtube,microsoft,others
]




module.exports.parse = async function(raw, {axios, yaml, notify,console},{ name, url, interval, selected }) {
    //获取存储在github上的配置，如果想放在文件中也可以直接从url中复制出来
    await getConfig(axios,console,notify)

    let content = yaml.parse(raw);

    //置空proxy-groups,添加自己的规则
    content['proxy-groups']=[]
    content["rules"]=rules

    //遍历地区来分组
    for (let area of areas){
        let areaJson={},
        proxies = [],
        regionName=area.flag+" "+area.name ;
        for (let proxy of content.proxies) {
            if (proxy.server === undefined) break;
            //如果匹配上了就加入
            if (proxy.name.indexOf(area.name) !== -1) {
                if(areaJson["name"] === regionName){
                    proxies.push(proxy.name);
                }else{
                    proxies.push(proxy.name);
                    areaJson["name"]=regionName;
                }
                //添加所有的节点到一个分组中，方便测试连通
                all["proxies"].push(proxy.name)
            }else{
                // console.log("匹配不成功",proxy.name,area.name)
            }
        }
        if(areaJson["name"]){
            areaJson["type"]="url-test";
            areaJson["proxies"]=proxies;
			areaJson["url"]="http://www.gstatic.com/generate_204";
            areaJson["interval"] = intervalTime;
            //放到yml中
            content['proxy-groups'].push(areaJson)
            //对几个预置的规则进行处理
            select["proxies"].push(regionName)
            fallback["proxies"].push(regionName)
            automatic["proxies"].push(regionName)
        }
    }

    /**
     * 添加各种分组。
     *
     * {@link https://github.com/Loyalsoldier/clash-rules}
     */
    content['proxy-groups'] = builtInProxyGroups.concat(content['proxy-groups']);
    let returnStr = yaml.stringify(content)+rule_providers;

    console.log(returnStr)
    return returnStr;
  }


  async function getConfig(axios,console,notify){

    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    axios.defaults.headers.post['Cache-Control'] = 'no-cache';

    await axios.get("https://cdn.jsdelivr.net/gh/fangweilong/clash-parsers/areas.json").then(function (response){
      areas=response.data;
    }).catch(function(error){
      notify("错误",error)
      console.log("areas错误",error);
    });

    await axios.get("https://raw.githubusercontent.com/fangweilong/clash-parsers/main/rule_providers.yml").then(function (response){
      rule_providers=response.data;
    }).catch(function(error){
      notify("错误",error)
      console.log("rule_providers错误",error);
    });

    await axios.get("https://raw.githubusercontent.com/fangweilong/clash-parsers/main/rules.json").then(function (response){
      rules=response.data;
    }).catch(function(error){
      notify("错误",error)
      console.log("rules错误",error);
    });
  }
