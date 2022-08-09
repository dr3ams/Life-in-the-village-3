// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Starting recipe modification scripts...')

onEvent('recipes', event => {
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
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})