const getApps=(key)=>{
    const stored=localStorage.getItem(key);
    return stored? JSON.parse(stored):[];
}

const saveApps=(key,apps)=>{
    localStorage.setItem(key, JSON.stringify(apps));
}

export const getAppsId=()=>getApps('appsId');
export const saveAppsId=(appsId)=>saveApps('appsId', appsId);

export const addAppsId=(id)=>{
    const appsId=getAppsId();
    if(!appsId.includes(id)){
        appsId.push(id);
        saveAppsId(appsId);
    }
}


export const removeAppsId=(id)=>{
    const appsId = getAppsId().filter(appId => appId !== id);
    saveAppsId(appsId);
}


