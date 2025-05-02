<?php snippet("head") ?>

<div class="container grid" data-grid="2">
    <div>
        <ul class="page-submenu">
            <?php
            $n = 0;
            foreach ($page->sections()->toBlocks() as $block): $n++ ?>
            <li>
                <a <?php e($n == 1, 'class="active"')?> href="#<?= $block->title()->slug() ?>" @click.prevent="gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: '#<?= $block->title()->slug() ?>',
                    offsetY: 50
                },
                ease: 'power2.out'
            })">
                    <?= $block->title() ?>
                </a>
                <?php endforeach; ?>
        </ul>
    </div>
    <div class="main-text markdown">
        <div class="main-image">
            <?php if ($mainImage = $page->mainImage()->toFile()): ?>
                <?= $mainImage->picture('m', true) ?>
            <?php endif; ?>
        </div>
        <?php
        $n = -1;
        foreach ($page->sections()->toBlocks() as $block): $n++;?>
            <div class="section text-section" id="<?= $block->title()->slug() ?>">
                <div class="image-cover trigger-slideshow" data-index="<?=$n?>">
                    <?php if ($image = $block->image()->toFile()): ?>
                        <?= $image->picture('l', true) ?>
                    <?php endif; ?>
                </div>
                <h3><?= $block->title() ?></h3>
                <?= $block->mainText()->kt() ?>
            </div>
        <?php endforeach; ?>
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


