const getStoredReadList=()=>{
    const storedListstr=localStorage.getItem('read-list');
    if(storedListstr){
        const storedList=JSON.parse(storedListstr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredReadList=(id)=>{
    const storedList=getStoredReadList();
    if(storedList.includes(id))
    {
        console.log(id,'already exists in the readlist')
    }
    else{
        storedList.push(id);
        const storedListstr=JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListstr);
    }
}

export {addToStoredReadList,getStoredReadList}