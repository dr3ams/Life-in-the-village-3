// priority: 0

console.info('Script for creating new items is starting...')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')

event.create('copper_coin').displayName('Copper Coin').tooltip('Acquired through quests')
event.create('iron_coin').displayName('Iron Coin').tooltip('Acquired through quests')
event.create('gold_coin').displayName('Gold Coin').tooltip('Acquired through quests')
event.create('diamond_coin').displayName('Diamond Coin').tooltip('Acquired through quests')
event.create('netherite_coin').displayName('Netherite Coin').tooltip('Acquired through quests')
event.create('monster_coin').displayName('Monster Coin')
event.create('nether_coin').displayName('Nether Coin').tooltip('Acquired through completing Nether chapter quests')

event.create('diamond_nugget').displayName('Diamond Nugget')
event.create('emerald_nugget').displayName('Emerald Nugget')


})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})