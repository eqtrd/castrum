<?php snippet("head") ?>

<div class="container" data-grid="2">
    <div class="header-info">
        <div class="-date">
            <?= $page->articleDate()->toDate('m.Y')?>
        </div>
        <div class="-author">
            <?= $page->author()?>
        </div>
    </div>
    <h2 class="txt-center"><?= $page->articleTitle()?></h2>
    <div class="images-gallery">
        <?php snippet('components/images-gallery', ["page" => $page]) ?>
    </div>
</div>


<div class="slideshow-container">
    <?php
    $items = $page->sections()->toBlocks()
        ->map(fn($block) => $block->image()->toFile()) // récupère le fichier image de chaque bloc
        ->filter(fn($file) => $file instanceof Kirby\Cms\File); // ne garde que les fichiers valides
    ?>

    <?php snippet("components/slideshow", ["items" => $items]) ?>

</div>

<?php snippet("foot") ?>


