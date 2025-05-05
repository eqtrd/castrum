<?php
use Kirby\Toolkit\Str;
snippet("head") ?>

<div class="container grid" data-grid="2">
    <div class="side-content">
        <div class="main-image">
            <?php if ($mainImage = $page->mainImage()->toFile()): ?>
                <?= $mainImage->picture('m', true, ['big']) ?>
                <h4 class="caption"><?= $mainImage->caption()?></h4>
            <?php endif; ?>
        </div>
    </div>
    <div class="main-text markdown">
        <h2>Articles et comptes-rendus</h2>
        <div class="filter-submenu">
            <p><em>Filtres</em></p>
            <ul>
                <?php foreach ($page->categories()->split() as $subpage): ?>
                    <li><a class="active" data-target="<?=Str::slug($subpage);?>"><?= $subpage?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>

        <div class="item-table">
            <?php foreach ($page->children()->sortBy('articleDate', 'desc') as $item): ?>
                <div class="item-table-item" x-data="{ open: false }" data-category="<?=Str::slug($item->category());?>">
                    <div class="--grid-row">
                        <div class="--date">
                            <?= $item->articleDate() ?>
                        </div>
                        <div class="--content">
                            <p class="--type"><?= $item->category() ?> | <em><?= $item->articleType() ?></em></p>
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
    </div>
</div>

<div class="images-gallery">
    <?php snippet('components/images-gallery', ["page" => $page])?>
</div>

<?php snippet("foot") ?>


