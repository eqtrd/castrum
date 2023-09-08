<?php

return [
    'siteLogo' => function () {
                if ($this->images()->template("sitelogo")->isNotEmpty()): $siteLogo = $this->images()->template("sitelogo")->first(); return "<img class='site-logo' src='" . $siteLogo->url() . "'>"; endif;
    },

    'favicon' => function ($size) {
        if ($this->images()->template("favicon")->isNotEmpty()): $favicon = $this->images()->template("favicon")->first();  return $favicon->resize($size)->url(); endif;

    },
];