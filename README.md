# CFW-Parsers
自用 CFW（Clash for Windows） 的 Parsers 设置    
感谢 [fangweilong/clash-parsers](//github.com/fangweilong/clash-parsers) ， [SplitGemini/Clash_configuration](//github.com/SplitGemini/Clash_configuration) 和 [Loyalsoldier/clash-rules](//github.com/Loyalsoldier/clash-rules)
````yaml
parsers: # array
  # - reg: ^.*$ 匹配所有订阅，或  - url: https://example.com/profile.yaml 指定订阅
  - reg: ^.*$
  - url: https://fastly.jsdelivr.net/gh/Glucy-2/CFW-Parsers@main/parser.yaml
    remote:
      url:  https://fastly.jsdelivr.net/gh/Glucy-2/CFW-Parsers@main/parser.js
      cache: true # 是否对重复下载此预处理代码使用缓存
````
