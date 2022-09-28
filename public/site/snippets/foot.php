</main>


<?php if ($kirby->option('debug') == true) : ?>
  <?= js('http://dev.local:8080/assets/js/bundle.js') ?>
<?php else: ?>
  <?= js('assets/js/bundle.js') ?>
<?php endif; ?>


</body>

</html>