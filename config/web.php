<?php

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
        '@themes'   => '@app/themes',
    ],
    'components' => [
        'request' => require __DIR__ . '/request.php',
        'cache' => require __DIR__ . '/cache.php',
        'user' => require __DIR__ . '/user.php',
        'errorHandler' => require __DIR__ . '/errorHandler.php',
        'mailer' => require __DIR__ . '/mail.php',
        'log' => require __DIR__ . '/log.php',
        'db' => require __DIR__ . '/db.php',
        'assetManager' => require __DIR__ . '/assetManager.php',
        'view' => require __DIR__ . '/view.php',
        'urlManager' => require __DIR__ . '/urlManager.php',
    ],
    'params' => require __DIR__ . '/params.php',
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
