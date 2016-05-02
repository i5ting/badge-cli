node-badge-cli
==============

a cli tools for get result form http://badge.fury.io/for/js generated content

[![npm version](https://badge.fury.io/js/badge-cli.svg)](http://badge.fury.io/js/badge-cli)


实现命令行

- badge node启动端口，选择，然后自动替换

## Install 

```
npm install -g badge-cli
```

## Usage 

```
badge -n badge-cli -f [md] -t [npm] 
```


`-t`可选项

- npm（默认值）
- ruby    
- python    
- bower    
- github    
- nuget    
- php    
- cocoapods    
- perl  


`-f`可选项

- url
- markdown（默认值）
- html
- textile
- rdoc
- asciidoc
- rst
 
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

具体长相

[![npm version](https://badge.fury.io/js/q.svg)](http://badge.fury.io/js/q)

主要是替换`q`对应的地方

## 技术

- https://github.com/tj/commander.js(命令行)
- https://github.com/request/request（http请求）
- https://github.com/mochajs/mocha(测试)
- https://github.com/wycats/handlebars.js（模板）


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 推荐

- [mac-dev-setup](http://aaaaaashu.gitbooks.io/mac-dev-setup/content/index.html)

## 版本历史

- v0.1.0 初始化版本

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
