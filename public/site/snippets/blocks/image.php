<?php if($image = $block->image()->toFile()):?>

<?= $image->picture('l', true, ['big']) ?>

<?php endif;?>

