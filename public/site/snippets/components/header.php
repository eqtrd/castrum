<nav class="main-menu">
<ul>
    <?php
    $n = 0;
    foreach ($site->children()->listed() as $p): $n++ ?>
        <li>
            <a <?php e($p->isActive(), 'class="active"') ?> href="<?= $p->url() ?>"><?= $p->title() ?></a>
        </li>
    <?php endforeach; ?>
    <li class="site-title" ><a href="<?= $site->homePage()->url() ?>">Castrum</a></li>
    <?php
    $n = 0;
    foreach (page('articles')->categories()->split() as $category): $n++ ?>
        <li>
            <a <?php e(page('articles')->isActive(), 'class="active"') ?> href="<?= page('articles')->url() ?>"><?= $category ?></a>
        </li>
    <?php endforeach; ?>

</ul>
</nav>
