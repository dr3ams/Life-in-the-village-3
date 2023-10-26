// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	
event.create('copper_coin').displayName('Copper Coin').tooltip('Acquired through quests').rarity('Uncommon')
event.create('iron_coin').displayName('Iron Coin').tooltip('Acquired through quests').rarity('Uncommon')
event.create('gold_coin').displayName('Gold Coin').tooltip('Acquired through quests').rarity('Rare')
event.create('diamond_coin').displayName('Diamond Coin').tooltip('Acquired through quests').rarity('Epic')
event.create('netherite_coin').displayName('Netherite Coin').tooltip('Acquired through quests').rarity('Epic')
event.create('monster_coin').displayName('Monster Coin')
event.create('nether_coin').displayName('Nether Coin').tooltip('Acquired through completing Nether chapter quests').rarity('Uncommon')

event.create('diamond_nugget').displayName('Diamond Nugget')
event.create('emerald_nugget').displayName('Emerald Nugget')

event.create('dreadnoughtbow').displayName('Dreadnought Bow icon').tooltip('This item is just an icon. Recipe for Dreadnought Bow can be found in dungeon loot')
event.create('mace').displayName('Mace icon').tooltip('This item is just an icon. Recipe for Mace can be found in dungeon loot')
event.create('halberd').displayName('Halberd icon').tooltip('This item is just an icon. Recipe for Halberd can be found in dungeon loot')

event.create('coin_01').displayName('Coin').tooltip('Acquired by slaying Challenger mobs').rarity('Rare')
event.create('coin_02').displayName('Couple of Coins')
event.create('coin_03').displayName('Stack of Coins')
event.create('coin_04').displayName('Pile of Coins')
event.create('coin_05').displayName('Dozen of Coins')

event.create('medal').displayName('Medal').glow(true)
event.create('heart').displayName('Heart')

event.create('fox').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('kruscle').displayName('Kruscle Patreon Supporter Icon')
event.create('plua').displayName('ShadowFoxy Patreon Supporter Icon')
event.create('crankonator').displayName('Kruscle Patreon Supporter Icon')
event.create('lexileexx').displayName('LexiLeeXx Patreon Supporter Icon')
	
})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})