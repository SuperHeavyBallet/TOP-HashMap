// Declaring the intial Class that later Hashmap's can be derived from

class HashMap
{
    // Using the constructor function to define the data within this class as an empty object
    constructor()
    {
        this.data = {};
    }

    // A function to create a Hash from an input string
    hash(inputString)
    {

        let hashCode = 0;

        const primeNumber = 31;

        for (let i = 0; i < inputString.length; i++)
        {
            hashCode = primeNumber * hashCode + inputString.charCodeAt(i);
        }

        return hashCode;

    }

    // Setting a new key and value pair for an element inside the Hashmap
    set(key, value)
    {
        this.data[key] = value;

    }

    // Retriving the data attached to a specific key within the Bucket
    get(key)
    {
        return this.data[key];
    }

    // Checking to see if that KEY exists within this Hashmap
    has(key)
    {
        return key in this.data;
    }

    // Remove an element within the Bucket attached to a specific KEY, if it is present
    remove(key)
    {

        if (this.has(key)) {
            delete this.data[key];
            return true; // indicates succesful deletion
        }
        else
        {
            return false; // key not found
        }

    }

    // Returns the length of the entire Hashmap
    length()
    {
        return Object.keys(this.data).length;
    }

    // Removes all entries within the Hashmap
    clear()
    {
        
        const keys = Object.keys(this.data);

        for (const key of keys)
        {
            delete this.data[key];
        }

    }

    // Returns a list of all KEYS within this Hashmap
    keys()
    {
        return Object.keys(this.data);
    }

    // Returns a list of all VALUES within this Hashmap
    values()
    {
        return Object.values(this.data);
    }

    // Returns a list of all ENTRIES within this Hashmap
    entries()
    {
        return Object.entries(this.data);
    }

}

const newHash = new HashMap; 

//Initialise Keys
const brian =  newHash.hash("brian");
const jeff =  newHash.hash("jeff");
const james = newHash.hash("james");
const henry = newHash.hash("henry");

console.log("// Set / Get Function //");
newHash.set(brian, "London");
console.log(newHash.get(brian));

newHash.set(jeff, "Canada");
console.log(newHash.get(jeff));

console.log("// Has Function //");
console.log(newHash.has(brian));

console.log("// Remove Function //");
//console.log(newHash.remove(brian));
console.log(newHash.remove(42));

console.log("// Entries Function //");
console.log(newHash.entries());

console.log("// Length and Clear Functions");
console.log(newHash.length());
newHash.clear();
console.log(newHash.length());



