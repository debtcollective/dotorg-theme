wp.domReady( ()=> {
  console.log('hi trying to unregister rounded image style')
  wp.blocks.unregisterBlockStyle('core/image', 'rounded');
  wp.blocks.unregisterBlockStyle('core/image', 'default');
})
