<?php snippet("head") ?>


<div class="container grid" data-grid="2">
    <div>
        <div class="main-image">
            <?php if ($mainImage = $page->mainImage()->toFile()): ?>
                <?= $mainImage->picture('m', true) ?>
                <h4 class="caption"><?= $mainImage->caption()?></h4>
            <?php endif; ?>
        </div>
    </div>
    <div class="main-text markdown">

        <?php
        $n = -1;
        foreach ($page->sections()->toBlocks() as $block): $n++; ?>
            <div class="section text-section" id="<?= $block->title()->slug() ?>">
                <h2><?= $block->title() ?></h2>
                <?= $block->mainText()->kt() ?>
                <?php if ($block->programm()->isNotEmpty()): ?>
                    <div class="item-table">
                        <?php foreach ($block->programm()->toStructure() as $item): ?>
                            <div class="item-table-item" x-data="{ open: false }">
                                <div class="--grid-row">
                                    <div class="--date">
                                        <?php
                                        $dateRaw = $item->eventDate()->value();
                                        $dateField = new DateTime($dateRaw); // 💡 conversion manuelle

                                        $timezone = new DateTimeZone('Europe/Paris');

                                        $formatter = new IntlDateFormatter(
                                            'fr_FR',
                                            IntlDateFormatter::NONE,
                                            IntlDateFormatter::NONE,
                                            $timezone,
                                            IntlDateFormatter::GREGORIAN,
                                            'EEE dd.MM'
                                        );

                                        $formattedDate = $formatter->format($dateField);
                                        echo $formattedDate;
                                        ?>
                                    </div>
                                    <div class="--content">
                                        <p class="--type"><em><?= $item->EventType() ?></em></p>
                                        <div class="--description">
                                            <?= $item->EventDescription()->kt() ?>
                                        </div>
                                    </div>
                                </div>
                                <div class="--more-content">
                                    <button @click="open = !open">
                                        <span x-text="open ? '−' : '+'"></span>
                                    </button>
                                </div>
                                <div class="--collapse-text" x-show="open" x-collapse>
                                    <?= $item->EventText()->kt() ?>
                                </div>

                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</div>

<!--<div class="slideshow-container">
    <?php
/*    $items = $page->sections()->toBlocks()
        ->map(fn($block) => $block->image()->toFile()) // récupère le fichier image de chaque bloc
        ->filter(fn($file) => $file instanceof Kirby\Cms\File); // ne garde que les fichiers valides
    */ ?>

    <?php /*snippet("components/slideshow", ["items" => $items]) */ ?>

</div>-->

<?php snippet("foot") ?>


