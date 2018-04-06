class Spaceship {
	constructor(name, crewMembers, phasers, shields){
		this.name = name
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		this.crew = crewMembers
		crewMembers.length > 0 ? this.docked = false : this.docked = true
		this.phasersCharge = 'uncharged'

		crewMembers.forEach(member => member.currentShip = this)

	}



}
