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

    }

    get(key)
    {

    }

    has(key)
    {

    }

    remove()
    {

    }

    length()
    {

    }

    clear()
    {

    }

    keys()
    {

    }

    values()
    {

    }

    entries()
    {
        
    }

}

const newHash = new HashMap; 
const nameToHash = "Brian";

console.log(`${nameToHash}: ` , newHash.hash(nameToHash));