<?php

return array(
    'picture' => function ($size = null, $lazy = null, $classes = []){


        $classes = implode(" ", $classes);


        if ($lazy){

            return "<picture class='thumb-".$size." ".$this->orientation()." ".$classes."'>
                 <source data-srcset='".$this->thumb($size."-webp")->url()."' type='image/webp'>
                 <source data-srcset='".$this->thumb($size."-avif")->url()."' type='image/avif'>
                 <img class='lazyload' data-src='".$this->thumb($size."-jpeg")->url()."' alt='".$this->filename()."'>
                 </picture>";
        }else{
            return "<picture class='thumb-".$size."'>
                 <source srcset='".$this->thumb($size."-webp")->url()."' type='image/webp'>
                 <source srcset='".$this->thumb($size."-avif")->url()."' type='image/avif'>
                 <img src='".$this->thumb($size."-jpeg")->url()."' alt='".$this->filename()."'>
                 </picture>";
        }
    },
    'customOrientation' => function(){
        $file = $this;
        $width = $file->width();
        $height = $file->height();
        $ratio = 5/6;

        if($width < $height && $width > $height * $ratio){
            $orientation = "square";
        }elseif ($width > $height && $height > $width * $ratio){
            $orientation = "square";
        }else{
            $orientation = $this->orientation();
        }

        return $orientation;
    },
);