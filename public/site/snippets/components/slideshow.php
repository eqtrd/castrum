
<div class="close-slideshow">
    ×
</div>

<div class="carousel">
    <?php
    $n = 0;
    foreach ($items as $item):
        $n++;
        $type = ($item->type() == "video") ? "video" : "image";
        ?>
        <div class="carousel-cell" data-size="<?= $item->orientation() ?>" data-legend="<?= $item->caption()->kt()?>">
            <?php if ($type == "image"): ?>
                <picture class="<?= $item->orientation() ?> has-placeholder">
                    <source media="(min-width: 800px)" srcset="<?= $item->thumb('xxl-webp')->url() ?>"
                            type='image/webp'>
                    <source media="(max-width: 799px)"
                            srcset="<?= $item->thumb('l-webp')->url() ?>"
                            type='image/webp'>
                    <source media="(min-width: 800px)" srcset="<?= $item->thumb('xxl-avif')->url() ?>"
                            type='image/avif'>
                    <source media="(max-width: 799px)"
                            srcset="<?= $item->thumb('l-avif')->url() ?>"
                            type='image/avif'>
                    <img class="carousel-cell-image lazyload"
                         height="<?=$item->height()?>" width="<?=$item->width()?>" data-src="<?= $item->thumb('l-jpg')->url()?>" alt="<?= $item->filename() ?>"/>
                </picture>
            <?php elseif ($type == "video"): ?>
                <video class="video" id="video<?= $n ?>" width="100%" height="100%" disablePictureInPicture playsinline autoplay
                       muted loop poster="<?=$item->poster()->toFile()->url()?>">
                    <source src="<?= $item->url()?>" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-btn">sound off</div>
            <?php endif; ?>
        </div>
    <?php endforeach; ?>
</div>

<div class="slideshow-legend">
    hello world
</div>