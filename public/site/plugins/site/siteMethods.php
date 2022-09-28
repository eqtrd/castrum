<?php

return [
    'siteLogo' => function () {
        if ($this->images()->template("sitelogo")->isNotEmpty()): return "<img class='site-logo' src='" . $this->images()->template("sitelogo") . "'>"; endif;
    },

    'favicon' => function ($size) {
        if ($this->images()->template("sitelogo")->isNotEmpty()): $favicon = $this->images()->template("favicon")->first();  return $favicon->resize($size)->url(); endif;

    },
];