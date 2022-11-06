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
        #- DOMAIN,fastly.jsdelivr.net,DIRECT
        - DOMAIN,cdn.jsdelivr.net,🪜 代理
        - DOMAIN-SUFFIX,skimit.cn,DIRECT
        - DOMAIN-SUFFIX,skimit.net,DIRECT
        - PROCESS-NAME,v2ray,DIRECT
        - PROCESS-NAME,xray,DIRECT
        - PROCESS-NAME,naive,DIRECT
        - PROCESS-NAME,trojan,DIRECT
        - PROCESS-NAME,trojan-go,DIRECT
        - PROCESS-NAME,ss-local,DIRECT
        - PROCESS-NAME,privoxy,DIRECT
        - PROCESS-NAME,leaf,DIRECT
        - PROCESS-NAME,v2ray.exe,DIRECT
        - PROCESS-NAME,xray.exe,DIRECT
        - PROCESS-NAME,naive.exe,DIRECT
        - PROCESS-NAME,trojan.exe,DIRECT
        - PROCESS-NAME,trojan-go.exe,DIRECT
        - PROCESS-NAME,ss-local.exe,DIRECT
        - PROCESS-NAME,privoxy.exe,DIRECT
        - PROCESS-NAME,leaf.exe,DIRECT
        - PROCESS-NAME,Surge,DIRECT
        - PROCESS-NAME,Surge 2,DIRECT
        - PROCESS-NAME,Surge 3,DIRECT
        - PROCESS-NAME,Surge 4,DIRECT
        - PROCESS-NAME,Surge%202,DIRECT
        - PROCESS-NAME,Surge%203,DIRECT
        - PROCESS-NAME,Surge%204,DIRECT
        - PROCESS-NAME,Thunder,DIRECT
        - PROCESS-NAME,DownloadService,DIRECT
        - PROCESS-NAME,qBittorrent,DIRECT
        - PROCESS-NAME,Transmission,DIRECT
        - PROCESS-NAME,fdm,DIRECT
        - PROCESS-NAME,aria2c,DIRECT
        - PROCESS-NAME,Folx,DIRECT
        - PROCESS-NAME,NetTransport,DIRECT
        - PROCESS-NAME,uTorrent,DIRECT
        - PROCESS-NAME,WebTorrent,DIRECT
        - PROCESS-NAME,aria2c.exe,DIRECT
        #- PROCESS-NAME,BitComet.exe,DIRECT
        - PROCESS-NAME,fdm.exe,DIRECT
        - PROCESS-NAME,NetTransport.exe,DIRECT
        - PROCESS-NAME,qbittorrent.exe,DIRECT
        - PROCESS-NAME,Thunder.exe,DIRECT
        - PROCESS-NAME,ThunderVIP.exe,DIRECT
        - PROCESS-NAME,transmission-daemon.exe,DIRECT
        - PROCESS-NAME,transmission-qt.exe,DIRECT
        - PROCESS-NAME,uTorrent.exe,DIRECT
        - PROCESS-NAME,WebTorrent.exe,DIRECT
        - DOMAIN,clash.razord.top,DIRECT
        - DOMAIN,yacd.haishan.me,DIRECT
        - GEOIP,CN,DIRECT
        - PROCESS-NAME,OneDrive,Ⓜ️ 微软服务
        - PROCESS-NAME,OneDriveUpdater,Ⓜ️ 微软服务
        - DOMAIN-KEYWORD,1drv,Ⓜ️ 微软服务
        - DOMAIN-KEYWORD,onedrive,Ⓜ️ 微软服务
        - DOMAIN-KEYWORD,skydrive,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,livefilestore.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,oneclient.sfx.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,onedrive.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,onedrive.live.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,photos.live.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sharepoint.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sharepointonline.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,skydrive.wns.windows.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,spoprod-a.akamaihd.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,storage.live.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,storage.msn.com,Ⓜ️ 微软服务
        - DOMAIN-KEYWORD,1drv,Ⓜ️ 微软服务
        - DOMAIN-KEYWORD,microsoft,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,aadrm.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,acompli.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,acompli.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,aka.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,akadns.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,aspnetcdn.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,assets-yammer.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,azure.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,azure.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,azureedge.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,azurerms.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,bing.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,cloudapp.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,cloudappsecurity.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,edgesuite.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,gfx.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,hotmail.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,live.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,live.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,lync.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msappproxy.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msauth.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msauthimages.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msecnd.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msedge.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msft.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msftauth.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msftauthimages.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msftidentity.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msidentity.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msn.cn,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msn.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msocdn.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,msocsp.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,mstea.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,o365weve.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,oaspapps.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,office.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,office.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,office365.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,officeppe.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,omniroot.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,onedrive.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,onenote.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,onenote.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,onestore.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,outlook.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,outlookmobile.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,phonefactor.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,public-trust.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sfbassets.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sfx.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sharepoint.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sharepointonline.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,skype.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,skypeassets.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,skypeforbusiness.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,staffhub.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,svc.ms,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sway-cdn.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sway-extensions.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,sway.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,trafficmanager.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,uservoice.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,virtualearth.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,visualstudio.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,windows-ppe.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,windows.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,windows.net,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,windowsazure.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,windowsupdate.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,wunderlist.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,yammer.com,Ⓜ️ 微软服务
        - DOMAIN-SUFFIX,yammerusercontent.com,Ⓜ️ 微软服务
        - PROCESS-NAME,com.amazon.firetv.youtube,📺 Youtube
        - DOMAIN-SUFFIX,youtu.be,📺 Youtube
        - DOMAIN-SUFFIX,googlevideo.com,📺 Youtube
        - DOMAIN,youtubei.googleapis.com,📺 Youtube
        - DOMAIN-KEYWORD,youtube,📺 Youtube
        - RULE-SET,lancidr,DIRECT
        - RULE-SET,cncidr,DIRECT
        - RULE-SET,private,⛓️ 私有网络
        - RULE-SET,direct,🌏 全球直连
        - RULE-SET,icloud,☁️ Icloud
        - RULE-SET,apple,📱 Apple
        - RULE-SET,google,📫 Google
        - RULE-SET,reject,🛑 全球拦截
        - RULE-SET,telegramcidr,📲 Telegram
        - RULE-SET,gfw,🪜 代理
        - RULE-SET,proxy,🪜 代理
        - MATCH,🐟 未命中规则

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
