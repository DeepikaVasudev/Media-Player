//define all api for project , it calls CommonAPI function

import CommonAPI from "./CommonAPI";

//upload video API - this function is called in add component

export const uploadVideoAPI=async(videoData)=>{
    return await CommonAPI('post','/allVideos',videoData)
}

export const getVideoAPI=async()=>{
    return await CommonAPI('get','/allVideos')
}

export const addHistory=async(historyData)=>{
    return await CommonAPI('post','/allHistory',historyData)
}

export const getHistoryAPI=async()=>{
    return await CommonAPI('get','/allHistory',"")
}

export const deleteHistoryAPI=async(id)=>{
    return await CommonAPI('delete',`/allHistory/${id}`,{})
}

export const deleteVideoAPI=async(id)=>{
    return await CommonAPI('delete',`/allVideos/${id}`,{})
}

export const addCategoryAPI=async(categories)=>{
    return await CommonAPI('post','/allCategories',categories)
}

export const getCategoryAPI=async()=>{
    return await CommonAPI('get','/allCategories',"")
}

export const getSingleVideoAPI=async(id)=>{
    return await CommonAPI('get',`/allVideos/${id}`,"")
}

export const updateCategoryAPI=async(id,eachData)=>{
    return await CommonAPI('put',`/allCategories/${id}`,eachData)
}

export const deleteCategoryAPI=async(id)=>{
    return await CommonAPI('delete',`/allCategories/${id}`,{})
}