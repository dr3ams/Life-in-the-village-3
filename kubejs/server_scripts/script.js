// priority: 0
console.info('Starting recipe modification scripts...')

ServerEvents.recipes(event => {
	event.remove({output: 'constructionwand:core_destruction'})
	event.remove({output: 'alexsmobs:vine_lasso'})
	event.remove({output: 'usefulhats:aquanaut_helmet'})
	event.remove({output: 'usefulhats:bunny_ears'})
	event.remove({output: 'usefulhats:chopping_hat'})
	event.remove({output: 'usefulhats:ender_helmet'})
	event.remove({output: 'usefulhats:halo'})
	event.remove({output: 'usefulhats:lucky_hat'})
	event.remove({output: 'usefulhats:mining_hat'})
	event.remove({output: 'usefulhats:mushroom_hat'})
	event.remove({output: 'usefulhats:postman_hat'})
	event.remove({output: 'usefulhats:shulker_helmet'})
	event.remove({output: 'usefulhats:stocking_cap'})
	event.remove({output: 'usefulhats:straw_hat'})
	event.remove({output: 'usefulhats:wing_helmet'})
	event.remove({output: 'waystones:waystone'})
	event.remove({output: 'waystones:mossy_waystone'})
	event.remove({output: 'waystones:sandy_waystone'})
	event.remove({output: 'waystones:sharestone'})
	event.remove({output: 'waystones:bound_scroll'})
	event.remove({output: 'waystones:warp_scroll'})
	event.remove({output: 'waystones:warp_plate'})
	event.remove({output: 'waystones:warp_stone'})


    event.remove({output: 'gag:time_sand_pouch'})
    event.remove({output: 'gag:escape_rope'})
    event.remove({output: 'gag:hearthstone'})
    event.remove({output: 'gag:sacred_salt'})
    event.remove({output: 'gag:sacred_salve'})
    event.remove({output: 'gag:sacred_balm'})
	event.remove({output: 'gag:mining_dynamite'})
	event.remove({output: 'gag:labeling_tool'})
	
	event.remove({output: 'skilltree:copper_ring'})
	event.remove({output: 'skilltree:iron_ring'})
	event.remove({output: 'skilltree:golden_ring'})
	event.remove({output: 'skilltree:simple_necklace'})
	event.remove({output: 'skilltree:traveler_necklace'})
	event.remove({output: 'skilltree:fisherman_necklace'})
	event.remove({output: 'skilltree:assassin_necklace'})
	event.remove({output: 'skilltree:healer_necklace'})
	event.remove({output: 'skilltree:scholar_necklace'})
	event.remove({output: 'skilltree:arsonist_necklace'})
	
	event.remove({output: 'storagedrawers:compacting_drawers_3'})
	event.remove({output: 'tombstone:book_of_recycling'})
	
	event.shaped('minecraft:diamond', [
    'DDD',
    'DDD',
    'DDD'
	], {
    D: 'kubejs:diamond_nugget'
	})
	
	event.shaped('minecraft:emerald', [
    'EEE',
    'EEE',
    'EEE'
	], {
    E: 'kubejs:emerald_nugget'
	})
	
	event.shaped('kubejs:coin_02', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_01'
	})
	event.shapeless('9x kubejs:coin_01', ['kubejs:coin_02'])
	
	event.shaped('kubejs:coin_03', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_02'
	})
	event.shapeless('9x kubejs:coin_02', ['kubejs:coin_03'])
	
	
	event.shaped('kubejs:coin_04', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_03'
	})
	event.shapeless('9x kubejs:coin_03', ['kubejs:coin_04'])
	
	event.shaped('kubejs:coin_05', [
    'CCC',
    'CCC',
    'CCC'
	], {
    C: 'kubejs:coin_04'
	})
	event.shapeless('9x kubejs:coin_04', ['kubejs:coin_05'])

	//provided by @Linguardium	
	event.replaceInput(
        {  input: 'nourished_nether:hoglin_hide' },
        'nourished_nether:hoglin_hide',
        '#litv:hoglin_hides'
    );
    event.replaceInput(
        {  input: 'nethersdelight:hoglin_hide' },
        'nethersdelight:hoglin_hide',
        '#litv:hoglin_hides'
    );
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients:[
            { item: "nethersdelight:hoglin_loin"}
        ],
        tool: { tag: 'forge:tools/knives' },        
        result:[{
            item:'nourished_nether:raw_hoglin'
        }]
    });
	
})

PlayerEvents.loggedIn(event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
	event.player.give('ftbquests:book')
    event.player.give('minecraft:stone_sword')
    event.player.give(Item.of('minecraft:stone_pickaxe', "{Damage: 10}"))
    event.player.give('10x minecraft:apple')
	event.player.give('collectorsalbum:common_card_package')
	event.player.give('farmersrespite:black_tea')
	event.player.give('minecraft:cake')
	event.player.give('6x minecraft:wheat_seeds')
	event.player.give('4x minecraft:potato')
	event.player.give('supplementaries:bubble_blower')
	event.player.give('minecraft:leather_leggings')
	event.player.give('minecraft:leather_boots')
	event.player.give('constructionwand:stone_wand')
	event.player.give('12x buzzier_bees:honey_bread')
  }
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	
	//provided by @Linguardium
	event.get('litv:hoglin_hides')
    .add('nethersdelight:hoglin_hide')
    .add('nourished_nether:hoglin_hide');
	
	event.add('quark:seed_pouch_holdable','italian_delight:grape_seeds')
	event.add('quark:seed_pouch_holdable','farmersrespite:tea_seeds')
})