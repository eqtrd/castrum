<nav class="main-menu">
<ul>
    <?php
    $n = 0;
    foreach ($site->children()->listed() as $p): $n++ ?>
        <?php if ($n == 3): ?>
            <li class="site-title" ><a href="<?= $site->homePage()->url() ?>">Castrum</a></li>
        <?php endif; ?>
        <li>
            <a <?php e($p->isActive(), 'class="active"') ?> href="<?= $p->url() ?>"><?= $p->title() ?></a>
        </li>
    <?php endforeach; ?>
</ul>
</nav>
