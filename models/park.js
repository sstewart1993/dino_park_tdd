const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.add = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

module.exports = Park;