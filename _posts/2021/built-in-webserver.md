---
title: PHP 내장 웹 서버 사용하기
date: 2021-07-25
tags: ['Tech']
excerpt: PHP Built-in web server
---

## Built-in web server
PHP <U>5.4 버전</U> 부터 따로 웹 서버 설치와 설정 없이 **`Built-in web server`**를 사용하여  
웹 서버 구동이 가능하다. <span style="font-size:14px;">(이걸 이제 알았네....😑)</span>  

```shell
php -S localhost:8000
[Sun Jul 25 15:29:14 2021] PHP 8.0.5 Development Server (http://localhost:8000) started
```
> -S[options] `<address>:<port>`

## 참고
[https://www.php.net/manual/en/features.commandline.webserver.php](https://www.php.net/manual/en/features.commandline.webserver.php)
[https://www.php.net/manual/en/features.commandline.options.php](https://www.php.net/manual/en/features.commandline.options.php)
[https://modernpug.github.io/php-the-right-way/](https://modernpug.github.io/php-the-right-way/)