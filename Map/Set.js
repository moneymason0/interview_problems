function mapCompatibleUnitsByPilot(array){
    let pilotsMap = new Map();     // Create Output Map
    //Increment through outer array
    array.forEach(map => {
        let mapKeys = map.keys(); // Get the Keys of the Current Inner Map
    // Increment through each key in the Current Inner Map
        for(let key of mapKeys){
            // Check to see if the pilot is not already a key in the Output Pilots Map
            if(!pilotsMap.has(key)){
                let pilotSet = new Set();       // Create a new set for unit
                pilotSet.add(map.get(key));     // Update Pilot Set to include new value (unit)
                pilotsMap.set(key, pilotSet);   // Attach updated set to Output Pilot Map
            }
            else 
                pilotsMap.get(key).add(map.get(key)); 
        }
    });
   return pilotsMap;
}

function mapCompatiblePilotsByUnit(array){
    let unitsMap = new Map();     // Create Output Map
    //Increment through outer array
    array.forEach(map => {
        let mapValues = map.values(); // Get the Keys of the Current Inner Map
    // Increment through each key in the Current Inner Map
        for(let currentValue of mapValues){
            let currentKey; // Initialize the current map key
            // Identify the current map key using the value by itereating through an map.entries object
            for (let [key, value] of map.entries()) {
                if (value === currentValue)
                   currentKey = key;
            }
            if(!unitsMap.has(currentValue)){ // Check to see if the unit is not already a key in the Output Units Map
                let unitSet = new Set();                 // Create a new set for unit
                unitSet.add(currentKey);                 // Update Unit Set to include new value (pilot)
                unitsMap.set(currentValue, unitSet);    // Attached Set to Output Unit Map
            }
            else 
                unitsMap.get(currentValue).add(currentKey); 
        }
    });
    return unitsMap;
}

const values1 = {"Rei": "Eva-00", "Shinji": 'Eva-01'};
const values2 = {'Shinji' : 'Eva-01', 'Asuka' : 'Eva-02'};
const values3 = {'Shinji' : 'Eva-00', 'Rei' : 'Eva-01', 'Asuka' : 'Eva-02'};

let input = [
    new Map(Object.entries(values1)),
    new Map(Object.entries(values2)),
    new Map(Object.entries(values3))
  ];

  console.log(mapCompatibleUnitsByPilot(input));
  console.log(mapCompatiblePilotsByUnit(input));