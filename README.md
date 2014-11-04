node-badge-cli
==============

a cli tools for get result form http://badge.fury.io/for/js generated content

## Install 

```
npm install badge-cli
```

## Usage 

```
badge badge-cli -f md -t npm
```


`-t`可选项

- npm（默认值）
- Ruby    
- Python    
- Bower    
- GitHub    
- NuGet    
- PHP    
- CocoaPods    
- Perl  


`-f`可选项

- URL
- Markdown（默认值）
- HTML
- Textile
- RDOC
- AsciiDoc
- RST
 
## 实现流程


1、请求npm模块是否存在

比如搜索q这个模块

请求的是`http://badge.fury.io/js/q.json`,解析是否有返回值，即可判断是否存在

```
{"name":"q","version":"1.0.1","project_uri":"https://github.com/kriskowal","homepage_uri":"https://github.com/kriskowal/q","source_code_uri":"git://github.com/kriskowal/q.git"}
```

2、解析返回值，把对应格式的返回值打印到控制台即可

比如

```
[![npm version](https://badge.fury.io/js/q.svg)](http://badge.fury.io/js/q)
```

主要是替换`q`对应的地方

## 技术

- https://github.com/tj/commander.js(命令行)
- https://github.com/request/request
- https://github.com/mochajs/mocha(测试)
