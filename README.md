# CFW-Parsers
自用 CFW（Clash for Windows） 的 Parsers 设置    
感谢 [fangweilong/clash-parsers](//github.com/fangweilong/clash-parsers) ， [SplitGemini/Clash_configuration](//github.com/SplitGemini/Clash_configuration) 和 [Loyalsoldier/clash-rules](//github.com/Loyalsoldier/clash-rules)
> **注意：**    
使用时请将第4行的`"D:\\Glucy2\\.config\\clash\\parser.js"`替换为从本仓库中下载的parser.js所在的完整路径
````yaml
parsers: # array
  # - reg: ^.*$ 匹配所有订阅，或  - url: https://example.com/profile.yaml 指定订阅
  - reg: ^.*$
    file: "D:\\Glucy2\\.config\\clash\\parser.js"
  # 建立自己的配置
    yaml:
  # 添加规则
      prepend-rules: # 规则由上往下遍历，如上面规则已经命中，则不再往下处理
        - DOMAIN-SUFFIX,mxte.cc,DIRECT
        - DOMAIN-SUFFIX,skimit.cn,DIRECT
        - DOMAIN-SUFFIX,skimit.net,DIRECT
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
