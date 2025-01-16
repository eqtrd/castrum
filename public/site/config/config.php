<?php

return [

// __________________________________________________________ //
// DEFAULT

    'panel'        => [
        'css' => 'assets/css/panel.css',
        'js'  => 'assets/js/panel.js',
    ],
    'debug' => false,


// __________________________________________________________ //
// UPDATES

    'updates' => [
        'plugins' => [
            'eqtrd/*' => false,
        ]
    ],

// __________________________________________________________ //
// EMAILS

    'email' => [
        'transport' => [
            'type' => 'smtp',
            'host' => 'localhost',
            'port' => 1025,
            'security' => false
        ]
    ],

// __________________________________________________________ //
// IMAGES

    'thumbs' => [
        'srcsets' => [
            'default' => [
                '800w' =>  ['width' => 800,  'quality' => 80],
                '1024w' => ['width' => 1024, 'quality' => 80],
                '1440w' => ['width' => 1440, 'quality' => 80],
                '2048w' => ['width' => 2048, 'quality' => 80],
            ],
        ],
        'presets' => [
            'xs-webp'  => ['width' => 400,  'quality' => 90, "format" => "webp"],
            's-webp'   => ['width' => 600,  'quality' => 90, "format" => "webp"],
            'm-webp'   => ['width' => 1000, 'quality' => 90, "format" => "webp"],
            'l-webp'   => ['width' => 1500, 'quality' => 90, "format" => "webp"],
            'xl-webp'  => ['width' => 2000, 'quality' => 90, "format" => "webp"],
            'xxl-webp' => ['width' => 2000, 'quality' => 90, "format" => "webp"],

            'xs-avif'  => ['width' => 400,  'quality' => 90, "format" => "avif"],
            's-avif'   => ['width' => 600,  'quality' => 90, "format" => "avif"],
            'm-avif'   => ['width' => 1000, 'quality' => 90, "format" => "avif"],
            'l-avif'   => ['width' => 1500, 'quality' => 90, "format" => "avif"],
            'xl-avif'  => ['width' => 2000, 'quality' => 90, "format" => "avif"],
            'xxl-avif' => ['width' => 2000, 'quality' => 90, "format" => "avif"],

            'xs-jpeg'  => ['width' => 400,  'quality' => 90, "format" => "jpeg"],
            's-jpeg'   => ['width' => 600,  'quality' => 90, "format" => "jpeg"],
            'm-jpeg'   => ['width' => 1000, 'quality' => 90, "format" => "jpeg"],
            'l-jpeg'   => ['width' => 1500, 'quality' => 90, "format" => "jpeg"],
            'xl-jpeg'  => ['width' => 2000, 'quality' => 90, "format" => "jpeg"],
            'xxl-jpeg' => ['width' => 2000, 'quality' => 90, "format" => "jpeg"],
        ]
    ],


// __________________________________________________________ //
// PLUGINS

    // 'cache' => [
    //   'pages' => [
    //     'active' => true
    //   ]
    // ],

    // 'bnomei.robots-txt.sitemap' => './sitemap.xml',
    // 'bnomei.robots-txt.groups' => [
    //     '*' => [
    //         'disallow' => [
    //             '/kirby/',
    //             '/site/',
    //         ],
    //         'allow' => [
    //             '/media/',
    //         ]
    //     ]
    // ],

    'omz13.xmlsitemap' => [
        'cacheTTL' => 0,
    ],

    'smartypants' => true,
    'schnti.cachebuster.active' => true,

    'ready' => function ($kirby) {
        return [
            'junohamburg.reload-on-save' => [
                'active' => $kirby->user() !== null
            ]
        ];
    }


];
