<?php

return [
    'customOrientation' => function () {
       /* if ($this->descriptionSEO()->isNotEmpty()) return $this->descriptionSEO()->smartypants();
        return $this->site()->descriptionSEO()->smartypants();*/
    },
    'imgOptim' => function($class){
        $image = $this;
        return "<picture class='".$class."'>
                 <source srcset='".$image->thumb(['format' => 'webp'])->url()."' type='image/webp'>
                 <source srcset='".$image->thumb(['format' => 'avif'])->url()."' type='image/avif'>
                 <img src='".$image->thumb(['format' => 'jpeg'])->url()."' alt='".$image->filename()."'>
                 </picture>";

    },
    'picture' => function ($size = null, $classes = null){

        $classes = implode(" ", $classes);

        return "<picture class='".$size." ".$classes."'>
                 <source srcset='".$this->thumb($size."-webp")->url()."' type='image/webp'>
                 <source srcset='".$this->thumb($size."-avif")->url()."' type='image/avif'>
                 <img src='".$this->thumb($size."-jpeg")->url()."' alt='".$this->filename()."'>
                 </picture>";
    }
];