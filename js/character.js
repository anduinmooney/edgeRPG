export class Character {
  constructor(brawn, agility, intelligence, cunning, willpower, precense, soak, wound, strain, defense, astrogation, athletics, charm, coercion, computers, cool, coordination, deception, discipline, leadership, mechanics, medicine, negotiation, perception, pilotingPlanetary, pilotingSpace, resillience, skulduggery, stealth, streetwise, survival, vigilance, brawl, gunnary, melee, rangedLight, rangedHeavy, coreWorlds, education, lore, outerRim, underworld, xenology, weapon, armor, credits, xp, species) {
    this.brawn = brawn;
    this.agility = agility;
    this.intelligence = intelligence;
    this.cunning = cunning;
    this.willpower = willpower;
    this.precense = precense;
    this.soak = soak;
    this.wound = wound;
    this.strain = strain;
    this.defense = defense;
    this.astrogation = astrogation;
    this.athletics = athletics;
    this.charm = charm;
    this.coercion = coercion;
    this.computers = computers;
    this.cool = cool;
    this.coordination = coordination;
    this.deception = deception;
    this.discipline = discipline;
    this.leadership = leadership;
    this.mechanics = mechanics;
    this.medicine = medicine;
    this.negotiation = negotiation;
    this.perception = perception;
    this.pilotingPlanetary = pilotingPlanetary;
    this.pilotingSpace = pilotingSpace;
    this.resillience = resillience;
    this.skulduggery = skulduggery;
    this.stealth = stealth;
    this.streetwise = streetwise;
    this.survival = survival;
    this.vigilance = vigilance;
    this.brawl = brawl;
    this.gunnary = gunnary;
    this.melee = melee;
    this.rangedLight = rangedLight;
    this.rangedHeavy = rangedHeavy;
    this.coreWorlds = coreWorlds;
    this.education = education;
    this.lore = lore;
    this.outerRim = outerRim;
    this.underworld = underworld;
    this.xenology = xenology;
    this.weapon = weapon;
    this.armor = armor;
    this.credits = credits;
    this.xp = xp;
    this.species = species;
  }

  checktype() {
    if(this.species === "bothan") {
      let brawn = 1;
      let agility = 2;
      let intelligence = 2;
      let cunning = 3;
      let willpower = 2;
      let precense = 2;
      let xp = 100;

  } else if (this.species === "droid") {
    let brawn = 1;
    let agility = 1;
    let intelligence = 1;
    let cunning = 1;
    let willpower = 1;
    let precense = 1;
    let xp = 175;

  } else if (this.species === "gand") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 1;
    let xp = 100;

  } else if (this.species === "human") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 110;

  } else if (this.species === "rodian") {
    let brawn = 2;
    let agility = 3;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 1;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "trandoshan") {
    let brawn = 3;
    let agility = 1;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 90;

  } else if (this.species === "twi'lek") {
    let brawn = 1;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 2;
    let precense = 3;
    let xp = 100;

  } else if (this.species === "wookiee") {
    let brawn = 3;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 1;
    let precense = 3;
    let xp = 90;

  } else if (this.species === "chiss") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 3;
    let cunning = 2;
    let willpower = 2;
    let precense = 1;
    let xp = 100;

  } else if (this.species === "duros") {
    let brawn = 1;
    let agility = 2;
    let intelligence = 3;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "toydarian") {
    let brawn = 1;
    let agility = 1;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 3;
    let xp = 90;

  } else if (this.species === "drall") {
    let brawn = 1;
    let agility = 1;
    let intelligence = 4;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 90;

  } else if (this.species === "selonian") {
    let brawn = 2;
    let agility = 3;
    let intelligence = 2;
    let cunning = 1;
    let willpower = 3;
    let precense = 1;
    let xp = 80;

  } else if (this.species === "corellianHuman") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 110;

  } else if (this.species === "hutt") {
    let brawn = 3;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 2;
    let xp = 70;

  } else if (this.species === "gank") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 2;
    let precense = 1;
    let xp = 110;

  } else if (this.species === "aqualish") {
    let brawn = 3;
    let agility = 2;
    let intelligence = 1;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 90;

  } else if (this.species === "klatooinian") {
    let brawn = 2;
    let agility = 3;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 1;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "weequay") {
    let brawn = 3;
    let agility = 2;
    let intelligence = 1;
    let cunning = 3;
    let willpower = 2;
    let precense = 1;
    let xp = 90;

  } else if (this.species === "arcona") {
    let brawn = 1;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "chevin") {
    let brawn = 3;
    let agility = 1;
    let intelligence = 2;
    let cunning = 3;
    let willpower = 2;
    let precense = 1;
    let xp = 80;

  } else if (this.species === "gran") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 2;
    let cunning = 1;
    let willpower = 2;
    let precense = 3;
    let xp = 100;

  } else if (this.species === "falleen") {
    let brawn = 2;
    let agility = 1;
    let intelligence = 3;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 90;

  } else if (this.species === "gotal") {
    let brawn = 1;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "quarren") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 1;
    let cunning = 2;
    let willpower = 3;
    let precense = 2;
    let xp = 95;

  } else if (this.species === "ithorian") {
    let brawn = 2;
    let agility = 1;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 2;
    let xp = 90;

  } else if (this.species === "monCalamari") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 3;
    let cunning = 1;
    let willpower = 2;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "sullustan") {
    let brawn = 2;
    let agility = 3;
    let intelligence = 2;
    let cunning = 1;
    let willpower = 2;
    let precense = 2;
    let xp = 110;

  } else if (this.species === "chadra-fan") {
    let brawn = 1;
    let agility = 3;
    let intelligence = 3;
    let cunning = 2;
    let willpower = 1;
    let precense = 2;
    let xp = 90;

  } else if (this.species === "dressellian") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 1;
    let xp = 110;

  } else if (this.species === "xexto") {
    let brawn = 1;
    let agility = 3;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 1;
    let precense = 2;
    let xp = 85;

  } else if (this.species === "cerean") {
    let brawn = 2;
    let agility = 1;
    let intelligence = 3;
    let cunning = 2;
    let willpower = 2;
    let precense = 2;
    let xp = 90;

  } else if (this.species === "kelDor") {
    let brawn = 1;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "mirialan") {
    let brawn = 2;
    let agility = 3;
    let intelligence = 2;
    let cunning = 1;
    let willpower = 2;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "nautolan") {
    let brawn = 3;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 1;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "togruta") {
    let brawn = 1;
    let agility = 2;
    let intelligence = 2;
    let cunning = 3;
    let willpower = 2;
    let precense = 2;
    let xp = 100;

  } else if (this.species === "zabrak") {
    let brawn = 2;
    let agility = 2;
    let intelligence = 2;
    let cunning = 2;
    let willpower = 3;
    let precense = 1;
    let xp = 100;
  }
}
}
