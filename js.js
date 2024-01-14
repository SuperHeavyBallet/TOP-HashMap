function hash(name, surname)
{
    return stringToNumber(name) + stringToNumber(surname);
}


function stringToNumber(string)
{
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < string.length; i++)
    {
        hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
}



class HashMap
{
    constructor()
    {
        this.data = {};
    }

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

    set(key, value)
    {
        this.data[key] = value;

    }

    get(key)
    {
        return this.data[key];
    }

    has(key)
    {
        return key in this.data;
    }

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

    length()
    {
        return Object.keys(this.data).length;
    }

    clear()
    {
        
        const keys = Object.keys(this.data);

        for (const key of keys)
        {
            delete this.data[key];
        }

    }

    keys()
    {
        return Object.keys(this.data);
    }

    values()
    {
        return Object.values(this.data);
    }

    entries()
    {
        return Object.entries(this.data);
    }

}

const newHash = new HashMap; 

//Initialise Keys
const brian =  newHash.hash("brian");
const jeff =  newHash.hash("jeff");

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



