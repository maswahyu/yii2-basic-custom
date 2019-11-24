<?php

namespace themes\DefaultTheme;

use yii\web\AssetBundle;

/**
 * Default theme asset bundle.
 *
 * @author Nur Wahyudin <wahyu1790@gmail.com>
 */
class ThemeAsset extends AssetBundle
{
    public $sourcePath = '@themes/DefaultTheme/dist';
    public $baseUrl = '@web';
    public $css = [
        'css/main.css',
    ];
    public $js = [
        'js/main.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
    ];
}
