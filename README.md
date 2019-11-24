This is customized Yii 2 Basic Project Template integrated with Gulp and BrowserSync.

DIRECTORY STRUCTURE
-------------------

      assets/             contains assets definition
      commands/           contains console commands (controllers)
      config/             contains application configurations
      controllers/        contains Web controller classes
      mail/               contains view files for e-mails
      models/             contains model classes
      runtime/            contains files generated during runtime
      tests/              contains various tests for the basic application
      themes/              containes themes for the Web application
      vendor/             contains dependent 3rd-party packages
      views/              contains view files for the Web application
      web/                contains the entry script and Web resources

### Installation

You can then install this project template using the following command:

~~~
$ php composer.phar create-project --prefer-dist --stability=dev maswahyu/yii2-basic-custom basic-custom
~~~

Then install the packages required by npm.

~~~
$ npm install
~~~

Now you should be able to access the application through the following URL, assuming `basic-custom` is the directory
directly under the Web root.

~~~
http://localhost/basic-custom/web/
~~~

### Asset Bundle & Theming

Asset Bundles are stored under `themes` folder with the following directory structure.

      |-- themes
          |-- ThemeA
          |-- ThemeB            theme name
              |-- assets        contains the source assets
                  |-- scss
                  |-- js
                  |-- fonts
                  |-- img
              |-- dist          contains the generated assets that will be used by Yii
                  |-- css
                  |-- js
                  |-- fonts
                  |-- img
              |-- views
                  |-- layouts   contains the layouts available for the theme
                  |-- site      contains the view files for the controller `site`
                  |-- ... other view folder
              |-- ThemeAsset.php

In order to use theme, the configuration is as follow.

~~~
        'view' => [
            // theming configurations
            'theme' => [
                'basePath' => '@themes/ThemeB',
                'baseUrl' => '@web/themes/ThemeB',
                'pathMap' => [
                    '@app/views' => '@themes/ThemeB/views',
                ],
            ],
        ],
~~~

### Using Gulp & BrowserSync

To automate building the assets while working on Frontend, you can run gulp to automatically build the assets, watch for changes and reload the browser.

~~~
$ gulp
[00:14:40] Using gulpfile C:\xampp\htdocs\saga\sahabatufs-revamp\gulpfile.js
[00:14:40] Starting 'default'...
[00:14:40] Starting 'styles'...
[00:14:40] Starting 'scripts'...
[00:14:40] Finished 'scripts' after 20 ms
[00:14:43] Finished 'styles' after 2.8 s
[00:14:43] Starting 'serve'...
[Browsersync] Proxying: https://new.sufs.local
[Browsersync] Access URLs:
 ---------------------------------------
       Local: https://localhost:3000
    External: https://192.168.100.3:3000
 ---------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 ---------------------------------------
~~~

This will open the project in browser. If you make changes to any of `.scss`, `.js`, `views` and save the files, the browser will automatically reloaded to shows the changes.

To change the theme, you need to configure `config/web.php` and `gulpfile.js` with the theme you wanna use. The former is used by Yii and the later is used by gulp to build the assets.