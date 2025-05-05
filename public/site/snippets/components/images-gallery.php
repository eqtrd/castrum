<?php foreach ($page->imagesGallery()->toBlocks() as $block): ?>
    <div id="<?= $block->id() ?>" class="block block-type-<?= $block->type() ?>">
        <?= $block ?>
    </div>
<?php endforeach ?>