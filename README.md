# CFW-Parsers
自用CFW（Clash for Windows）的Parsers设置    
感谢 Fndroid/clash_for_windows_pkg#2193
````yaml
parsers: # array
  # - reg: ^.*$ 匹配所有订阅，或  - url: https://example.com/profile.yaml 指定订阅
  - reg: ^.*$
  # 删除服务商提供的策略组和规则
    code: |
      module.exports.parse = (raw, { yaml }) => {
        const rawObj = yaml.parse(raw)
        const groups = []
        const rules = []
        return yaml.stringify({ ...rawObj, 'proxy-groups': groups, rules })
      } 
  # 建立自己的配置
    yaml:
      prepend-proxy-groups: # 建立策略组
        - name: 🔯 代理模式 
          type: select
          proxies:
            - 绕过大陆丨黑名单(GFWlist) # 黑名单模式，意为「只有命中规则的网络流量，才使用代理」
            - 绕过大陆丨白名单(Whitelist) # 白名单模式，意为「没有命中规则的网络流量，统统使用代理」
            
        - name: 🔰 选择节点 
          type: select
            
        - name: 🛑 广告拦截
          type: select
          proxies:
            - DIRECT
            - REJECT
            - PROXY
            
        - name: 绕过大陆丨黑名单(GFWlist)
          type: url-test
          url: http://www.gstatic.com/generate_204
          interval: 86400
          proxies:
            - DIRECT
            
        - name: 绕过大陆丨白名单(Whitelist)
          type: url-test
          url: http://www.gstatic.com/generate_204
          interval: 86400
          proxies:
            - PROXY
            
        - name: PROXY
          type: url-test
          url: http://www.gstatic.com/generate_204
          interval: 86400
          proxies:
            - 🔰 选择节点
            
  # 策略组示例
       # - name: 分组名
         # type: select       # 手动选点   
               # url-test     # 自动选择延迟最低的节点
               # fallback     # 节点故障时自动切换下一个
               # laod-balance # 均衡使用分组内的节点
         # url: http://www.gstatic.com/generate_204 # 测试地址 非select类型分组必要
         # interval: 300 # 自动测试间隔时间，单位秒 非select类型分组必要
         # tolerance: 50 # 允许的偏差，节点之间延迟差小于该值不切换 非必要
         # proxies:  
           # - 节点名称或其他分组套娃
          
      commands:
        - proxy-groups.🔰 选择节点.proxies=[]proxyNames # 向指定策略组添加订阅中的节点名，可使用正则过滤
        - proxy-groups.🔰 选择节点.proxies.0+DIRECT # 向指定分组第一个位置添加一个 DIRECT 节点名
        
        # 一些可能用到的正则过滤节点示例，使分组更细致
        # []proxyNames|a                         # 包含a
        # []proxyNames|^(.*)(a|b)+(.*)$          # 包含a或b
        # []proxyNames|^(?=.*a)(?=.*b).*$        # 包含a和b
        # []proxyNames|^((?!b).)*a((?!b).)*$     # 包含a且不包含b
        # []proxyNames|^((?!b|c).)*a((?!b|c).)*$ # 包含a且不包含b或c
        
  # 添加规则
      prepend-rules: # 规则由上往下遍历，如上面规则已经命中，则不再往下处理
        - DOMAIN-SUFFIX,mxte.cc,DIRECT
        - DOMAIN-SUFFIX,skimit.cn,DIRECT
        - DOMAIN-SUFFIX,skimit.net,DIRECT
        - RULE-SET,applications,DIRECT
        - DOMAIN,clash.razord.top,DIRECT
        - DOMAIN,yacd.haishan.me,DIRECT
        - RULE-SET,private,DIRECT
        - RULE-SET,reject,🛑 广告拦截
        - RULE-SET,icloud,DIRECT #
        - RULE-SET,apple,DIRECT # 这三个为国内可直连地址，如果希望走代理改为PROXY
        - RULE-SET,google,DIRECT # 
        - RULE-SET,tld-not-cn,PROXY
        - RULE-SET,gfw,PROXY
        - RULE-SET,greatfire,PROXY
        - RULE-SET,telegramcidr,PROXY
        - RULE-SET,lancidr,DIRECT
        - RULE-SET,cncidr,DIRECT
        - GEOIP,,DIRECT
        - GEOIP,CN,DIRECT
        - RULE-SET,direct,DIRECT
        - RULE-SET,proxy,🔯 代理模式
        - MATCH,🔯 代理模式 # 规则之外的
  # 添加规则集
      mix-rule-providers: 
        reject: # 广告域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
          path: ./ruleset/reject.yaml
          interval: 86400
          
        icloud: # iCloud 域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
          path: ./ruleset/icloud.yaml
          interval: 86400
          
        apple: # Apple 在中国大陆可直连的域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
          path: ./ruleset/apple.yaml
          interval: 86400
          
        google: # Google 在中国大陆可直连的域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
          path: ./ruleset/google.yaml
          interval: 86400
          
        proxy: # 代理域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
          path: ./ruleset/proxy.yaml
          interval: 86400
          
        direct: # 直连域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
          path: ./ruleset/direct.yaml
          interval: 86400
          
        private: # 私有网络专用域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
          path: ./ruleset/private.yaml
          interval: 86400
          
        gfw: # GFWList 域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
          path: ./ruleset/gfw.yaml
          interval: 86400
          
        greatfire: # GreatFire 域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt"
          path: ./ruleset/greatfire.yaml
          interval: 86400
          
        tld-not-cn: # 非中国大陆使用的顶级域名列表
          type: http
          behavior: domain
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
          path: ./ruleset/tld-not-cn.yaml
          interval: 86400
          
        telegramcidr: # Telegram 使用的 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
          path: ./ruleset/telegramcidr.yaml
          interval: 86400
          
        cncidr: # 中国大陆 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
          path: ./ruleset/cncidr.yaml
          interval: 86400
          
        lancidr: # 局域网 IP 及保留 IP 地址列表
          type: http
          behavior: ipcidr
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
          path: ./ruleset/lancidr.yaml
          interval: 86400
          
        applications: # 需要直连的常见软件列表
          type: http
          behavior: classical
          url: "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
          path: ./ruleset/applications.yaml
          interval: 86400
````
