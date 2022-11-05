let areas =[]

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
    "interval": 300,
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
    "type": "select",
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
            areaJson["type"]="select"
            areaJson["proxies"]=proxies;
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
