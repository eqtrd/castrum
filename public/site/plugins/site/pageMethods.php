<?php

return [

    'createDescription' => function () {
        if ($this->descriptionSEO()->isNotEmpty()) return $this->descriptionSEO()->smartypants();
        return $this->site()->descriptionSEO()->smartypants();
    },

    'createTitle' => function () {
        if ($this->template() == 'home'):
            return $this->site()->title()->smartypants();
        elseif ($this->template() == 'error'):
            return $this->site()->title()->smartypants() . ' | This page is not available.';
        else:
            return $this->site()->title()->smartypants() . ' | ' . $this->title()->smartypants();
        endif;
    },

    'createImage' => function () {
        if ($this->coverImage()->isNotEmpty()) {
            $image = $this->coverImage()->toFile();
            return $image->crop(600, 600, 'center')->url();
        } elseif ($this->images()->isNotEmpty()) {
            $image = $this->images()->first()->toFile();
            return $image->crop(600, 600, 'center')->url();
        }else{
            return false;
        }
    }
];
