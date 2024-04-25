// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.information(event => {

event.addItem('supplementaries:planter', ["Used for growing crops without a water source block.", "Now you can grow them even in the nether and you won't have to worry about animals trampling your crops!"])
event.addItem('supplementaries:faucet', ["When turned on, it starts spilling on the ground the inventory of up to two blocks behind it. If you place it in front of a water block (cauldron, water/waterlogged), it will start dripping water particles.", "You can use it to pour liquids to and from jars. Since it can extract items from the side of a block it enables some sort of automation not possible with vanilla.", "It will also interact with other blocks like hives and concrete powder. Its water color will depend on what's behind it."])
event.addItem('supplementaries:jar', ["Stores 4 buckets or 12 bottles of any vanilla liquids (like honey, milk, lava, potions, soups, dragon beath or xp) as well as fireflies. It functions as a shulker box for liquids or a rudimentary tank. You can now also store cookies and fish! Not compatible with the forge fluid system or with other fluid mods, meant to complement vanilla only."])
event.addItem('supplementaries:wind_vane', ["Emits a redstone signal, depending on the weather. The worse the weather, the stronger the signal."])
event.addItem('supplementaries:pedestal', ["Place an item on top to have it displayed. Stacking multiple pedestals will turn them into a pillar."])
event.addItem('supplementaries:redstone_illuminator', ["Light source that can be switched off with a redstone signal"])
event.addItem('supplementaries:crank', ["Outputs a redstone signal that gets stronger the more the crank is rotated."])
event.addItem('supplementaries:spring_launcher', ["Launches any entity on top of it when it is given a redstone signal."])
event.addItem('supplementaries:turn_table', ["When powered, will rotate any item/entity on top of it."])
event.addItem('supplementaries:clock_block', ["Right click on the block to get the time in hours. You are able to sleep at 18:00 and Dawn is at 06:00"])
event.addItem('supplementaries:bellows', ["When powered, will blow entities or items in front of it in the direction it is facing."])
event.addItem('supplementaries:cog_block', ["Transmits redstone power, just like redstone dust, but connects on all sides.","This making vertical redstone easier and looks cooler too."])
event.addItem('supplementaries:safe', ["Extremely hard block that functions as a chest. Retains inventory when broken."])
event.addItem('supplementaries:hourglass', ["Place sand in it and it will provide a redstone signal until the sand runs out. Flip and repeat."])

event.addItem('waystones:waystone', ["This item can be bought in the shop", "", "Players can activate waystones, which will allow them to teleport back to those waystones using items such as the Warp Stone or Warp Scrolls.", "", "Waystones can also be used to travel between each other."])
event.addItem('waystones:mossy_waystone', ["This item can be bought in the shop"])
event.addItem('waystones:sandy_waystone', ["This item can be bought in the shop"])
event.addItem('waystones:sharestone', ["This item can be bought in the shop", "", "The sharestone is a block that can be used to teleport to other sharestones of the same color. Unlike waystones, sharestones do not require the player to activate it first.", "", "All sharestones are always available to all players, making them a great tool for multiplayer servers."])
event.addItem('waystones:bound_scroll', ["This item can be bought in the shop", "", "The bound scroll is a special kind of warp scroll that can be tied to a specific waystone by right-clicking the waystone with it.", "", "It can be used to teleport back to that specific waystone, or it could be given to another player and allow them to easily get to the bound waystone even if they have not activated it yet."])
event.addItem('waystones:warp_scroll', ["This item can be bought in the shop", "", "The warp scroll is the one-time use version of the Warp Stone. It can be used to teleport to any of your activated waystones."])
event.addItem('waystones:warp_stone', ["This item can be bought in the shop", "", "The warp stone allows you to teleport to any of your activated waystones.", "", "Once used, a cooldown period starts before you can use a warp stone again. This cooldown is tied to your player, not the warp stone itself, so there is no use in having multiple warp stones."])
event.addItem('waystones:warp_plate', ["This item can be bought in the shop", "", "Warp Plates can be compared to teleporting pressure plates. Stand on one and you will get teleported to another warp plate. Warp Plates are attuned to each other by inserting the Attuned Shard of another warp plate."])
  
  
    event.addItem('gag:time_sand_pouch', ["This item can be bought in the shop for a reasonable price"])
    event.addItem('gag:escape_rope', ["This item can be bought in the shop for a reasonable price"])
    event.addItem('gag:hearthstone', ["This item can be bought in the shop for a reasonable price"])
    event.addItem('gag:sacred_salt', ["This item can be bought in the shop for a reasonable price"])
    event.addItem('gag:sacred_salve', ["This item can be bought in the shop for a reasonable price"])
    event.addItem('gag:sacred_balm', ["This item can be bought in the shop for a reasonable price"])
	event.addItem('gag:mining_dynamite', ["This item can be bought in the shop for a reasonable price"])
	event.addItem('gag:labeling_tool', ["This item can be bought in the shop for a reasonable price"]) 
  
 
})

JEIEvents.hideItems(event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
	
	event.hide('storagedrawers:compacting_drawers_3')	
	event.hide('tombstone:book_of_recycling')	
	event.hide('constructionwand:core_destruction')
})