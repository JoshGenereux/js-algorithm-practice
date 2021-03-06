

const stops = [
    {
        name: `Gus's Gas`,
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ],
        traffic: 12
    },
    {
        name: `Halle's House of Pancakes`,
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ],
        traffic: 0
    },
    {
        name: `Jake's Great Shakes`,
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ],
        traffic: 30
    },
    {
        name: `Luna's Lunch Counter`,
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ],
        traffic: 7
    },

]

const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [],
        segmentTimes: [],
        totalTime: null
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].speedLimits.length; j++){
            let count = 0;
            let distance = arr[i].speedLimits[j].distance
            let speed = arr[i].speedLimits[j].speedLimit
            let time = distance / speed
            console.log(arr[i].speedLimits[j])
            result.avgSpeedLimits.push(time)
            count++;
        }
    }
    return result
}


console.log(tripTime(stops))
