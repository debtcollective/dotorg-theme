wp.domReady(() => {
    // find blocks styles
    wp.blocks.getBlockTypes().forEach((block) => {
        if (_.isArray(block['styles'])) {
            console.log(block.name, _.pluck(block['styles'], 'name'));
        }
    });
});

wp.domReady( ()=> {

  wp.blocks.unregisterBlockStyle('core/button', 'fill');
  wp.blocks.unregisterBlockStyle('core/button', 'outline');

  wp.blocks.unregisterBlockStyle('core/image', 'rounded');
  wp.blocks.unregisterBlockStyle('core/image', 'default');

})
