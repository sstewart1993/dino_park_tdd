const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.add = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function(dinosaur){
    this.dinosaurs.pop(dinosaur);
}

Park.prototype.findMostAttractiveDinosaur = function() {
    let findMostAttractiveDino = this.dinosaurs[0];

    for (const dino of this.dinosaurs){
        if (dino.guestsAttractedPerDay > findMostAttractiveDino.guestsAttractedPerDay){
            mostAttractiveDino = dino;
        }
    }
    return mostAttractiveDino;
}

Park.prototype.findBySpecies = function(species){
    const foundDinosaurs = [];

    for(const dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            foundDinosaurs.push(dinosaur)
        }
    }
    return foundDinosaurs
}

Park.prototype.calculateAverageVisitorsPerDay = function(){
    let noOfVisitors = 0;

    for(const dinosaur of this.dinosaurs){
        noOfVisitors += dinosaur.guestsAttractedPerDay;
    }
    return noOfVisitors;
}

Park.prototype.calculateAverageVisitorsPerYear = function(){
    return this.calculateAverageVisitorsPerDay() * 365;
}


module.exports = Park;