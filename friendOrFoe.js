let friend = ['Ryan', 'Kieran', 'Mark']

const friendOrFoe = (friend)=>{
    let newFriend = []
    for(let i = 0; i < friend.length; i++){
        if(friend[i].length === 4){
            newFriend.push(friend[i])
        }
    }
    return newFriend;
}

console.log(friendOrFoe(friend))