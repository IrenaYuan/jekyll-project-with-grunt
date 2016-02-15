README.md

此專案是由jekyll new 開始

    jekyll new jekyll-project

並加入`package.json`、`Gruntfile.js`

    //package.json
    {
        "name": "my-project-name",
        "description": "grunt project",
        "version": "0.1.0",
        "author": "Irena",
        "devDependencies": {
            "grunt": "~0.4.5",
            "grunt-contrib-compass": "1.0.x",
            "grunt-contrib-connect": "0.8.x",
            "grunt-contrib-watch": "0.6.x",
            "grunt-exec": "^0.4.6"
        }
    }

...

    npm install

接著編輯Gruntfile.js

    //Gruntfile.js
    略...


於cmd 執行 `grunt`即可啟動

於瀏覽器開啟http://locallhost:4000/

接著開啟livereload套件


參考文章：

[http://isjia.me/tech/2015/05/23/jekyll-with-bower-grunt-support/](http://isjia.me/tech/2015/05/23/jekyll-with-bower-grunt-support/)

[http://www.aymerick.com/2014/07/22/jekyll-github-pages-bower-bootstrap.html](http://www.aymerick.com/2014/07/22/jekyll-github-pages-bower-bootstrap.html)