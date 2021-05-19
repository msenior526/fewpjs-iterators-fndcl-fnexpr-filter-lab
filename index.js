// Code your solution here

function findMatching(driversArray, string) {
    let matches = driversArray.filter(driver => 
        driver.toLowerCase() === string.toLowerCase()
    );
    return matches;
}

const fuzzyMatch = (driversArray, string) => {
    let matches = driversArray.filter(driver => 
       driver.slice(0, string.length) == string
    );
    return matches;
}

const matchName = (driversArray, string) => {
    let matches = driversArray.filter(driver => 
        driver.name === string
    );
    return matches;
}
