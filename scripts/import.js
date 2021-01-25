// PROJECTILES

game.importDataProjectiles = function() {
  let weapons = []
  fetch("systems/degenesis/import/projectiles.json").then(r => r.json().then(json => {
  for (let item of json.items)
  {
    let itemData = duplicate(game.system.model.Item.weapon)
    itemData.cult = item.cult.join(", ")
    itemData.damage = item.damage
    itemData.description = item.description
    itemData.encumbrance = item.encumbrance || 0
    itemData.distance.short = item.distance[0]["effective"] || 0
    itemData.distance.far = item.distance[1]["far shot"] || 0
    itemData.handling = item.handling || 0
    itemData.tech = item.technology || 0
    //item.caliber
    itemData.caliber = DEG_Utility.findKey(item.caliber, DEGENESIS.calibers)
    itemData.group = "projectiles"
    itemData.mag.size = item.magazine || 0
    itemData.qualities = item.qualities.map(q => {
      let qualityObj = {
        name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.weaponQualities),
      }
      qualityObj.values = DEGENESIS.weaponQualitiesValues[qualityObj.name].map(name => {return {name}})
      if (q.property)
        qualityObj.values[0].value = q.property
      return qualityObj
    })
    itemData.resources = item.resources || 0
    itemData.slots = {total: item.slots || 0, used : 0}
    itemData.value = item.value || 0
    let newItem = {name : item.name, data : itemData, type : "weapon"}
    if (item.specialty)
      setProperty(newItem, "flags.degenesis.specialty", item.specialty)

    Item.create(newItem);
    Items.update;
      
     weapons.push(newItem);
  }
}))


return weapons;

}

//HANDGUNS

game.importDataHandguns = function() {
  let weapons = []
  fetch("systems/degenesis/import/handguns.json").then(r => r.json().then(json => {
  for (let item of json.items)
  {
    let itemData = duplicate(game.system.model.Item.weapon)
    itemData.cult = item.cult.join(", ")
    itemData.damage = item.damage
    itemData.description = item.description
    itemData.encumbrance = item.encumbrance || 0
    itemData.distance.short = item.distance[0]["effective"] || 0
    itemData.distance.far = item.distance[1]["far shot"] || 0
    itemData.handling = item.handling || 0
    itemData.tech = item.technology || 0
    //item.caliber
    itemData.caliber = DEG_Utility.findKey(item.caliber, DEGENESIS.calibers)
    itemData.group = "handguns"
    itemData.mag.size = item.magazine || 0
    itemData.qualities = item.qualities.map(q => {
      let qualityObj = {
        name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.weaponQualities),
      }
      qualityObj.values = DEGENESIS.weaponQualitiesValues[qualityObj.name].map(name => {return {name}})
      if (q.property)
        qualityObj.values[0].value = q.property
      return qualityObj
    })
    itemData.resources = item.resources || 0
    itemData.slots = {total: item.slots || 0, used : 0}
    itemData.value = item.value || 0
    let newItem = {name : item.name, data : itemData, type : "weapon"}
    if (item.specialty)
      setProperty(newItem, "flags.degenesis.specialty", item.specialty)

    Item.create(newItem);
    Items.update;
      
     weapons.push(newItem);
  }
}))


return weapons;

}

// RIFLES
game.importDataRifles = function() {
  let weapons = []
  fetch("systems/degenesis/import/rifles.json").then(r => r.json().then(json => {
  for (let item of json.items)
  {
    let itemData = duplicate(game.system.model.Item.weapon)
    itemData.cult = item.cult.join(", ")
    itemData.damage = item.damage
    itemData.description = item.description
    itemData.encumbrance = item.encumbrance || 0
    itemData.distance.short = item.distance[0]["effective"] || 0
    itemData.distance.far = item.distance[1]["far shot"] || 0
    itemData.handling = item.handling || 0
    itemData.tech = item.technology || 0
    //item.caliber
    itemData.caliber = DEG_Utility.findKey(item.caliber, DEGENESIS.calibers)
    itemData.group = "rifles"
    itemData.mag.size = item.magazine || 0
    itemData.qualities = item.qualities.map(q => {
      let qualityObj = {
        name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.weaponQualities),
      }
      qualityObj.values = DEGENESIS.weaponQualitiesValues[qualityObj.name].map(name => {return {name}})
      if (q.property)
        qualityObj.values[0].value = q.property
      return qualityObj
    })
    itemData.resources = item.resources || 0
    itemData.slots = {total: item.slots || 0, used : 0}
    itemData.value = item.value || 0
    let newItem = {name : item.name, data : itemData, type : "weapon"}
    if (item.specialty)
      setProperty(newItem, "flags.degenesis.specialty", item.specialty)

    Item.create(newItem);
    Items.update;
      
     weapons.push(newItem);
  }
}))


return weapons;

}

game.importDataThrown = function() {
  let weapons = []
  fetch("systems/degenesis/import/thrown.json").then(r => r.json().then(json => {
  for (let item of json.items)
  {
    let itemData = duplicate(game.system.model.Item.weapon)
    itemData.cult = item.cult.join(", ")
    itemData.damage = item.damage
    itemData.description = item.description
    itemData.encumbrance = item.encumbrance || 0
    itemData.distance.short = item.distance[0]["effective"] || 0
    itemData.distance.far = item.distance[1]["far shot"] || 0
    itemData.handling = item.handling || 0
    itemData.tech = item.technology || 0
    //item.caliber
    
    itemData.group = "thrown"
    itemData.mag.size = item.magazine || 0
    itemData.qualities = item.qualities.map(q => {
      let qualityObj = {
        name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.weaponQualities),
      }
      qualityObj.values = DEGENESIS.weaponQualitiesValues[qualityObj.name].map(name => {return {name}})
      if (q.property)
        qualityObj.values[0].value = q.property
      return qualityObj
    })
    itemData.resources = item.resources || 0
    itemData.slots = {total: item.slots || 0, used : 0}
    itemData.value = item.value || 0
    let newItem = {name : item.name, data : itemData, type : "weapon"}
    if (item.specialty)
      setProperty(newItem, "flags.degenesis.specialty", item.specialty)

  Item.create(newItem);
  Items.update;
      
     weapons.push(newItem);
  }
}))


return weapons;

}


game.importDataMeele = function() {
  let weapons = []
  fetch("systems/degenesis/import/thrown.json").then(r => r.json().then(json => {
  for (let item of json.items)
  {
    let itemData = duplicate(game.system.model.Item.weapon)
    itemData.cult = item.cult.join(", ")
    itemData.damage = item.damage
    itemData.description = item.description
    itemData.encumbrance = item.encumbrance || 0
    itemData.distance.short = item.distance[0]["effective"] || 0
    itemData.distance.far = item.distance[1]["far shot"] || 0
    itemData.handling = item.handling || 0
    itemData.tech = item.technology || 0
    //item.caliber
    
    itemData.group = "thrown"
    itemData.mag.size = item.magazine || 0
    itemData.qualities = item.qualities.map(q => {
      let qualityObj = {
        name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.weaponQualities),
      }
      qualityObj.values = DEGENESIS.weaponQualitiesValues[qualityObj.name].map(name => {return {name}})
      if (q.property)
        qualityObj.values[0].value = q.property
      return qualityObj
    })
    itemData.resources = item.resources || 0
    itemData.slots = {total: item.slots || 0, used : 0}
    itemData.value = item.value || 0
    let newItem = {name : item.name, data : itemData, type : "weapon"}
    if (item.specialty)
      setProperty(newItem, "flags.degenesis.specialty", item.specialty)

  Item.create(newItem);
  Items.update;
      
     weapons.push(newItem);
  }
}))


return weapons;

}


game.importDataMelee = function() {
  let weapons = []
  fetch("systems/degenesis/import/melee.json").then(r => r.json().then(json => {
  for (let item of json.items)
  {
    let itemData = duplicate(game.system.model.Item.weapon)
    itemData.cult = item.cult.join(", ")
    itemData.damage = item.damage
    itemData.damageBonus = item.damageBonus
    itemData.description = item.description
    itemData.encumbrance = item.encumbrance || 0
    itemData.distance.melee = item.distance || 0
    itemData.handling = item.handling || 0
    itemData.tech = item.technology || 0
    itemData.group = "armedMelee"
    itemData.mag.size = item.magazine || 0

    itemData.qualities = item.qualities.map(q => {
      let qualityObj = {
        name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.weaponQualities),
      }
      qualityObj.values = DEGENESIS.weaponQualitiesValues[qualityObj.name].map(name => {return {name}})
      if (q.property)
        qualityObj.values[0].value = q.property
      return qualityObj
    })
    itemData.resources = item.resources || 0
    itemData.slots = {total: item.slots || 0, used : 0}
    itemData.value = item.value || 0
    let newItem = {name : item.name, data : itemData, type : "weapon"}
    if (item.specialty)
      setProperty(newItem, "flags.degenesis.specialty", item.specialty)

  Item.create(newItem);
  Items.update;
      
     weapons.push(newItem);
  }
}))

return weapons;

}


game.importDataArmor= function() {
  let weapons = []
  fetch("systems/degenesis/import/armor.json").then(r => r.json().then(json => {
  for (let item of json.items)
  {
    let itemData = duplicate(game.system.model.Item.armor)
    itemData.cult = item.cult.join(", ")
    itemData.AP = item.rating
    itemData.description = item.description
    itemData.encumbrance = item.encumbrance || 0
    itemData.tech = item.technology || 0
    itemData.group = ""

    itemData.qualities = item.qualities.map(q => {
      let qualityObj = {
        name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.armorQualities),
      }
      qualityObj.values = DEGENESIS.armorQualitiesValues[qualityObj.name].map(name => {return {name}})
      if (q.property)
        qualityObj.values[0].value = q.property
      return qualityObj
    })
    itemData.resources = item.resources || 0
    itemData.slots = {total: item.slots || 0, used : 0}
    itemData.value = item.value || 0
    let newItem = {name : item.name, data : itemData, type : "armor"}
    if (item.specialty)
      setProperty(newItem, "flags.degenesis.specialty", item.specialty)

  Item.create(newItem);
  Items.update;
      
     weapons.push(newItem);
  }
}))

return weapons;

}

game.importDataShield= function() {
let weapons = []
fetch("systems/degenesis/import/shields.json").then(r => r.json().then(json => {
for (let item of json.items)
{
  let itemData = duplicate(game.system.model.Item.shield)
  itemData.cult = item.cult.join(", ")
  itemData.defense.D = item.defense[0]["active"]
  itemData.defense.p_defense = item.defense[1]["passive"]
  itemData.attack.D = item.attack

  itemData.description = item.description
  itemData.encumbrance = item.encumbrance || 0
  itemData.tech = item.technology || 0
  itemData.group = ""

  itemData.qualities = item.qualities.map(q => {
    let qualityObj = {
      name : q.name = DEG_Utility.findKey(q.name, DEGENESIS.armorQualities),
    }
    qualityObj.values = DEGENESIS.armorQualitiesValues[qualityObj.name].map(name => {return {name}})
    if (q.property)
      qualityObj.values[0].value = q.property
    return qualityObj
  })
  itemData.resources = item.resources || 0
  itemData.slots = {total: item.slots || 0, used : 0}
  itemData.value = item.value || 0
  let newItem = {name : item.name, data : itemData, type : "shield"}
  if (item.specialty)
    setProperty(newItem, "flags.degenesis.specialty", item.specialty)

Item.create(newItem);
Items.update;
    
   weapons.push(newItem);
}
}))

return weapons;

}
