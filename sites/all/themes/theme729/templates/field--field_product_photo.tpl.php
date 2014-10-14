<div class="product-image"><?php 

  if ($element['#view_mode'] == 'teaser') {
  $items = array(reset($items));
}

print render ($items[0]);

?>
</div>