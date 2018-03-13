xlsxj = require("xlsx-to-json");

 xlsxj({
   input: "RDB.xlsx",
   output: "db.json"
 }, function(err, result) {
   if(err) {
     console.error(err);
   }else {
     console.log(result);
   }
 });

for (var i = 0; i < result.lenth(); i++)
{

}
var db = {
  "card":[{
     "":"","name":"Friedland Industries","address":"","recyclables":"Metals, Paper, Plastics, Electronics, Appliances, Washing Machines, Dryers, Dishwashers, Document Shredding","notes":"(pays for most large/small broken metal appliances (elec. parts, wiring, insulation must be removed)- call for instructions)"},{"":"","name":"Meridian Recycling Center","address":"5976 E. Lake Dr.","recyclables":"Aluminum Cans, Batteries (Rechargeable), C]orrugated Cardboard, Glass, Grocery Bags (paper), Magazines/Catalogs, Mixed Residential Mail, Newspapers, Office Paper, Plastic, Styrofoam, Cartons, Yard Waste","notes":"Plastic #1-7"},{"":"","name":"Goodwill","address":"","recyclables":"Shoes, Small Appliances, Pet Equipment, Sporting Goods, Toys, Books, CDs, DVDs, CD Cases, VHS, Computers, Fabric","notes":""},{"":"","name":"Hidden Treasures Thrift","address":"","recyclables":"Shoes,","notes":""},{"":"","name":"Michigan Athletic Club","address":"","recyclables":"Shoes,","notes":""},{"":"","name":"Central Park Bike Shop","address":"","recyclables":"Bicycles","notes":""},{"":"","name":"Target","address":"","recyclables":"Aluminum Cans, Electronics, Glass (brown & clear, sorted), Grocery Bags (plastic), Inkjet/Toner Cartridges, Plastic","notes":"Plastic #1-7"},{"":"","name":"Playmakers","address":"","recyclables":"Shoes,","notes":""},{"":"","name":"Eric's Cycle and Fitness","address":"","recyclables":"Bicycles","notes":""},{"":"","name":"Spin Street Bicycles","address":"","recyclables":"Bicycles","notes":""},{"":"","name":"The Bike Shop","address":"","recyclables":"Bicycles","notes":""},{"":"","name":"Thumas Bicycles","address":"","recyclables":"Bicycles","notes":""},{"":"","name":"Velocipede","address":"1353 E Grand River Ave, East Lansing, MI 48823","recyclables":"Bicycles","notes":""},{"":"","name":"Salvation Army","address":"","recyclables":"Shoes,","notes":""},{"":"","name":"Volunteers of America","address":"","recyclables":"Shoes, Small Appliances, Pet Equipment, School Supplies, Sporting Goods, Toys, Books, CDs, DVDs, CD Cases, VHS, Fabric","notes":""},{"":"","name":"Curbside","address":"","recyclables":"Aluminum Cans, Boxboard, Corrugated Cardboard, Magazines/Catalogs, Grocery Bags (paper), Mixed Residential Mail, Newspapers, Office Paper, Phone Books, Plastic, Tin & Cans,","notes":"Plastic #1-7"},{"":"","name":"Complete Battery Source","address":"1754 Central Park Dr.","recyclables":"Shoes, Batteries (rechargeable), Car Batteries,","notes":""},{"":"","name":"The Home Depot","address":"","recyclables":"Batteries (rechargeable), Compact Fluorescent Light Bulbs,","notes":""},{"":"","name":"PostNet","address":"3520 Okemos Rd. Ste 6","recyclables":"Bubblewrap, Packing Peanuts,","notes":""},{"":"","name":"AutoValue","address":"4980 Park Lake Rd.","recyclables":"Car Batteries, Waste Oil & Oil Filters,","notes":""},{"":"","name":"Nancy Moore Park","address":"","recyclables":"Christmas Trees","notes":""},{"":"","name":"NAPA (Auto Parts)","address":"","recyclables":"Car Batteries,","notes":""},{"":"","name":"Advance Auto Parts","address":"","recyclables":"Waste oil, Car Batteries","notes":""},{"":"","name":"All Auto Service","address":"","recyclables":"Waste oil, Car Batteries, Oil Filters","notes":""},{"":"","name":"All Imports Auto Care","address":"","recyclables":"Waste oil, Car Batteries, Oil Filters","notes":""},{"":"","name":"Auto Value Delta","address":"","recyclables":"Waste oil, Car Batteries","notes":""},{"":"","name":"Auto Value Lansing","address":"","recyclables":"Waste oil, Car Batteries","notes":""},{"":"","name":"Auto Zone","address":"","recyclables":"Waste oil, Car Batteries","notes":""},{"":"","name":"CarQuest","address":"","recyclables":"Car Batteries","notes":""},{"":"","name":"Corbin Automotive Service","address":"","recyclables":"Waste oil, Oil Filters, Waste AntiFreeze, Car Batteries","notes":"AntiFreeze @ $2 / gallon"},{"":"","name":"Interstate Battery System of Lansing","address":"","recyclables":"Car Batteries","notes":""},{"":"","name":"Professional Fleet Auto","address":"","recyclables":"Waste oil, Car Batteries","notes":""},{"":"","name":"O’Reilly's Discount Auto","address":"","recyclables":"Waste oil, Car Batteries","notes":"Waste oil limmit at 5 gallons / day"},{"":"","name":"Town & Country Service Center","address":"","recyclables":"Waste oil, Oil Filters, Waste AntiFreeze, Car Batteries","notes":"Waste oil limmit at 5 gallons / day, AntiFreeze limmit at 5 gallons / day"},{"":"","name":"Wonch Battery","address":"","recyclables":"Car Batteries","notes":""},{"":"","name":"Auto Value East Lansing","address":"","recyclables":"Waste oil, Car Batteries","notes":""},{"":"","name":"H&H Mobil","address":"","recyclables":"Waste oil, Waste AntiFreeze, Car Batteries","notes":""},{"":"","name":"Action Discount House and Secondhand Store","address":"","recyclables":"Appliances","notes":"(accepts only high quality used goods"},{"":"","name":"Advent House Appliance","address":"","recyclables":"Large Appliances","notes":"(accepts large appliances- must be clean and repairable, will remove Freon for $20- no microwaves)"},{"":"","name":"Bill Leach Repair Service","address":"","recyclables":"Appliances","notes":"(repairs refrigerators, freezers, air conditioners- Freon removal is $40)"},{"":"","name":"Brown's Appliance","address":"","recyclables":"Large Appliances","notes":"(accepts or repairs large used, broken appliances)"},{"":"","name":"Council Against Domestic Assault","address":"","recyclables":"Large Appliances, Small Appliances, Clothing(Child), Clothing(Baby), Toys","notes":"(usable small/large appliances, baby and kids clothes/equipment/toys, larger women's sizes needed)"},{"":"","name":"Cristo Rey Community Center","address":"","recyclables":"Large Appliances, Small Appliances, Games, Toys, Clothing, Medical Equipment","notes":"(good condition small/large appliances, games/toys, any size clothing, medical equipment)"},{"":"","name":"Dennis Distributing","address":"","recyclables":"Large Appliances, Small Appliances, Bed Frames, Vacuums","notes":"buy/sell/trade small/large appliances- will charge if not repairable"},{"":"","name":"Dicker and Deal","address":"","recyclables":"Lamps, Dinettes, Video, Stereos, Leather, Mattresses","notes":"buy/sell/trade"},{"":"","name":"Dino's Salvage","address":"","recyclables":"Large Appliances, Small Appliances, Furnaces","notes":"offers pick-up on large items"},{"":"","name":"Economic Crisis Center","address":"","recyclables":"Small Appliances, Clothing(Baby), Clothing(Large Woman's), Toys","notes":""},{"":"","name":"Ernie's Refrigeration","address":"","recyclables":"Appliances","notes":"offers freon removal service for $25"},{"":"","name":"Gateway Community Services","address":"","recyclables":"Appliances, Medical Equipment, Medical Supplies, Furniture, Health Aids, Beauty Aids","notes":"(health and beauty aides, some household furniture/appliances, medical equipment and supplies)"},{"":"","name":"Gilbert's True Value","address":"","recyclables":"Large Appliances(Refrigerators, Freezers, Air-Conditioners)","notes":"(accepts/offers trade-ins for refrigerators, freezers, air conditioners-freon must be removed)"},{"":"","name":"J & J Appliance and Furniture","address":"","recyclables":"Appliances","notes":"working and non-working appliances, call for details"},{"":"","name":"Kurt's Appliance Center","address":"","recyclables":"Appliances","notes":"(removes freon for $20 per appliance)"},{"":"","name":"Moore Living Center","address":"","recyclables":"Appliances, Grills, Lamps, Small Furniture","notes":"(working appliances, outdoor grills, lamps, small furniture)"},{"":"","name":"Ovid Iron and Metal","address":"","recyclables":"Large Appliances, Small Appliances, Metal Items","notes":"metal appliances(remove freon before recycling)"},{"":"","name":"Padnos Iron and Metal Summit Division","address":"","recyclables":"Large Appliances, Small Appliances, Microwaves, Farm Machines","notes":"no TVs / pays for farm machines with tires removed"},{"":"","name":"Rave","address":"","recyclables":"Large Appliances, Small Appliances, Sporting Goods, Toys","notes":"(small/large appliances, sporting goods/toys)"},{"":"","name":"Refugee Services","address":"","recyclables":"Small Appliances, Beds","notes":""},{"":"","name":"Relief from Violent Encounter","address":"","recyclables":"Small Appliances, Clothing, Furniture","notes":"limited clothing and furniture"},{"":"","name":"Salvation Army","address":"","recyclables":"Appliances, Pet Equipment, Toys, Lamps, Music, CDs, DVDs, CD Cases, VHS","notes":"reusable appliances"},{"":"","name":"Somebody Else's Stuff","address":"","recyclables":"Small Appliances, Music","notes":"(buys/sells small appliances, music (sheet or recorded)"},{"":"","name":"St. Vincent DePaul's","address":"","recyclables":"Small Appliances, Pet Equipment, Clocks, Toys, Books","notes":"(donation: pet supplies, clocks, toys, small countertop appliances)"},{"":"","name":"Wheeler Deeler Consignment Mini-Mall","address":"","recyclables":"Large Appliances, Small Appliances","notes":"buy/sell/trade, small/large appliances"},{"":"","name":"Padnos Iron & Metal Co.","address":"","recyclables":"Refridgerators, Freezers, Air Conditioners, Dehumidifiers, Washing Machines, Dryers, Dishwashers, Metals","notes":"$15 for Freon removal and recycling"},{"":"","name":"American Metal Buyers","address":"","recyclables":"Washing Machines, Dryers, Dishwashers","notes":""},{"":"","name":"Cats Parts Mart Plus Auto Salvage","address":"","recyclables":"Washing Machines, Dryers, Dishwashers","notes":""},{"":"","name":"Daggett Recycling Facility","address":"","recyclables":"Washing Machines, Dryers, Dishwashers, Wood","notes":"untreated wood"},{"":"","name":"Jackson Iron & Metal","address":"","recyclables":"Washing Machines, Dryers, Dishwashers","notes":""},{"":"","name":"Ovid Iron & Metal","address":"","recyclables":"Washing Machines, Dryers, Dishwashers","notes":""},{"":"","name":"Portland Iron & Metal","address":"","recyclables":"Washing Machines, Dryers, Dishwashers","notes":""},{"":"","name":"Best Buy","address":"","recyclables":"CDs, DVDs, Computers","notes":"NO CASES"},{"":"","name":"MSU Recycling Center","address":"","recyclables":"CD Cases, DVD Cases, Plastic","notes":"#1-7"},{"":"","name":"Habitat ReStore","address":"","recyclables":"Doors, Windows, Asphalt Shingles, Cabinets, Countertops, Vanities, Carpeting, Rugs, Light Fixtures, Fans, Paints, Stains, Sinks, Toilets, Pipes","notes":"Must be in good condition and still usable, no oil based paint or stain"},{"":"","name":"Crutchall","address":"","recyclables":"Asphalt Shingles,","notes":""},{"":"","name":"Midwest Cusion Brokers","address":"","recyclables":"Carpet Foam Pad, Foam Cusions","notes":""},{"":"","name":"Home Acres Building Supply","address":"","recyclables":"Ceiling Tiles","notes":""},{"":"","name":"Ritsema Associates Interiors","address":"","recyclables":"Ceiling Tiles","notes":""},{"":"","name":"L & L","address":"","recyclables":"Concrete, Asphalt","notes":""},{"":"","name":"Schlegel’s","address":"","recyclables":"Concrete, Asphalt","notes":""},{"":"","name":"Searles Concrete","address":"","recyclables":"Concrete, Asphalt","notes":""},{"":"","name":"Jake’s New & Used Plumbing","address":"","recyclables":"Sinks, Toilets, Pipes","notes":""},{"":"","name":"Charlotte Area Recycling Center/Authority","address":"","recyclables":"Siding, Cooking Oil/Grease","notes":""},{"":"","name":"Delhi Township Waste Water Treatment Plant","address":"","recyclables":"Cooking Oil/Grease","notes":""},{"":"","name":"Delta Township Recycling Center","address":"","recyclables":"Cooking Oil/Grease","notes":""},{"":"","name":"Eaton Rapids Recycling Center","address":"","recyclables":"Cooking Oil/Grease","notes":""},{"":"","name":"Grand Ledge Recycling Center","address":"","recyclables":"Cooking Oil/Grease","notes":""},{"":"","name":"FedEx","address":"","recyclables":"Document Shredding","notes":""},{"":"","name":"Shred-It","address":"","recyclables":"Document Shredding","notes":""},{"":"","name":"Capital City Vision","address":"","recyclables":"Eyeglasses","notes":""},{"":"","name":"Delta Vision Optical","address":"","recyclables":"Eyeglasses","notes":""},{"":"","name":"Eye Care Associates of Haslett","address":"","recyclables":"Eyeglasses","notes":""},{"":"","name":"Lens Crafters","address":"","recyclables":"Eyeglasses","notes":""},{"":"","name":"Meridian Senior Center","address":"","recyclables":"Eyeglasses","notes":""},{"":"","name":"DeLau Fire Services","address":"","recyclables":"Fire Extinguishers","notes":""},{"":"","name":"Household Hazardous Waste (HHW)","address":"","recyclables":"Mercury, Sharps, Florescent Lights, Oil Based Paints, Oil Based Stains, Gasoline, Fire Extinguishers, Propane Tanks, Lighter Fuel, Lamp Oil","notes":"See guidlines on website for nessesary precautions and how to handle sharps"},{"":"","name":"","address":"","recyclables":"","notes":""},{"":"","name":"","address":"","recyclables":"","notes":""},{"":"","name":"","address":"","recyclables":"","notes":""},{"":"","name":"","address":"","recyclables":"","notes":""}]
};


 var app = new Vue({
 el: '#append',
 data: {
   data: db.card
 }
})



class card {
 constructor(title, link, author, img) {
   this.title = title;
   this.link = link;
   this.author = author;
   this.img = img;
 }
}
