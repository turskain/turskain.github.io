var MOVES_RBY = {
    '(No Move)': {
        bp: 0,
        type: 'Normal',
        category: 'Physical',
        pp: 0
    },
    'Absorb': {
        bp: 20,
        type: 'Grass',
        pp: 20
    },
    'Acid': {
        bp: 40,
        type: 'Poison',
        pp: 30
    },
    'Acid Armor': {
        bp: 0,
        type: 'Poison',
        pp: 20
    },
    'Agility': {
        bp: 0,
        type: 'Psychic',
        pp: 30
    },
    'Amnesia': {
        bp: 0,
        type: 'Psychic',
        pp: 20
    },
    'Aurora Beam': {
        bp: 65,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 20
    },
    'Barrier': {
        bp: 0,
        type: 'Psychic',
        pp: 20
    },
    'Bide': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Bind': {
        bp: 15,
        type: 'Normal',
        pp: 20
    },
    'Blizzard': {
        bp: 120,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        isSpread: true,
        pp: 5
    },
    'Body Slam': {
        bp: 85,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        pp: 15
    },
    'Bone Club': {
        bp: 65,
        type: 'Ground',
        category: 'Physical',
        hasSecondaryEffect: true,
        pp: 20
    },
    'Bubble Beam': {
        bp: 65,
        type: 'Water',
        pp: 20
    },
    'Clamp': {
        bp: 35,
        type: 'Water',
        pp: 10
    },
    'Crabhammer': {
        bp: 90,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        pp: 10
    },
    'Comet Punch': {
        bp: 18,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true,
        pp: 15
    },
    'Confuse Ray': {
        bp: 0,
        type: 'Ghost',
        pp: 10
    },
    'Confusion': {
        bp: 50,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 25
    },
    'Counter': {
        bp: 0,
        type: 'Fighting',
        pp: 20
    },
    'Defense Curl': {
        bp: 0,
        type: 'Normal',
        pp: 40
    },
    'Dig': {
        bp: 60,
        type: 'Ground',
        makesContact: true,
        pp: 10
    },
    'Disable': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Dizzy Punch': {
        bp: 70,
        type: 'Normal',
        category: 'Physical',
        hasSecondaryEffect: true,
        makesContact: true,
        pp: 10
    },
    'Double Kick': {
        bp: 30,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        isTwoHit: true,
        pp: 30
    },
    'Double-Edge': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        pp: 15
    },
    'Double Slap': {
        bp: 15,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true,
        pp: 15
    },
    'Double Team': {
        bp: 0,
        type: 'Normal',
        pp: 15
    },
    'Dragon Breath': {
        bp: 60,
        type: 'Dragon',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 20
    },
    'Dragon Rage': {
        bp: 0,
        type: 'Dragon',
        category: 'Special',
        pp: 10
    },
    'Dream Eater': {
        bp: 100,
        type: 'Psychic',
        category: 'Special',
        givesHealth: true,
        percentHealed: 0.5,
        pp: 15
    },
    'Drill Peck': {
        bp: 80,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        pp: 20
    },
    'Earthquake': {
        bp: 100,
        type: 'Ground',
        category: 'Physical',
        isSpread: true,
        pp: 10
    },
    'Egg Bomb': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        pp: 10
    },
    'Ember': {
        bp: 40,
        type: 'Fire',
        category: 'Special',
        pp: 25
    },
    'Explosion': {
        bp: 170,
        type: 'Normal',
        category: 'Physical',
        isSpread: true,
        pp: 5
    },
    'Fire Blast': {
        bp: 120,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 5
    },
    'Fire Punch': {
        bp: 75,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        pp: 15
    },
    'Fire Spin': {
        bp: 15,
        type: 'Fire',
        pp: 15
    },
    'Fissure': {
        bp: 0,
        type: 'Ground',
        pp: 5
    },
    'Flamethrower': {
        bp: 95,
        type: 'Fire',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 15
    },
    'Flash': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Fly': {
        bp: 70,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        pp: 15
    },
    'Focus Energy': {
        bp: 0,
        type: 'Normal',
        pp: 30
    },
    'Fury Attack': {
        bp: 15,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true,
        pp: 20
    },
    'Fury Swipes': {
        bp: 18,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        isMultiHit: true,
        pp: 15
    },
    'Glare': {
        bp: 0,
        type: 'Normal',
        pp: 30
    }, 
    'Growl': {
        bp: 0,
        type: 'Normal',
        pp: 40
    },
    'Growth': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Guillotine': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
    'Gust': {
        bp: 40,
        type: 'Normal',
        category: 'Special',
        pp: 35
    },
    'Haze': {
        bp: 0,
        type: 'Ice',
        pp: 30
    },
    'Harden': {
        bp: 0,
        type: 'Normal',
        pp: 30
    },
    'High Jump Kick': {
        bp: 85,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        pp: 10
    },
    'Horn Drill': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
    'Hydro Pump': {
        bp: 120,
        type: 'Water',
        category: 'Special',
        pp: 5
    },
    'Hyper Beam': {
        bp: 150,
        type: 'Normal',
        category: 'Special',
        pp: 5
    },
    'Hyper Fang': {
        bp: 80,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isBite: true,
        pp: 15
    },
    'Hypnosis': {
        bp: 0,
        type: 'Psychic',
        pp: 20
    },
    'Ice Beam': {
        bp: 95,
        type: 'Ice',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 10
    },
    'Ice Punch': {
        bp: 75,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        pp: 15
    },
    'Jump Kick': {
        bp: 70,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        hasRecoil: true,
        pp: 10
    },
    'Karate Chop': {
        bp: 50,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        pp: 25
    },
    'Leech Life': {
        bp: 20,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        givesHealth: true,
        percentHealed: 0.5,
        pp: 10
    },
    'Leech Seed': {
        bp: 0,
        type: 'Grass',
        pp: 10
    },
    'Leer': {
        bp: 0,
        type: 'Normal',
        pp: 30
    },
    'Lick': {
        bp: 30,
        type: 'Ghost',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        pp: 30
    },
    'Light Screen': {
        bp: 0,
        type: 'Psychic',
        pp: 30
    },
    'Lovely Kiss': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Meditate': {
        bp: 0,
        type: 'Psychic',
        pp: 40
    },
    'Mega Drain': {
        bp: 40,
        type: 'Grass',
        givesHealth: true,
        percentHealed: 0.5,
        pp: 15
    },
    'Mega Kick': {
        bp: 120,
        type: 'Normal',
        category: 'Physical',
        pp: 5
    },
    'Mega Punch': {
        bp: 80,
        type: 'Normal',
        category: 'Physical',
        pp: 20
    },
    'Metronome': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Mimic': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Minimize': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Mirror Move': {
        bp: 0,
        type: 'Flying',
        pp: 20
    },
    'Mist': {
        bp: 0,
        type: 'Ice',
        pp: 30
    },
    'Night Shade': {
        bp: 0,
        type: 'Ghost',
        category: 'Special',
        pp: 15
    },
    'Petal Dance': {
        bp: 120,
        type: 'Grass',
        category: 'Special',
        makesContact: true,
        pp: 10
    },
    'Pin Missile': {
        bp: 14,
        type: 'Bug',
        category: 'Physical',
        isMultiHit: true,
        pp: 20
    },
    'Poison Fang': {
        bp: 15,
        type: 'Poison',
        category: 'Physical',
        hasSecondaryEffect: true,
        pp: 35
    },
    'Psybeam': {
        bp: 65,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 20
    },
    'Psychic': {
        bp: 90,
        type: 'Psychic',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 10
    },
    'Psywave': {
        bp: 0,
        type: 'Psychic',
        category: 'Special',
        pp: 15
    },
    'Quick Attack': {
        bp: 40,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        hasPriority: true,
        pp: 30
    },
    'Razor Leaf': {
        bp: 55,
        type: 'Grass',
        category: 'Physical',
        alwaysCrit: true,
        pp: 25
    },
    'Razor Wind': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        pp: 10
    },
    'Recover': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Reflect': {
        bp: 0,
        type: 'Psychic',
        pp: 20
    },
    'Rest': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
    'Roar': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Rock Slide': {
        bp: 75,
        type: 'Rock',
        category: 'Physical',
        hasSecondaryEffect: true,
        isSpread: true,
        pp: 10
    },
    'Rock Throw': {
        bp: 50,
        type: 'Rock',
        category: 'Physical',
        pp: 15
    },
    'Rolling Kick': {
        bp: 60,
        type: 'Fighting',
        category: 'Physical',
        hasSecondaryEffect: true,
        pp: 15
    },
    'Sand Attack': {
        bp: 0,
        type: 'Ground',
        pp: 15
    },
    'Scratch': {
        bp: 40,
        type: 'Normal',
        pp: 35
    },
    'Screech': {
        bp: 0,
        type: 'Normal',
        pp: 40
    },
    'Seismic Toss': {
        bp: 0,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        pp: 20
    },
    'Self-Destruct': {
        bp: 130,
        type: 'Normal',
        category: 'Physical',
        isSpread: true,
        pp: 5
    },
    'Sing': {
        bp: 0,
        type: 'Normal',
        pp: 15
    },
    'Sky Attack': {
        bp: 140,
        type: 'Flying',
        category: 'Physical',
        hasSecondaryEffect: true,
        pp: 5
    },
    'Skull Bash': {
        bp: 100,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        pp: 10
    },
    'Slam': {
        bp: 80,
        type: 'Normal',
        pp: 20
    },
    'Slash': {
        bp: 70,
        type: 'Normal',
        alwaysCrit: true,
        makesContact: true,
        pp: 20
    },
    'Sleep Powder': {
        bp: 0,
        type: 'Grass',
        pp: 15
    },
    'Sludge': {
        bp: 65,
        type: 'Poison',
        pp: 20
    },
    'Smog': {
        bp: 20,
        type: 'Poison',
        pp: 20
    },
    'Smokescreen': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Soft-Boiled': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Sonic Boom': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Spike Cannon': {
        bp: 15,
        type: 'Normal',
        isMultiHit: true,
        pp: 15
    },
    'Spore': {
        bp: 0,
        type: 'Grass',
        pp: 15
    },
    'Stomp': {
        bp: 65,
        type: 'Normal',
        makesContact: true,
        pp: 20
    },
    'Strength': {
        bp: 80,
        type: 'Normal',
        makesContact: true,
        pp: 15
    },
    'String Shot': {
        bp: 0,
        type: 'Bug',
        pp: 40
    },
    'Stun Spore': {
        bp: 0,
        type: 'Grass',
        pp: 30
    },
    'Submission': {
        bp: 80,
        type: 'Fighting',
        makesContact: true,
        hasRecoil: true,
        pp: 20
    },
    'Substitute': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Super Fang': {
        bp: 0,
        type: 'Normal',
        makesContact: true,
        pp: 10
    },
    'Supersonic': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Surf': {
        bp: 95,
        type: 'Water',
        category: 'Special',
        isSpread: true,
        pp: 15
    },
    'Swift': {
        bp: 60,
        type: 'Normal',
        category: 'Special',
        isSpread: true,
        pp: 20
    },
    'Swords Dance': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Tackle': {
        bp: 35,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        pp: 35
    },
    'Tail Whip': {
        bp: 0,
        type: 'Normal',
        pp: 30
    },
    'Take Down': {
        bp: 90,
        type: 'Normal',
        makesContact: true,
        hasRecoil: 25,
        pp: 20
    },
    'Thrash': {
        bp: 90,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        pp: 10
    },
    'Thunder': {
        bp: 120,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 10
    },
    'Thunderbolt': {
        bp: 95,
        type: 'Electric',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 15
    },
    'Thunder Punch': {
        bp: 75,
        type: 'Electric',
        category: 'Physical',
        makesContact: true,
        hasSecondaryEffect: true,
        isPunch: true,
        pp: 15
    },
    'Thunder Wave': {
        bp: 0,
        type: 'Electric',
        pp: 20
    },
    'Toxic': {
        bp: 0,
        type: 'Poison',
        pp: 10
    },
    'Transform': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Tri Attack': {
        bp: 80,
        type: 'Normal',
        category: 'Special',
        pp: 10
    },
    'Twineedle': {
        bp: 25,
        type: 'Bug',
        isTwoHit: true,
        pp: 20
    },
    'Vice Grip': {
        bp: 55,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        pp: 30
    },
    'Water Gun': {
        bp: 40,
        type: 'Water',
        category: 'Special',
        pp: 25
    },
    'Waterfall': {
        bp: 80,
        type: 'Water',
        category: 'Physical',
        makesContact: true,
        pp: 15
    },
    'Wing Attack': {
        bp: 35,
        type: 'Flying',
        category: 'Physical',
        makesContact: true,
        pp: 35
    },
    'Wrap': {
        bp: 15,
        type: 'Normal',
        pp: 20
    },
    'Whirlwind': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Withdraw': {
        bp: 0,
        type: 'Water',
        pp: 40
    }
};

var MOVES_GSC = $.extend(true, {}, MOVES_RBY, {
	'Aeroblast': {
		bp: 100,
		type: 'Flying',
		category: 'Special',
        pp: 5
	},
	'Ancient Power': {
		bp: 60,
		type: 'Rock',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Attract': {
        bp: 0,
        type: 'Normal',
        pp: 15
    },
	'Baton Pass': {
		bp: 0,
		type: 'Normal',
        pp: 40
	},
	'Belly Drum': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
	'Bite': {
		bp: 60,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
        pp: 25
	},
	'Bone Rush': {
		bp: 25,
		type: 'Ground',
		category: 'Physical',
		isMultiHit: true,
        pp: 10
	},
	'Charm': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Cotton Spore': {
        bp: 0,
        type: 'Grass',
        pp: 40
    },
	'Cross Chop': {
		bp: 100,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Crunch': {
		bp: 80,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
        pp: 15
	},
	'Curse': {
		bp: 0,
		type: 'Ghost',
        pp: 10
	},
	'Destiny Bond': {
		bp: 0,
		type: 'Ghost',
        pp: 5
	},
	'Detect': {
        bp: 0,
        type: 'Fighting',
        pp: 5
    },
	'Dig': {bp: 60},
	'Double-Edge': {bp: 120},
	'Dynamic Punch': {
		bp: 100,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
        pp: 5
	},
	'Encore': {
		bp: 0,
		type: 'Normal',
        pp: 5
	},
	'Endure': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
	'Explosion': {bp: 250},
	'Extreme Speed': {
		bp: 80,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasPriority: true,
        pp: 5
	},
	'Feint Attack': {
		bp: 60,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Flail': {
		bp: 1,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Flame Wheel': {
		bp: 60,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 25
	},
	'Foresight': {
        bp: 0,
        type: 'Normal',
        pp: 40
    },
	'Frustration': {
		bp: 102,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
    'Fury Cutter': {
        bp: 10,
        type: 'Bug',
        category: 'Physical',
        makesContact: true,
        pp: 20
    },
	'Future Sight': {
		bp: 80,
		type: 'Psychic',
		category: 'Special',
        pp: 10
	},
	'Giga Drain': {
		bp: 60,
		type: 'Grass',
		category: 'Special',
		givesHealth: true,
		percentHealed: 0.5,
        pp: 10
	},
	'Gust': {type: 'Flying'},
	'Headbutt': {
		bp: 70,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 15
	},
	'Heal Bell': {
		bp: 0,
		type: 'Normal',
        pp: 5
	},
	'Hidden Power Bug': {
		bp: 70,
		type: 'Bug',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Dark': {
		bp: 70,
		type: 'Dark',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Dragon': {
		bp: 70,
		type: 'Dragon',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Electric': {
		bp: 70,
		type: 'Electric',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Fighting': {
		bp: 70,
		type: 'Fighting',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Fire': {
		bp: 70,
		type: 'Fire',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Flying': {
		bp: 70,
		type: 'Flying',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Ghost': {
		bp: 70,
		type: 'Ghost',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Grass': {
		bp: 70,
		type: 'Grass',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Ground': {
		bp: 70,
		type: 'Ground',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Ice': {
		bp: 70,
		type: 'Ice',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Poison': {
		bp: 70,
		type: 'Poison',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Psychic': {
		bp: 70,
		type: 'Psychic',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Rock': {
		bp: 70,
		type: 'Rock',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Steel': {
		bp: 70,
		type: 'Steel',
		category: 'Special',
        pp: 15
	},
	'Hidden Power Water': {
		bp: 70,
		type: 'Water',
		category: 'Special',
        pp: 15
	},
	'Icy Wind': {
		bp: 55,
		type: 'Ice',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 15
	},
	'Iron Tail': {
		bp: 100,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 15
	},
	'Lock-On': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
	'Mach Punch': {
		bp: 40,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
		hasPriority: true,
        pp: 30
	},
    'Magnitude': {
        bp: 0,
        type: 'Ground',
        category: 'Physical',
        pp: 30
    },
	'Mean Look': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
	'Megahorn': {
		bp: 120,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Metal Claw': {
		bp: 50,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 35
	},
	'Milk Drink': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
	'Mind Reader': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
    'Mirror Coat': {
        bp: 0,
        type: 'Psychic',
        pp: 20
    },
	'Moonlight': {
		bp: 0,
		type: 'Normal',
        pp: 5
	},
	'Mud-Slap': {
		bp: 20,
		type: 'Ground',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Nightmare': {
        bp: 0,
        type: 'Ghost',
        pp: 15
    },
    'Octazooka': {
        bp: 65,
        type: 'Water',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 10
    },
    'Pain Split': {
        bp: 0,
        type: 'Flying',
        pp: 20
    },
    'Perish Song': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
	'Protect': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
    'Psych Up': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
	'Pursuit': {
		bp: 40,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Rain Dance': {
        bp: 0,
        type: 'Water',
        pp: 5
    },
	'Rapid Spin': {
		bp: 20,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 40
	},
	'Razor Leaf': {alwaysCrit: false},
	'Return': {
		bp: 102,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Reversal': {
		bp: 1,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Rock Smash': {
		bp: 20,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 15
	},
	'Rollout': {
        bp: 30,
        type: 'Rock',
        category: 'Physical',
        makesContact: true,
        pp: 20
    },
	'Sacred Fire': {
		bp: 100,
		type: 'Fire',
		category: 'Physical',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Safeguard': {
        bp: 0,
        type: 'Normal',
        pp: 25
    },
    'Sandstorm': {
        bp: 0,
        type: 'Rock',
        pp: 10
    },
    'Scary Face': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
	'Self-Destruct': {bp: 200},
	'Shadow Ball': {
		bp: 80,
		type: 'Ghost',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true,
        pp: 15
	},
	'Slash': {alwaysCrit: false},
	'Sleep Talk': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
	'Sludge Bomb': {
		bp: 90,
		type: 'Poison',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true,
        pp: 10
	},
	'Snore': {
        bp: 50,
        type: 'Normal',
        category: 'Special',
        hasSecondaryEffect: true,
        pp: 15
    },
	'Solar Beam': {
		bp: 120,
		type: 'Grass',
		category: 'Special',
        pp: 10
	},
	'Spark': {
		bp: 65,
		type: 'Electric',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 20
	},
    'Spider Web': {
        bp: 0,
        type: 'Bug',
        pp: 10
    },
	'Spikes': {
		bp: 0,
		type: 'Ground',
        pp: 20
	},
    'Spite': {
        bp: 0,
        type: 'Ghost',
        pp: 10
    },
	'Steel Wing': {
		bp: 70,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 25
	},
	'Struggle': {
        type: 'None',
        hasRecoil: 25
	},
	'Sunny Day': {
		bp: 0,
		type: 'Fire',
        pp: 5
	},
	'Swagger': {
		bp: 0,
		type: 'Normal',
        pp: 15
	},
	'Sweet Kiss': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
    'Sweet Scent': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
	'Synthesis': {
		bp: 0,
		type: 'Grass',
        pp: 5
	},
	'Thief': {
		bp: 40,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 25
	},
	'Tri Attack': {hasSecondaryEffect: true},
    'Triple Kick': {
        bp: 60,
        type: 'Fighting',
        makesContact: true,
        pp: 10
    },
	'Twister': {
		bp: 40,
		type: 'Dragon',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 20
	},
	'Vital Throw': {
        bp: 70,
        type: 'Fighting',
        category: 'Physical',
        makesContact: true,
        pp: 10
    },
	'Whirlpool': {
		bp: 15,
		type: 'Water',
		category: 'Special',
        pp: 15
	},
	'Wing Attack': {bp: 60},
	'Zap Cannon': {
		bp: 100,
		type: 'Electric',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true,
        pp: 5
	}
});

var MOVES_ADV = $.extend(true, {}, MOVES_GSC, {
	'Aerial Ace': {
		bp: 60,
		type: 'Flying',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Air Cutter': {
		bp: 55,
		type: 'Flying',
		category: 'Special',
		isSpread: true,
        pp: 25
	},
    'Aromatherapy': {
		bp: 0,
		type: 'Grass',
        pp: 5
	},
    'Assist': {
		bp: 0,
		type: 'Normal',
        pp: 20
	},
	'Astonish': {
		bp: 30,
		type: 'Ghost',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 15
	},
	
	'Blast Burn': {
		bp: 150,
		type: 'Fire',
		category: 'Special',
        pp: 5
	},
	'Blaze Kick': {
		bp: 85,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 10
	},
	'Block': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
	'Bonemerang': {
		bp: 50,
		type: 'Ground',
		category: 'Physical',
		isTwoHit: true,
        pp: 10
	},
	'Bounce': {
		bp: 85,
		type: 'Flying',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 5
	},
	'Brick Break': {
		bp: 75,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Bulk Up': {
		bp: 0,
		type: 'Fighting',
        pp: 20
	},
	'Bullet Seed': {
		bp: 10,
		type: 'Grass',
		category: 'Physical',
		isMultiHit: true,
		isBullet: true,
        pp: 30
	},
	'Calm Mind': {
		bp: 0,
		type: 'Psychic',
        pp: 20
	},
	'Charge': {
        bp: 0,
        type: 'Electric',
        pp: 20
    },
	'Cosmic Power': {
        bp: 0,
        type: 'Psychic',
        pp: 20
    },
	'Covet': {
		bp: 40,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 25
	},
	'Crush Claw': {
		bp: 75,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 10
	},
	'Dive': {
		bp: 60,
		type: 'Water',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Doom Desire': {
		bp: 120,
		type: 'Steel',
		category: 'Special',
        pp: 5
	},
	'Dragon Claw': {
		bp: 80,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Dragon Dance': {
        bp: 0,
        type: 'Dragon',
        pp: 20
    },
	'Double-Edge': {hasRecoil: 33},
	'Endeavor': {
		bp: 0,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Eruption': {
		bp: 150,
		type: 'Fire',
		category: 'Special',
		isSpread: true,
        pp: 5
	},
	'Extrasensory': {
		bp: 80,
		type: 'Psychic',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 20
	},
	'Facade': {
		bp: 70,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Fake Out': {
		bp: 40,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		hasPriority: true,
        pp: 10
	},
	'Fake Tears': {
        bp: 0,
        type: 'Dark',
        pp: 20
    },
	'Feather Dance': {
        bp: 0,
        type: 'Flying',
        pp: 15
    },
    'Flatter': {
        bp: 0,
        type: 'Dark',
        pp: 15
    },
	'Focus Punch': {
		bp: 150,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
        pp: 20
	},
	'Follow Me': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
	'Frenzy Plant': {
		bp: 150,
		type: 'Grass',
		category: 'Special',
        pp: 5
	},
	'Grass Whistle': {
        bp: 0,
        type: 'Grass',
        pp: 15
    },
	'Grudge': {
        bp: 0,
        type: 'Ghost',
        pp: 5
    },
    'Hail': {
        bp: 0,
        type: 'Ice',
        pp: 10
    },
	'Heat Wave': {
		bp: 100,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 10
	},
	'Helping Hand': {
		bp: 0,
		type: 'Normal',
        pp: 20
	},
    'Howl': {
        bp: 0,
        type: 'Normal',
        pp: 40
    },
	'Hydro Cannon': {
		bp: 150,
		type: 'Water',
		category: 'Special',
        pp: 5
	},
	'Hyper Voice': {
		bp: 90,
		type: 'Normal',
		category: 'Special',
		isSound: true,
		isSpread: true,
        pp: 10
	},
	'Ice Ball': {
        bp: 30,
        type: 'Ice',
        category: 'Physical',
        makesContact: true,
        pp: 20
    },
	'Icicle Spear': {
		bp: 10,
		type: 'Ice',
		category: 'Physical',
		isMultiHit: true,
        pp: 30
	},
	'Imprison': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
	'Ingrain': {
		bp: 0,
		type: 'Grass',
        pp: 20
	},
	'Iron Defense': {
		bp: 0,
		type: 'Steel',
        pp: 15
	},
	'Knock Off': {
		bp: 20,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Leaf Blade': {
		bp: 70,
		type: 'Grass',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Luster Purge': {
		bp: 70,
		type: 'Psychic',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Low Kick': {
		bp: 1,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Magical Leaf': {
		bp: 60,
		type: 'Grass',
		category: 'Special',
        pp: 20
	},
	'Magic Coat': {
		bp: 0,
		type: 'Psychic',
        pp: 15
	},
	'Memento': {
        bp: 0,
        type: 'Dark',
        pp: 10
    },
    'Metal Sound': {
        bp: 0,
        type: 'Steel',
        pp: 40
    },
	'Meteor Mash': {
		bp: 100,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
        pp: 10
	},
	'Mist Ball': {
		bp: 70,
		type: 'Psychic',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true,
        pp: 5
	},
	'Mud Shot': {
		bp: 55,
		type: 'Ground',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 15
	},
	'Muddy Water': {
		bp: 95,
		type: 'Water',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 10
	},
	'Needle Arm': {
		bp: 60,
		type: 'Grass',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 15
	},
	'Odor Sleuth': {
        bp: 0,
        type: 'Normal',
        pp: 40
    },
	'Overheat': {
		bp: 140,
		type: 'Fire',
		category: 'Special',
		dropsStats: 2,
        pp: 5
	},
	'Poison Fang': {
		bp: 50,
		type: 'Poison',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
        pp: 15
	},
	'Poison Tail': {
		bp: 50,
		type: 'Poison',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 25
	},
    'Present': {
        bp: 0,
        type: 'Normal',
        pp: 15
    },
	'Psycho Boost': {
		bp: 140,
		type: 'Psychic',
		category: 'Special',
		dropsStats: 2,
        pp: 5
	},
	'Recycle': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
	'Refresh': {
		bp: 0,
		type: 'Normal',
        pp: 20
	},
	'Revenge': {
		bp: 120,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Rock Blast': {
		bp: 25,
		type: 'Rock',
		category: 'Physical',
		isMultiHit: true,
        pp: 10
	},
	'Rock Tomb': {
		bp: 50,
		type: 'Rock',
		category: 'Physical',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Role Play': {
        bp: 0,
        type: 'Psychic',
        pp: 15
    },
	'Sand Tomb': {
		bp: 15,
		type: 'Ground',
		category: 'Physical',
        pp: 15
	},
	'Secret Power': {
		bp: 70,
		type: 'Normal',
		category: 'Physical',
		hasSecondaryEffect: true,
        pp: 20
	},
	'Shadow Punch': {
		bp: 60,
		type: 'Ghost',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
        pp: 20
	},
	'Sheer Cold': {
		bp: 0,
		type: 'Ice',
		category: 'Special',
        pp: 5
	},
	'Shock Wave': {
		bp: 60,
		type: 'Electric',
		category: 'Special',
        pp: 20
	},
	'Signal Beam': {
		bp: 75,
		type: 'Bug',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 15
	},
	'Silver Wind': {
		bp: 60,
		type: 'Bug',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
    'Skill Swap': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
	'Sky Uppercut': {
		bp: 85,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
        pp: 15
	},
	'Slack Off': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
	'Smelling Salts': {
        bp: 60,
        type: 'Normal',
        category: 'Physical',
        makesContact: true,
        pp: 10
    },
    'Snatch': {
        bp: 0,
        type: 'Dark',
        pp: 10
    },
    'Spit Up': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
	'Stockpile': {
		bp: 0,
		type: 'Normal',
        pp: 20
	},
	'Superpower': {
		bp: 120,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		dropsStats: 1,
        pp: 5
	},
	'Swallow': {
        bp: 0,
        type: 'Normal',
        pp: 10
    },
	'Tail Glow': {
		bp: 0,
		type: 'Bug',
        pp: 20
	},
	'Taunt': {
		bp: 0,
		type: 'Dark',
        pp: 20
	},
	'Teeter Dance': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
    'Tickle': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
	'Torment': {
        bp: 0,
        type: 'Dark',
        pp: 15
    },
	'Trick': {
		bp: 0,
		type: 'Psychic',
        pp: 10
	},
	'Uproar': {
		bp: 50,
		type: 'Normal',
		category: 'Special',
        pp: 10
	},
	'Volt Tackle': {
		bp: 120,
		type: 'Electric',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		hasRecoil: 33,
        pp: 15
	},
	'Water Pulse': {
		bp: 60,
		type: 'Water',
		category: 'Special',
		hasSecondaryEffect: true,
		isPulse: true,
        pp: 20
	},
	'Water Spout': {
		bp: 150,
		type: 'Water',
		category: 'Special',
		isSpread: true,
        pp: 5
	},
	'Weather Ball': {
		bp: 50,
		type: 'Normal',
		category: 'Special',
		isBullet: true,
        pp: 10
	},
	'Will-O-Wisp': {
		bp: 0,
		type: 'Fire',
        pp: 15
	},
	'Wish': {
		bp: 0,
		type: 'Normal',
        pp: 10
	},
	'Yawn': {
		bp: 0,
		type: 'Normal',
        pp: 10
	}
});

var MOVES_DPP = $.extend(true, {}, MOVES_ADV, {
	'Air Slash': {
		bp: 75,
		type: 'Flying',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 15
	},
	'Aqua Jet': {
		bp: 40,
		type: 'Water',
		category: 'Physical',
		makesContact: true,
		hasPriority: true,
        pp: 20
	},
	'Aqua Ring': {
		bp: 0,
		type: 'Water',
        pp: 20
	},
	'Aqua Tail': {
		bp: 90,
		type: 'Water',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Assurance': {
		bp: 50,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Attack Order': {
		bp: 90,
		type: 'Bug',
		category: 'Physical',
        pp: 15
	},
	'Aura Sphere': {
		bp: 90,
		type: 'Fighting',
		category: 'Special',
		isBullet: true,
		isPulse: true,
        pp: 20
	},
	'Avalanche': {
		bp: 120,
		type: 'Ice',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Brave Bird': {
		bp: 120,
		type: 'Flying',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 33,
        pp: 15
	},
	'Brine': {
		bp: 65,
		type: 'Water',
		category: 'Special',
        pp: 10
	},
	'Bug Bite': {
		bp: 60,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Bug Buzz': {
		bp: 90,
		type: 'Bug',
		category: 'Special',
		hasSecondaryEffect: true,
		isSound: true,
        pp: 10
	},
	'Bullet Punch': {
		bp: 40,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
		hasPriority: true,
        pp: 30
	},
	'Captivate': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
	'Charge Beam': {
		bp: 50,
		type: 'Electric',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Chatter': {
		bp: 60,
		type: 'Flying',
		category: 'Special',
		hasSecondaryEffect: true,
		isSound: true,
        pp: 20
	},
	'Close Combat': {
		bp: 120,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Copycat': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
	'Covet': {bp: 60},
	'Cross Poison': {
		bp: 70,
		type: 'Poison',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 20
	},
	'Dark Pulse': {
		bp: 80,
		type: 'Dark',
		category: 'Special',
		hasSecondaryEffect: true,
		isPulse: true,
        pp: 15
	},
	'Dark Void': {
		bp: 0,
		type: 'Dark',
        pp: 10
	},
	'Defend Order': {
		bp: 0,
		type: 'Bug',
        pp: 10
	},
	'Defog': {
		bp: 0,
		type: 'Flying',
        pp: 15
	},
	'Dig': {bp: 80},
	'Discharge': {
		bp: 80,
		type: 'Electric',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 15
	},
	'Dive': {bp: 80},
	'Double Hit': {
		bp: 35,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		isTwoHit: true,
        pp: 10
	},
	'Draco Meteor': {
		bp: 140,
		type: 'Dragon',
		category: 'Special',
		dropsStats: 2,
        pp: 5
	},
	'Dragon Pulse': {
		bp: 90,
		type: 'Dragon',
		category: 'Special',
		isPulse: true,
        pp: 10
	},
	'Dragon Rush': {
		bp: 100,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 10
	},
	'Drain Punch': {
		bp: 60,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
		givesHealth: true,
		percentHealed: 0.5,
        pp: 10
	},
	'Earth Power': {
		bp: 90,
		type: 'Ground',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Embargo': {
        bp: 0,
        type: 'Dark',
        pp: 15
    },
	'Energy Ball': {
		bp: 80,
		type: 'Grass',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true,
        pp: 10
	},
	'Feint': {
		bp: 50,
		type: 'Normal',
		category: 'Physical',
		bypassesProtect: true,
        pp: 10
	},
	'Fire Fang': {
		bp: 65,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
        pp: 15
	},
	'Flare Blitz': {
		bp: 120,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		hasRecoil: 33,
        pp: 15
	},
	'Flash Cannon': {
		bp: 80,
		type: 'Steel',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Fling': {
		bp: 1,
		type: 'Dark',
		category: 'Physical',
        pp: 10
	},
	'Fly': {bp: 90},
	'Focus Blast': {
		bp: 120,
		type: 'Fighting',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true,
        pp: 5
	},
	'Force Palm': {
		bp: 60,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 10
	},
	'Gastro Acid': {
        bp: 0,
        type: 'Poison',
        pp: 10
    },
	'Giga Impact': {
		bp: 150,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Grass Knot': {
		bp: 1,
		type: 'Grass',
		category: 'Special',
		makesContact: true,
        pp: 20
	},
	'Gravity': {
        bp: 0,
        type: 'Psychic',
        pp: 5
    },
	'Gunk Shot': {
		bp: 120,
		type: 'Poison',
		category: 'Physical',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Gyro Ball': {
		bp: 1,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		isBullet: true,
        pp: 5
	},
	'Hammer Arm': {
		bp: 100,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
        pp: 10
	},
	'Head Smash': {
		bp: 150,
		type: 'Rock',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 50,
        pp: 5
	},
	'Heal Order': {
		bp: 0,
		type: 'Bug',
        pp: 10
	},
	'Healing Wish': {
		bp: 0,
		type: 'Psychic',
        pp: 10
	},
	'High Jump Kick': {bp: 100},
	'Ice Fang': {
		bp: 65,
		type: 'Ice',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
        pp: 15
	},
	'Ice Shard': {
		bp: 40,
		type: 'Ice',
		category: 'Physical',
		hasPriority: true,
        pp: 30
	},
	'Iron Head': {
		bp: 80,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 15
	},
	'Judgment': {
		bp: 100,
		type: 'Normal',
		category: 'Special',
        pp: 10
	},
	'Jump Kick': {bp: 85},
	'Last Resort': {
		bp: 130,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Lava Plume': {
		bp: 80,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 15
	},
	'Leaf Blade': {bp: 90},
	'Leaf Storm': {
		bp: 140,
		type: 'Grass',
		category: 'Special',
		dropsStats : 2,
        pp: 5
	},
	'Lunar Dance': {
		bp: 0,
		type: 'Psychic',
        pp: 10
	},
	'Magma Storm': {
		bp: 120,
		type: 'Fire',
		category: 'Special',
        pp: 5
	},
	'Magnet Bomb': {
		bp: 60,
		type: 'Steel',
		category: 'Physical',
		isBullet: true,
        pp: 20
	},
	'Magnet Rise': {
		bp: 0,
		type: 'Electric',
        pp: 10
	},
	'Me First': {
		bp: 0,
		type: 'Normal',
        pp: 20
	},
	'Metal Burst': {
        bp: 0,
        type: 'Steel',
        pp: 10
    },
    'Miracle Eye': {
        bp: 0,
        type: 'Psychic',
        pp: 40
    },
	'Mirror Shot': {
		bp: 65,
		type: 'Steel',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Mud Bomb': {
		bp: 65,
		type: 'Ground',
		category: 'Special',
		isBullet: true,
		hasSecondaryEffect: true,
        pp: 10
	},
	'Natural Gift': {
		bp: 1,
		type: 'Normal',
		category: 'Physical',
        pp: 15
	},
	'Nature Power': {
		bp: 80,
		type: 'Normal',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 20
	},
	'Nasty Plot': {
		bp: 0,
		type: 'Dark',
        pp: 20
	},
	'Night Slash': {
		bp: 70,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Ominous Wind': {
		bp: 60,
		type: 'Ghost',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Outrage': {
		bp: 120,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Payback': {
		bp: 50,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Pluck': {
		bp: 60,
		type: 'Flying',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Poison Jab': {
		bp: 80,
		type: 'Poison',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 20
	},
	'Power Gem': {
		bp: 70,
		type: 'Rock',
		category: 'Special',
        pp: 20
	},
	'Power Trick': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
	'Power Whip': {
		bp: 120,
		type: 'Grass',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Psycho Cut': {
		bp: 70,
		type: 'Psychic',
		category: 'Physical',
        pp: 20
	},
	'Psycho Shift': {
		bp: 0,
		type: 'Psychic',
        pp: 10
	},
	'Punishment': {
		bp: 60,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Roar of Time': {
		bp: 150,
		type: 'Dragon',
		category: 'Special',
        pp: 5
	},
	'Rock Climb': {
		bp: 90,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 20
	},
	'Rock Smash': {bp: 40},
	'Rock Polish': {
		bp: 0,
		type: 'Rock',
        pp: 20
	},
	'Rock Wrecker': {
		bp: 150,
		type: 'Rock',
		category: 'Physical',
		isBullet: true,
        pp: 5
	},
	'Roost': {
		bp: 0,
		type: 'Flying',
        pp: 10
	},
	'Seed Bomb': {
		bp: 80,
		type: 'Grass',
		category: 'Physical',
		isBullet: true,
        pp: 10
	},
	'Seed Flare': {
		bp: 120,
		type: 'Grass',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 15
	},
	'Shadow Claw': {
		bp: 70,
		type: 'Ghost',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Shadow Force': {
		bp: 120,
		type: 'Ghost',
		category: 'Physical',
		makesContact: true,
		bypassesProtect: true,
        pp: 5
	},
	'Shadow Sneak': {
		bp: 40,
		type: 'Ghost',
		category: 'Physical',
		makesContact: true,
		hasPriority: true,
        pp: 30
	},
	'Spacial Rend': {
		bp: 100,
		type: 'Dragon',
		category: 'Special',
        pp: 5
	},
	'Stealth Rock': {
		bp: 0,
		type: 'Rock',
        pp: 20
	},
	'Stone Edge': {
		bp: 100,
		type: 'Rock',
		category: 'Physical',
        pp: 5
	},
	'Struggle': {hasRecoil: 'Struggle'},
	'Sucker Punch': {
		bp: 80,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		hasPriority: true,
        pp: 5
	},
	'Switcheroo': {
		bp: 0,
		type: 'Dark',
        pp: 15
	},
	'Tailwind': {
		bp: 0,
		type: 'Flying',
        pp: 30
	},
	'Thunder Fang': {
		bp: 65,
		type: 'Electric',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true,
        pp: 15
	},
	'Toxic Spikes': {
		bp: 0,
		type: 'Poison',
        pp: 20
	},
	'Trick Room': {
		bp: 0,
		type: 'Psychic',
        pp: 5
	},
	'Trump Card': {
        bp: 0,
        type: 'Normal',
        pp: 5
    },
	'U-turn': {
		bp: 70,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
        pp: 20
	},
	'Vacuum Wave': {
		bp: 40,
		type: 'Fighting',
		category: 'Special',
		hasPriority: true,
        pp: 30
	},
	'Wake-Up Slap': {
		bp: 60,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Waterfall': {hasSecondaryEffect: true},
	'Wood Hammer': {
		bp: 120,
		type: 'Grass',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 33,
        pp: 15
	},
	'Wring Out': {
		bp: 1,
		type: 'Normal',
		category: 'Special',
		makesContact: true,
        pp: 5
	},
	'X-Scissor': {
		bp: 80,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Zap Cannon': {bp: 120},
	'Zen Headbutt': {
		bp: 80,
		type: 'Psychic',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 15
	}
});

var MOVES_BW = $.extend(true, {}, MOVES_DPP, {
	'Acid Spray': {
		bp: 40,
		type: 'Poison',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true,
        pp: 20
	},
	'Acrobatics': {
		bp: 55,
		type: 'Flying',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Ally Switch': {
        bp: 0,
        type: 'Psychic',
        pp: 15
    },
	'Autotomize': {
		bp: 0,
		type: 'Steel',
        pp: 20
	},
	'Blue Flare': {
		bp: 130,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Bolt Strike': {
		bp: 130,
		type: 'Electric',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 5
	},
	'Bulldoze': {
		bp: 60,
		type: 'Ground',
		category: 'Physical',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 20
	},
	'Bullet Seed': {bp: 25},
	'Chip Away': {
		bp: 70,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		ignoresDefenseBoosts: true,
        pp: 20
	},
	'Circle Throw': {
		bp: 60,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Clear Smog': {
		bp: 50,
		type: 'Poison',
		category: 'Special',
        pp: 15
	},
	'Coil': {
		bp: 0,
		type: 'Poison',
        pp: 20
	},
	'Cotton Guard': {
		bp: 0,
		type: 'Grass',
        pp: 10
	},
	'Doom Desire': {bp: 140},
	'Dragon Tail': {
		bp: 60,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Drain Punch': {bp: 75},
	'Drill Run': {
		bp: 80,
		type: 'Ground',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Dual Chop': {
		bp: 40,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true,
		isTwoHit: true,
        pp: 15
	},
	'Electro Ball': {
		bp: 1,
		type: 'Electric',
		category: 'Special',
		isBullet: true,
        pp: 10
	},
	'Electroweb': {
		bp: 55,
		type: 'Electric',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 15
	},
	'Entrainment': {
        bp: 0,
        type: 'Normal',
        pp: 15
    },
	'Feint': {bp: 30},
	'Fiery Dance': {
		bp: 80,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Final Gambit': {
		bp: 1,
		type: 'Fighting',
		category: 'Special',
        pp: 20
	},
	'Fire Pledge': {
		bp: 50,
		type: 'Fire',
		category: 'Special',
        pp: 10
	},
	'Fire Pledge (Grass Pledge Boosted)': {
		bp: 150,
		type: 'Fire',
		category: 'Special',
        pp: 10
	},
	'Fire Pledge (Water Pledge Boosted)': {
		bp: 150,
		type: 'Fire',
		category: 'Special',
        pp: 10
	},
	'Flame Burst': {
		bp: 70,
		type: 'Fire',
		category: 'Special',
        pp: 15
	},
	'Flame Charge': {
		bp: 50,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 20
	},
	'Foul Play': {
		bp: 95,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
        pp: 15
	},
	'Freeze Shock': {
		bp: 140,
		type: 'Ice',
		category: 'Physical',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Frost Breath': {
		bp: 40,
		type: 'Ice',
		category: 'Special',
		alwaysCrit: true,
        pp: 10
	},
	'Fusion Bolt': {
		bp: 100,
		type: 'Electric',
		category: 'Physical',
        pp: 5
	},
	'Fusion Flare': {
		bp: 100,
		type: 'Fire',
		category: 'Special',
        pp: 5
	},
	'Future Sight': {bp: 100},
	'Gear Grind': {
		bp: 50,
		type: 'Steel',
		category: 'Physical',
		isTwoHit: true,
		makesContact: true,
        pp: 15
	},
	'Giga Drain': {bp: 75},
	'Glaciate': {
		bp: 65,
		type: 'Ice',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 10
	},
	'Grass Pledge': {
		bp: 50,
		type: 'Grass',
		category: 'Special',
        pp: 10
	},
	'Grass Pledge (Fire Pledge Boosted)': {
		bp: 150,
		type: 'Grass',
		category: 'Special',
        pp: 10
	},
	'Grass Pledge (Water Pledge Boosted)': {
		bp: 150,
		type: 'Grass',
		category: 'Special',
        pp: 10
	},
	'Guard Split': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
	'Heal Pulse': {
		bp: 0,
		type: 'Psychic',
        pp: 10
	},
	'Heart Stamp': {
		bp: 60,
		type: 'Psychic',
		category: 'Physical',
		hasSecondaryEffect: true,
		makesContact: true,
        pp: 25
	},
	'Head Charge': {
		bp: 120,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 25,
        pp: 15
	},
	'Heat Crash': {
        bp: 1,
        type: 'Fire',
        category: 'Physical',
        makesContact: true,
        pp: 10
    },
	'Heavy Slam': {
		bp: 1,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Hex': {
		bp: 50,
		type: 'Ghost',
		category: 'Special',
        pp: 10
	},
	'High Jump Kick': {bp: 130},
	'Hone Claws': {
		bp: 0,
		type: 'Dark',
        pp: 15
	},
	'Horn Leech': {
		bp: 75,
		type: 'Grass',
		category: 'Physical',
		makesContact: true,
		givesHealth: true,
		percentHealed: 0.5,
        pp: 10
	},
	'Hurricane': {
		bp: 120,
		type: 'Flying',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Ice Burn': {
		bp: 140,
		type: 'Ice',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Icicle Crash': {
		bp: 85,
		type: 'Ice',
		category: 'Physical',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Icicle Spear': {bp: 25},
	'Incinerate': {
		bp: 30,
		type: 'Fire',
		category: 'Special',
		isSpread: true,
        pp: 15
	},
	'Inferno': {
		bp: 100,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Jump Kick': {bp: 100},
	'Last Resort': {bp: 140},
	'Leaf Tornado': {
		bp: 65,
		type: 'Grass',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Low Sweep': {
		bp: 60,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 20
	},
	'Night Daze': {
		bp: 85,
		type: 'Dark',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Power Split': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
	'Psyshock': {
		bp: 80,
		type: 'Psychic',
		category: 'Special',
		dealsPhysicalDamage: true,
        pp: 10
	},
	'Psystrike': {
		bp: 100,
		type: 'Psychic',
		category: 'Special',
		dealsPhysicalDamage: true,
        pp: 10
	},
	'Quash': {
        bp: 0,
        type: 'Dark',
        pp: 15
    },
	'Quick Guard': {
		bp: 0,
		type: 'Fighting',
        pp: 15
	},
	'Quiver Dance': {
		bp: 0,
		type: 'Bug',
        pp: 20
	},
	'Rage Powder': {
		bp: 0,
		type: 'Bug',
        pp: 20
	},
	'Razor Shell': {
		bp: 75,
		type: 'Water',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 10
	},
	'Reflect Type': {
        bp: 0,
        type: 'Normal',
        pp: 15
    },
	'Relic Song': {
		bp: 75,
		type: 'Normal',
		category: 'Special',
		hasSecondaryEffect: true,
		isSound: true,
		isSpread: true,
        pp: 10
	},
	'Retaliate': {
		bp: 70,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Round': {
		bp: 60,
		type: 'Normal',
		category: 'Special',
        pp: 15
	},
	'Sacred Sword': {
		bp: 90,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		ignoresDefenseBoosts: true,
        pp: 20
	},
	'Sand Tomb': {bp: 35},
	'Scald': {
		bp: 80,
		type: 'Water',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 15
	},
	'Searing Shot': {
		bp: 100,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
		isBullet: true,
        pp: 5
	},
	'Secret Sword': {
		bp: 85,
		type: 'Fighting',
		category: 'Special',
		dealsPhysicalDamage: true,
        pp: 10
	},
	'Shell Smash': {
		bp: 0,
		type: 'Normal',
        pp: 15
	},
	'Shift Gear': {
		bp: 0,
		type: 'Steel',
        pp: 10
	},
	'Sky Drop': {
		bp: 60,
		type: 'Flying',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Sludge Wave': {
		bp: 95,
		type: 'Poison',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 10
	},
	'Smack Down': {
		bp: 50,
		type: 'Rock',
		category: 'Physical',
        pp: 15
	},
	'Snarl': {
		bp: 55,
		type: 'Dark',
		category: 'Special',
		hasSecondaryEffect: true,
		isSound: true,
		isSpread: true,
        pp: 15
	},
	'Steamroller': {
		bp: 65,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 20
	},
	'Stored Power': {
		bp: 20,
		type: 'Psychic',
		category: 'Special',
        pp: 10
	},
	'Storm Throw': {
		bp: 40,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		alwaysCrit: true,
        pp: 10
	},
	'Struggle Bug': {
		bp: 30,
		type: 'Bug',
		category: 'Special',
		isSpread: true,
        pp: 20
	},
	'Synchronoise': {
		bp: 70,
		type: 'Psychic',
		category: 'Special',
        pp: 15
	},
	'Tackle': {bp: 50},
	'Tail Slap': {
		bp: 25,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		isMultiHit: true,
        pp: 10
	},
	'Techno Blast': {
		bp: 85,
		type: 'Normal',
		category: 'Special',
        pp: 5
	},
	'Telekinesis': {
        bp: 0,
        type: 'Psychic',
        pp: 15
    },
	'Thrash': {bp: 120},
	'Uproar': {bp: 90},
	'V-create': {
		bp: 180,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Venoshock': {
		bp: 65,
		type: 'Poison',
		category: 'Special',
        pp: 10
	},
	'Volt Switch': {
		bp: 70,
		type: 'Electric',
		category: 'Special',
        pp: 20
	},
	'Water Pledge': {
		bp: 50,
		type: 'Water',
		category: 'Special',
        pp: 10
	},
	'Water Pledge (Fire Pledge Boosted)': {
		bp: 150,
		type: 'Water',
		category: 'Special',
        pp: 10
	},
	'Water Pledge (Grass Pledge Boosted)': {
		bp: 150,
		type: 'Water',
		category: 'Special',
        pp: 10
	},
	'Whirlpool': {bp: 35},
	'Wide Guard': {
		bp: 0,
		type: 'Rock',
        pp: 10
	},
	'Wild Charge': {
		bp: 90,
		type: 'Electric',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 25,
        pp: 15
	},
	'Wonder Room': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
    'Work Up': {
        bp: 0,
        type: 'Normal',
        pp: 30
    }
});

var MOVES_XY = $.extend(true, {}, MOVES_BW, {
	'Air Cutter': {bp: 60},
	'Arm Thrust': {
		bp: 15,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		isMultiHit: true,
        pp: 20
	},
	'Aromatic Mist': {
        bp: 0,
        type: 'Fairy',
        pp: 20
    },
	'Assurance': {bp: 60},
	'Aura Sphere': {bp: 80},
	'Baby-Doll Eyes': {
        bp: 0,
        type: 'Fairy',
        pp: 30
    },
	'Belch': {
		bp: 120,
		type: 'Poison',
		category: 'Special',
        pp: 10
	},
	'Blizzard': {bp: 110},
	'Boomburst': {
		bp: 140,
		type: 'Normal',
		category: 'Special',
		isSound: true,
		isSpread: true,
        pp: 10
	},
	'Chatter': {bp: 65},
	'Confide': {
        bp: 0,
        type: 'Normal',
        pp: 20
    },
	'Crabhammer': {bp: 100},
	'Dazzling Gleam': {
		bp: 80,
		type: 'Fairy',
		category: 'Special',
		isSpread: true,
        pp: 10
	},
	'Diamond Storm': {
		bp: 100,
		type: 'Rock',
		category: 'Physical',
		hasSecondaryEffect: true,
		isSpread: true,
        pp: 5
	},
	'Disarming Voice': {
		bp: 40,
		type: 'Fairy',
		isSound: true,
        pp: 15
	},
	'Draco Meteor': {bp: 130},
	'Dragon Ascent': {
		bp: 120,
		type: 'Flying',
		category: 'Physical',
		makesContact: true,
        pp: 5
	},
	'Dragon Pulse': {bp: 85},
	'Draining Kiss': {
		bp: 50,
		type: 'Fairy',
		category: 'Special',
		makesContact: true,
		givesHealth: true,
		percentHealed: 0.75,
        pp: 10
	},
	'Electric Terrain': {
        bp: 0,
        type: 'Electric',
        pp: 10
    },
	'Energy Ball': {bp: 90},
	'Facade': {ignoresBurn: true},
	'Fairy Wind': {
		bp: 40,
		type: 'Fairy',
		category: 'Special',
        pp: 30
	},
	'Fell Stinger': {
		bp: 30,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
        pp: 25
	},
	'Fire Blast': {bp: 110},
	'Fire Pledge': {bp: 80},
	'Flamethrower': {bp: 90},
	'Flower Shield': {
        bp: 0,
        type: 'Flying',
        pp: 10
    },
	'Flying Press': {
		bp: 80,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
        pp: 10
	},
	'Freeze-Dry': {
		bp: 70,
		type: 'Ice',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 20
	},
	'Frost Breath': {bp: 60},
	'Future Sight': {bp: 120},
	'Geomancy': {
		bp: 0,
		type: 'Fairy',
        pp: 10
	},
	'Grass Pledge': {bp: 80},
	'Grassy Terrain': {
        bp: 0,
        type: 'Grass',
        pp: 10
    },
	'Heat Wave': {bp: 95},
	'Hex': {bp: 65},
	'Hidden Power Bug': {bp: 60},
	'Hidden Power Dark': {bp: 60},
	'Hidden Power Dragon': {bp: 60},
	'Hidden Power Electric': {bp: 60},
	'Hidden Power Fighting': {bp: 60},
	'Hidden Power Fire': {bp: 60},
	'Hidden Power Flying': {bp: 60},
	'Hidden Power Ghost': {bp: 60},
	'Hidden Power Grass': {bp: 60},
	'Hidden Power Ground': {bp: 60},
	'Hidden Power Ice': {bp: 60},
	'Hidden Power Poison': {bp: 60},
	'Hidden Power Psychic': {bp: 60},
	'Hidden Power Rock': {bp: 60},
	'Hidden Power Steel': {bp: 60},
	'Hidden Power Water': {bp: 60},
	'Hurricane': {bp: 110},
	'Hydro Pump': {bp: 110},
	'Hyperspace Fury': {
		bp: 100,
		type: 'Dark',
		category: 'Physical',
		bypassesProtect: true,
        pp: 5
	},
	'Hyperspace Hole': {
		bp: 80,
		type: 'Psychic',
		category: 'Special',
		bypassesProtect: true,
        pp: 5
	},
	'Ice Beam': {bp: 90},
	'Incinerate': {bp: 60},
	'Infestation': {
		bp: 20,
		type: 'Bug',
		category: 'Special',
		makesContact: true,
        pp: 20
	},
	'King\'s Shield': {
		bp: 0,
		type: 'Steel',
        pp: 10
	},
	'Knock Off': {bp: 65},
	'Land\'s Wrath': {
		bp: 90,
		type: 'Ground',
		category: 'Physical',
		isSpread: true,
        pp: 10
	},
	'Leaf Storm': {bp: 130},
	'Light of Ruin': {
		bp: 140,
		type: 'Fairy',
		category: 'Special',
		hasRecoil: 50,
        pp: 5
	},
	'Low Sweep': {bp: 65},
	'Magma Storm': {bp: 100},
	'Mat Block': {
        bp: 0,
        type: 'Fighting',
        pp: 10
    },
	'Meteor Mash': {bp: 90},
	'Misty Terrain': {
        bp: 0,
        type: 'Fairy',
        pp: 10
    },
	'Moonblast': {
		bp: 95,
		type: 'Fairy',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 15
	},
	'Moonlight': {type: 'Fairy'},
	'Muddy Water': {bp: 90},
	'Mystical Fire': {
		bp: 65,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 10
	},
	'Noble Roar': {
        bp: 0,
        type: 'Normal',
        pp: 30
    },
	'Nuzzle': {
		bp: 20,
		type: 'Electric',
		category: 'Physical',
		hasSecondaryEffect: true,
		makesContact: true,
        pp: 20
	},
	'Oblivion Wing': {
		bp: 80,
		type: 'Flying',
		category: 'Special',
		givesHealth: true,
		percentHealed: 0.75,
        pp: 10
	},
	'Origin Pulse': {
		bp: 110,
		type: 'Water',
		category: 'Special',
		isSpread: true,
		isPulse: true,
        pp: 10
	},
	'Overheat': {bp: 130},
	'Parabolic Charge': {
		bp: 50,
		type: 'Electric',
		category: 'Special',
		givesHealth: true,
		percentHealed: 0.5,
        pp: 20
	},
	'Petal Blizzard': {
        bp: 90,
        type: 'Grass',
        category: 'Physical',
        isSpread: true,
        pp: 15
    },
	'Phantom Force': {
		bp: 90,
		type: 'Ghost',
		category: 'Physical',
		makesContact: true,
		bypassesProtect: true,
        pp: 10
	},
	'Pin Missile': {bp: 25},
	'Play Nice': {
        bp: 0,
        type: 'Fairy',
        pp: 20
    },
	'Play Rough': {
		bp: 90,
		type: 'Fairy',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
        pp: 10
	},
	'Power Gem': {bp: 80},
	'Power-Up Punch': {
		bp: 40,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true,
        pp: 10
	},
	'Precipice Blades': {
		bp: 120,
		type: 'Ground',
		category: 'Physical',
		isSpread: 'true',
        pp: 10
	},
	'Psychic Terrain': {
        bp: 0,
        type: 'Psychic',
        pp: 10
    },
	'Rock Tomb': {bp: 60},
	'Skull Bash': {bp: 130},
	'Spiky Shield': {
		bp: 0,
		type: 'Grass',
        pp: 10
	},
	'Steam Eruption': {
		bp: 110,
		type: 'Water',
		category: 'Special',
		hasSecondaryEffect: true,
        pp: 5
	},
	'Sticky Web': {
		bp: 0,
		type: 'Bug',
        pp: 20
	},
	'Storm Throw': {bp: 60},
	'Struggle Bug': {bp: 50},
	'Surf': {bp: 90},
	'Synchronoise': {bp: 120},
	'Techno Blast': {bp: 120},
	'Thief': {bp: 60},
	'Thousand Arrows': {
		bp: 90,
		type: 'Ground',
		category: 'Physical',
		isSpread: 'true',
        pp: 10
	},
	'Thousand Waves': {
		bp: 90,
		type: 'Ground',
		category: 'Physical',
		isSpread: 'true',
        pp: 10
	},
	'Thunder': {bp: 110},
	'Thunderbolt': {bp: 90},
	'Trick-or-Treat': {
        bp: 0,
        type: 'Ghost',
        pp: 10
    },
	'Wake-Up Slap': {bp: 70},
	'Water Pledge': {bp: 80},
	'Water Shuriken': {
		bp: 15,
		type: 'Water',
		category: 'Physical',
		isMultiHit: true,
        pp: 20
	}
});

var ZMOVES_TYPING = {
	'Bug': 'Savage Spin-Out',
	'Dark': 'Black Hole Eclipse',
	'Dragon': 'Devastating Drake',
	'Electric': 'Gigavolt Havoc',
	'Fairy': 'Twinkle Tackle',
	'Fighting': 'All-Out Pummeling',
	'Fire': 'Inferno Overdrive',
	'Flying': 'Supersonic Skystrike',
	'Ghost': 'Never-Ending Nightmare',
	'Grass': 'Bloom Doom',
	'Ground': 'Tectonic Rage',
	'Ice': 'Subzero Slammer',
	'Normal': 'Breakneck Blitz',
	'Poison': 'Acid Downpour',
	'Psychic': 'Shattered Psyche',
	'Rock': 'Continental Crush',
	'Steel': 'Corkscrew Crash',
	'Water': 'Hydro Vortex'
};

var MOVES_SM = $.extend(true, {}, MOVES_XY, {
	'10,000,000 Volt Thunderbolt': {
		bp: 195,
		type: 'Electric',
		category: 'Special',
		isZ: true
	},
	'Acid Downpour': {
		bp: 1,
		type: 'Poison',
		category: 'Physical',
		isZ: true
	},
	'Acid Spray': {zp: 100},
	'Accelerock': {
		bp: 40,
		type: 'Rock',
		category: 'Physical',
		makesContact: true,
		hasPriority: true,
		zp: 100,
        pp: 20
	},
	'Acrobatics': {zp: 100},
	'Aerial Ace': {zp: 120},
	'Aeroblast': {zp: 180},
	'Air Cutter': {zp: 120},
	'Air Slash': {zp: 140},
	'All-Out Pummeling': {
		bp: 1,
		type: 'Fighting',
		category: 'Physical',
		isZ: true
	},
	'Anchor Shot': {
		bp: 80,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		zp: 160,
        pp: 20
	},
	'Ancient Power': {zp: 120},
	'Aqua Jet': {zp: 100},
	'Aqua Tail': {zp: 175},
	'Arm Thrust': {zp: 100},
	'Assurance': {zp: 120},
	'Astonish': {zp: 100},
	'Attack Order': {zp: 175},
	'Aura Sphere': {zp: 160},
	'Aurora Beam': {zp: 120},
	'Aurora Veil': {
        bp: 0,
        type: 'Ice',
        pp: 20
    },
	'Avalanche': {zp: 120},
	'Baneful Bunker': {
        bp: 0,
        type: 'Poison',
        pp: 10
    },
	'Beak Blast': {
		bp: 100,
		type: 'Flying',
		category: 'Physical',
		zp: 180,
		isBullet: true,
        pp: 15
	},
	'Belch': {zp: 190},
	'Bite': {zp: 120},
	'Black Hole Eclipse': {
		bp: 1,
		type: 'Dark',
		category: 'Physical',
		isZ: true
	},
	'Blast Burn': {zp: 200},
	'Blaze Kick': {zp: 160},
	'Blizzard': {zp: 185},
	'Bloom Doom': {
		bp: 1,
		type: 'Grass',
		category: 'Physical',
		isZ: true
	},
	'Blue Flare': {zp: 195},
	'Brave Bird': {zp: 190},
	'Breakneck Blitz': {
		bp: 1,
		type: 'Normal',
		category: 'Physical',
		isZ: true
	},
	'Brine': {zp: 120},
	'Body Slam': {zp: 160},
	'Bolt Strike': {zp: 195},
	'Bone Club': {zp: 120},
	'Bone Rush': {zp: 140},
	'Bonemerang': {zp: 100},
	'Boomburst': {zp: 200},
	'Bounce': {zp: 160},
	'Brick Break': {zp: 140},
	'Brutal Swing': {
		bp: 60,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		isSpread: true,
		zp: 120,
        pp: 20
	},
	'Bubble Beam': {zp: 120},
	'Bug Bite': {zp: 120},
	'Bug Buzz': {zp: 175},
	'Bulldoze': {zp: 120},
	'Bullet Punch': {zp: 100},
	'Bullet Seed': {zp: 140},
	'Burn Up': {
		bp: 130,
		type: 'Fire',
		category: 'Special',
		zp: 195,
        pp: 5
	},
	'Catastropika': {
		bp: 210,
		type: 'Electric',
		category: 'Physical',
		isZ: true,
		makesContact: true
	},
	'Charge Beam': {zp: 100},
	'Chatter': {zp: 120},
	'Chip Away': {zp: 140},
	'Circle Throw': {zp: 120},
	'Clanging Scales': {
		bp: 110,
		type: 'Dragon',
		category: 'Special',
		isSound: true,
		isSpread: true,
		zp: 185,
        pp: 5
	},
	'Clangorous Soulblaze': {
		bp: 185,
		type: 'Dragon',
		category: 'Special',
		isSound: true,
		isSpread: true,
		isZ: true
	},
	'Clear Smog': {zp: 100},
	'Close Combat': {zp: 190},
	'Continental Crush': {
		bp: 1,
		type: 'Rock',
		category: 'Physical',
		isZ: true
	},
	'Core Enforcer': {
		bp: 100,
		type: 'Dragon',
		category: 'Special',
		isSpread: true,
		zp: 140,
        pp: 10
	},
	'Corkscrew Crash': {
		bp: 1,
		type: 'Steel',
		category: 'Physical',
		isZ: true
	},
	'Covet': {zp: 120},
	'Crabhammer': {zp: 180},
	'Cross Chop': {zp: 180},
	'Cross Poison': {zp: 140},
	'Crunch': {zp: 160},
	'Crush Claw': {zp: 140},
	'Dark Pulse': {zp: 160},
	'Darkest Lariat': {
		bp: 85,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		ignoresDefenseBoosts: true,
		zp: 160,
        pp: 10
	},
	'Dazzling Gleam': {zp: 160},
	'Diamond Storm': {zp: 180},
	'Dig': {zp: 160},
	'Discharge': {zp: 160},
	'Dive': {zp: 160},
	'Dragon Hammer': {
		bp: 90,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true,
		zp: 175,
        pp: 15
	},
	'Draining Kiss': {zp: 100},
	'Drill Peck': {zp: 160},
	'Devastating Drake': {
		bp: 1,
		type: 'Dragon',
		category: 'Physical',
		isZ: true
	},
	'Doom Desire': {zp: 200},
	'Double-Edge': {zp: 190},
	'Double Hit': {zp: 140},
	'Double Kick': {zp: 100},
	'Draco Meteor': {zp: 195},
	'Dragon Ascent': {zp: 190},
	'Dragon Claw': {zp: 160},
	'Dragon Pulse': {zp: 160},
	'Dragon Rush': {zp: 180},
	'Dragon Tail': {zp: 120},
	'Drain Punch': {zp: 140},
	'Dream Eater': {zp: 180},
	'Drill Run': {zp: 160},
	'Dual Chop': {zp: 100},
	'Dynamic Punch': {zp: 180},
	'Earth Power': {zp: 175},
	'Earthquake': {zp: 180},
	'Electro Ball': {zp: 160},
	'Electroweb': {zp: 100},
	'Endeavor': {zp: 160},
	'Energy Ball': {zp: 175},
	'Eruption': {zp: 200},
	'Explosion': {zp: 200},
	'Extrasensory': {zp: 160},
	'Extreme Speed': {zp: 160},
	'Fake Out': {zp: 100},
	'Facade': {zp: 140},
	'Feint': {zp: 100},
	'Feint Attack': {zp: 120},
	'Fell Stinger': {bp: '50', zp: 100},
	'Fiery Dance': {zp: 160},
	'Final Gambit': {zp: 180},
	'Fire Blast': {zp: 185},
	'Fire Fang': {zp: 120},
	'Fire Lash': {
		bp: 80,
		type: 'Fire',
		category: 'Physical',
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
        pp: 15
	},
	'Fire Pledge': {zp: 160},
	'Fire Punch': {zp: 140},
	'First Impression': {
		bp: 90,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
		hasPriority: true,
		zp: 175,
        pp: 10
	},
	'Flail': {zp: 160},
	'Flamethrower': {zp: 175},
	'Flame Burst': {zp: 140},
	'Flame Charge': {zp: 100},
	'Flame Wheel': {zp: 120},
	'Flare Blitz': {zp: 190},
	'Flash Cannon': {zp: 160},
	'Fleur Cannon': {
		bp: 130,
		type: 'Fairy',
		category: 'Special',
		hasSecondaryEffect: true,
		zp: 195,
		dropsStats: 2,
        pp: 5
	},
	'Fling': {zp: 100},
	'Floral Healing': {
        bp: 0,
        type: 'Fairy',
        pp: 10
    },
	'Fly': {zp: 175},
	'Flying Press': {bp: 100, zp: 170},
	'Focus Blast': {zp: 190},
	'Focus Punch': {zp: 200},
	'Force Palm': {zp: 120},
	'Foul Play': {zp: 175},
	'Freeze Shock': {zp: 200},
	'Freeze-Dry': {zp: 140},
	'Frenzy Plant': {zp: 200},
	'Frost Breath': {zp: 120},
	'Frustration': {zp: 160},
	'Fury Swipes': {zp: 100},
	'Fusion Bolt': {zp: 180},
	'Fusion Flare': {zp: 180},
	'Future Sight': {zp: 190},
	'Gear Grind': {zp: 180},
	'Genesis Supernova': {
		bp: 185,
		type: 'Psychic',
		category: 'Special',
		isZ: true
	},
	'Giga Drain': {zp: 140},
	'Giga Impact': {zp: 200},
	'Gigavolt Havoc': {
		bp: 1,
		type: 'Electric',
		category: 'Physical',
		isZ: true
	},
	'Glaciate': {zp: 120},
	'Grass Knot': {zp: 160},
	'Grass Pledge': {zp: 160},
	'Gunk Shot': {zp: 190},
	'Gust': {zp: 100},
	'Guardian of Alola' : {
		bp: 1,
		type: 'Fairy',
		category: 'Special',
		isZ: true
	},
	'Gyro Ball': {zp: 160},
	'Hammer Arm': {zp: 180},
	'Headbutt': {zp: 140},
	'Head Charge': {zp: 190},
	'Head Smash': {zp: 200},
	'Heart Stamp': {zp: 120},
	'Heat Wave': {zp: 175},
	'Heavy Slam': {zp: 160},
	'Hex': {zp: 160},
	'Hidden Power Bug': {zp: 120},
	'Hidden Power Dark': {zp: 120},
	'Hidden Power Dragon': {zp: 120},
	'Hidden Power Electric': {zp: 120},
	'Hidden Power Fighting': {zp: 120},
	'Hidden Power Fire': {zp: 120},
	'Hidden Power Flying': {zp: 120},
	'Hidden Power Ghost': {zp: 120},
	'Hidden Power Grass': {zp: 120},
	'Hidden Power Ground': {zp: 120},
	'Hidden Power Ice': {zp: 120},
	'Hidden Power Poison': {zp: 120},
	'Hidden Power Psychic': {zp: 120},
	'Hidden Power Rock': {zp: 120},
	'Hidden Power Steel': {zp: 120},
	'Hidden Power Water': {zp: 120},
	'High Horsepower': {
		bp: 95,
		type: 'Ground',
		category: 'Physical',
		makesContact: true,
		zp: 175,
        pp: 10
	},
	'High Jump Kick': {zp: 195},
	'Horn Leech': {zp: 140},
	'Hurricane': {zp: 185},
	'Hydro Cannon': {zp: 200},
	'Hydro Pump': {zp: 185},
	'Hydro Vortex': {
		bp: 1,
		type: 'Water',
		category: 'Physical',
		isZ: true
	},
	'Hyper Beam': {zp: 200},
	'Hyper Voice': {zp: 175},
	'Hyperspace Fury': {zp: 180},
	'Hyperspace Hole': {zp: 160},
	'Ice Beam': {zp: 175},
	'Ice Burn': {zp: 200},
	'Ice Fang': {zp: 120},
	'Ice Hammer': {
		bp: 100,
		type: 'Ice',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
		zp: 180,
        pp: 10
	},
	'Ice Punch': {zp: 140},
	'Ice Shard': {zp: 100},
	'Icicle Crash': {zp: 160},
	'Icicle Spear': {zp: 140},
	'Icy Wind': {zp: 100},
	'Incinerate': {zp: 120},
	'Inferno': {zp: 180},
	'Inferno Overdrive': {
		bp: 1,
		type: 'Fire',
		category: 'Physical',
		isZ: true
	},
	'Infestation': {zp: 100},
	'Instruct': {
        bp: 0,
        type: 'Psychic',
        pp: 15
    },
	'Iron Head': {zp: 160},
	'Iron Tail': {zp: 180},
	'Judgment': {zp: 180},
	'Jump Kick': {zp: 180},
	'Knock Off': {zp: 120},
	'Land\'s Wrath': {zp: 185},
	'Last Resort': {zp: 200},
	'Lava Plume': {zp: 160},
	'Leafage': {
		bp: 40,
		type: 'Grass',
		category: 'Physical',
		zp: 100,
        pp: 40
	},
	'Leaf Blade': {zp: 175},
	'Leaf Storm': {zp: 195},
	'Leaf Tornado': {zp: 120},
	'Leech Life': {bp: 80, zp: 160},
	'Let\'s Snuggle Forever': {
		bp: 190,
		type: 'Fairy',
		category: 'Physical',
		makesContact: true,
		isZ: true
	},
	'Light of Ruin': {zp: 200},
	'Light That Burns the Sky': {
		bp: 200,
		type: 'Psychic',
		category: 'Special',
		usesHighestAttackStat: true,
		isZ: true
	},
	'Liquidation': {
		bp: 85,
		type: 'Water',
		category: 'Physical',
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
        pp: 10
	},
	'Low Kick': {zp: 160},
	'Low Sweep': {zp: 120},
	'Lunge': {
		bp: 80,
		type: 'Bug',
		category: 'Physical',
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
        pp: 15
	},
	'Luster Purge': {zp: 140},
	'Mach Punch': {zp: 100},
	'Magical Leaf': {zp: 120},
	'Magma Storm': {zp: 180},
	'Magnet Bomb': {zp: 120},
	'Malicious Moonsault': {
		bp: 180,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		ignoresDefenseBoosts: true,
		isZ: true
	},
	'Megahorn': {zp: 190},
	'Menacing Moonraze Maelstrom': {
		bp: 200,
		type: 'Ghost',
		category: 'Special',
		isZ: true
	},
	'Metal Claw': {zp: 100},
	'Meteor Mash': {zp: 175},
	'Mind Blown': {
		bp: 150,
		type: 'Fire',
		category: 'Special',
		isSpread: true,
		hasRecoil: true,
		zp: 200,
        pp: 5
	},
	'Mirror Shot': {zp: 120},
	'Mist Ball': {zp: 140},
	'Moonblast': {zp: 175},
	'Moongeist Beam': {
		bp: 100,
		type: 'Ghost',
		category: 'Special',
		zp: 180,
        pp: 5
	},
	'Muddy Water': {zp: 175},
	'Mud Bomb': {zp: 120},
	'Mud Shot': {zp: 100},
	'Multi-Attack': {
		bp: 90,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		zp: 185,
        pp: 10
	},
	'Mystical Fire': {bp: 75, zp: 140},
	'Natural Gift': {zp: 160},
	'Nature\'s Madness' : {
		bp: 1,
		type: 'Fairy',
		category: 'Special',
		zp: 100,
        pp: 10
	},
	'Needle Arm': {zp: 120},
	'Never-Ending Nightmare': {
		bp: 1,
		type: 'Ghost',
		category: 'Physical',
		isZ: true
	},
	'Night Daze': {zp: 160},
	'Night Shade': {zp: 100},
	'Night Slash': {zp: 140},
	'Nuzzle': {zp: 100},
	'Oblivion Wing': {zp: 160},
	'Oceanic Operetta': {
		bp: 195,
		type: 'Water',
		category: 'Special',
		isZ: true
	},
	'Ominous Wind': {zp: 120},
	'Origin Pulse': {zp: 185},
	'Outrage': {zp: 190},
	'Overheat': {zp: 195},
	'Paleo Wave': {zp: 160},
	'Parabolic Charge': {bp: 65, zp: 120},
	'Payback': {zp: 100},
	'Petal Blizzard': {zp: 175},
	'Petal Dance': {zp: 190},
	'Phantom Force': {zp: 175},
	'Photon Geyser': {
		bp: 100,
		type: 'Psychic',
		category: 'Special',
		usesHighestAttackStat: true,
		zp: 180,
        pp: 5
	},
	'Pin Missile': {zp: 140},
	'Plasma Fists': {
		bp: 100,
		type: 'Electric',
		category: 'Physical',
		makesContact: true,
		isPunch: true,
		zp: 180,
        pp: 15
	},
	'Play Rough': {zp: 175},
	'Pluck': {zp: 120},
	'Poison Fang': {zp: 100},
	'Poison Jab': {zp: 160},
	'Poison Tail': {zp: 100},
	'Pollen Puff': {
		bp: 90,
		type: 'Bug',
		category: 'Special',
		isBullet: true,
		zp: 175,
        pp: 15
	},
	'Power Gem': {zp: 160},
	'Power Trip': {
		bp: 1,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		zp: 160,
        pp: 10
	},
	'Power Whip': {zp: 190},
	'Power-Up Punch': {zp: 100},
	'Prismatic Laser': {
		bp: 160,
		type: 'Psychic',
		category: 'Special',
		zp: 200,
        pp: 10
	},
	'Precipice Blades': {zp: 190},
	'Psychic': {zp: 175},
	'Psychic Fangs': {
		bp: 85,
		type: 'Psychic',
		category: 'Physical',
		makesContact: true,
		isBite: true,
		zp: 160,
        pp: 10
	},
	'Psycho Boost': {zp: 200},
	'Psycho Cut': {zp: 140},
	'Psyshock': {zp: 160},
	'Psystrike': {zp: 180},
	'Pulverizing Pancake': {
		bp: 210,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		isZ: true
	},
	'Punishment': {zp: 160},
	'Pursuit': {zp: 100},
	'Quick Attack': {zp: 100},
	'Rapid Spin': {zp: 100},
	'Razor Leaf': {zp: 120},
	'Razor Shell': {zp: 140},
	'Relic Song': {zp: 140},
	'Retaliate': {zp: 140},
	'Return': {zp: 160},
	'Revelation Dance': {
		bp: 90,
		type: 'Normal',
		category: 'Special',
		zp: 175,
        pp: 15
	},
	'Revenge': {zp: 120},
	'Reversal': {zp: 160},
	'Roar of Time': {zp: 200},
	'Rock Blast': {isBullet: true, zp: 140},
	'Rock Climb': {zp: 175},
	'Rock Slide': {zp: 140},
	'Rock Smash': {zp: 100},
	'Rock Throw': {zp: 100},
	'Rock Tomb': {zp: 140},
	'Rock Wrecker': {zp: 200},
	'Round': {zp: 120},
	'Sacred Fire': {zp: 180},
	'Sacred Sword': {zp: 175},
	'Sand Tomb': {zp: 100},
	'Savage Spin-Out': {
		bp: 1,
		type: 'Bug',
		category: 'Physical',
		isZ: true
	},
	'Scald': {zp: 160},
	'Searing Shot': {zp: 180},
	'Searing Sunraze Smash': {
		bp: 200,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		isZ: true
	},
	'Secret Power': {zp: 140},
	'Secret Sword': {zp: 160},
	'Seed Bomb': {zp: 160},
	'Seed Flare': {zp: 190},
	'Seismic Toss': {zp: 100},
	'Self-Destruct': {zp: 200},
	'Shadow Claw': {zp: 140},
	'Shadow Force': {zp: 190},
	'Shadow Sneak': {zp: 100},
	'Shadow Strike': {zp: 160},
	'Shattered Psyche': {
		bp: 1,
		type: 'Psychic',
		category: 'Physical',
		isZ: true
	},
	'Shadow Ball': {zp: 160},
	'Shadow Bone': {
		bp: 85,
		type: 'Ghost',
		category: 'Physical',
		hasSecondaryEffect: true,
		zp: 160,
        pp: 10
	},
	'Shadow Punch': {zp: 120},
	'Sheer Cold': {zp: 180},
	'Shell Trap': {
		bp: 150,
		type: 'Fire',
		category: 'Special',
		isSpread: true,
		zp: 200,
        pp: 5
	},
	'Shock Wave': {zp: 120},
	'Shore Up': {
        bp: 0,
        type: 'Ground',
        pp: 10
    },
	'Signal Beam': {zp: 140},
	'Silver Wind': {zp: 120},
	'Sinister Arrow Raid': {
		bp: 180,
		type: 'Ghost',
		category: 'Physical',
		isZ: true
	},
	'Skull Bash': {zp: 195},
	'Sky Attack': {zp: 200},
	'Sky Drop': {zp: 120},
	'Sky Uppercut': {zp: 160},
	'Slash': {zp: 140},
	'Sludge': {zp: 120},
	'Sludge Bomb': {zp: 175},
	'Sludge Wave': {zp: 175},
	'Smack Down': {zp: 100},
	'Smart Strike': {
		bp: 70,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		zp: 140,
        pp: 10
	},
	'Snarl': {zp: 100},
	'Solar Beam': {zp: 190},
	'Solar Blade': {
		bp: 125,
		type: 'Grass',
		category: 'Physical',
		makesContact: true,
		zp: 190,
        pp: 10
	},
	'Soul-Stealing 7-Star Strike': {
		bp: 195,
		type: 'Ghost',
		category: 'Physical',
		isZ: true
	},
	'Spacial Rend': {zp: 180},
	'Spark': {zp: 120},
	'Sparkling Aria': {
		bp: 90,
		type: 'Water',
		category: 'Special',
		isSound: true,
		isSpread: true,
		zp: 175,
        pp: 10
	},
	'Spectral Thief': {
		bp: 90,
		type: 'Ghost',
		category: 'Physical',
		makesContact: true,
		zp: 175,
        pp: 10
	},
	'Spirit Shackle': {
		bp: 80,
		type: 'Ghost',
		category: 'Physical',
		hasSecondaryEffect: true,
		zp: 160,
        pp: 10
	},
	'Splintered Stormshards': {
		bp: 190,
		type: 'Rock',
		category: 'Physical',
		isZ: true
	},
	'Steam Eruption': {zp: 185},
	'Steamroller': {zp: 120},
	'Steel Wing': {zp: 140},
	'Stoked Sparksurfer': {
		bp: 175,
		type: 'Electric',
		category: 'Special',
		isZ: true
	},
	'Stomping Tantrum': {
		bp: 75,
		type: 'Ground',
		category: 'Physical',
		makesContact: true,
		zp: 140,
        pp: 10
	},
	'Stone Edge': {zp: 180},
	'Stored Power': {zp: 160},
	'Storm Throw': {zp: 120},
	'Strength Sap': {
        bp: 0,
        type: 'Grass',
        pp: 10
    },
	'Struggle Bug': {zp: 100},
	'Submission': {zp: 160},
	'Subzero Slammer': {
		bp: 1,
		type: 'Ice',
		category: 'Physical',
		isZ: true
	},
	'Sucker Punch': {bp: 70, zp: 140},
	'Sunsteel Strike': {
		bp: 100,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		zp: 180,
        pp: 5
	},
	'Super Fang': {zp: 100},
	'Superpower': {zp: 190},
	'Supersonic Skystrike': {
		bp: 1,
		type: 'Flying',
		category: 'Physical',
		isZ: true
	},
	'Surf': {zp: 175},
	'Swift': {zp: 120},
	'Synchronoise': {zp: 190},
	'Tackle': {bp: 40, zp: 100},
	'Take Down': {zp: 160},
	'Tail Slap': {zp: 140},
	'Techno Blast': {zp: 190},
	'Tectonic Rage': {
		bp: 1,
		type: 'Ground',
		category: 'Physical',
		isZ: true
	},
	'Thief': {zp: 120},
	'Thousand Arrows': {zp: 180},
	'Thousand Waves': {zp: 175},
	'Thrash': {zp: 190},
	'Throat Chop': {
		bp: 80,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		zp: 160,
        pp: 15
	},
	'Thunder': {zp: 185},
	'Thunderbolt': {zp: 175},
	'Thunder Fang': {zp: 120},
	'Thunder Punch': {zp: 140},
	'Tri Attack': {zp: 160},
	'Trop Kick': {
		bp: 70,
		type: 'Grass',
		category: 'Physical',
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 140,
        pp: 15
	},
	'Twineedle': {zp: 100},
	'Twinkle Tackle': {
		bp: 1,
		type: 'Fairy',
		category: 'Physical',
		isZ: true
	},
	'U-turn': {zp: 140},
	'Uproar': {zp: 175},
	'V-create': {zp: 220},
	'Vacuum Wave': {zp: 100},
	'Venoshock': {zp: 120},
	'Volt Switch': {zp: 140},
	'Volt Tackle': {zp: 190},
	'Wake-Up Slap': {zp: 140},
	'Waterfall': {zp: 160},
	'Water Pledge': {zp: 160},
	'Water Pulse': {zp: 120},
	'Water Shuriken': {category: 'Special', zp: 100},
	'Water Spout': {zp: 200},
	'Weather Ball': {zp: 160},
	'Whirlpool': {zp: 100},
	'Wild Charge': {zp: 175},
	'Wing Attack': {zp: 120},
	'Wood Hammer': {zp: 190},
	'Wring Out': {zp: 190},
	'X-Scissor': {zp: 160},
	'Zap Cannon': {zp: 190},
	'Zen Headbutt': {zp: 160},
	'Zing Zap': {
		bp: 80,
		type: 'Electric',
		category: 'Physical',
		hasSecondaryEffect: true,
		makesContact: true,
		zp: 160,
        pp: 10
	}
});
