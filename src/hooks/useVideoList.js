import {
    get,
    getDatabase,
    limitToFirst,
    orderByKey,
    query,
    ref,
    startAt
} from 'firebase/database';
import { useEffect, useState } from "react";


const useVideoList = (page) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(true);
    const [videos,setVideos] = useState([]);
    const [hasMore,setHasMore] = useState(true)
   
    useEffect(()=>{
        const fetchVideos =async()=>{
            // database related work
            const data = getDatabase();
            const videosRef = ref(data,"videos");
            const videoQuery = query(
                videosRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            ) 

            try {
                setLoading(true);
                setError(false);
                //request firebase database.
                const snapshot = await get(videoQuery);
                setLoading(false)
                if(snapshot.exists()){
                    setVideos((prevVideos)=>{
                        return [...prevVideos,...Object.values(snapshot.val())]
                    })
                    
                } else{
                    setHasMore(false)
                }
            } catch (error) {
                alert(error.message);
                setError(true);
                setLoading(false);
            }
        }

        fetchVideos();
    },[page])
    return {
        loading,
        error,
        videos,
        hasMore
    };
};

export default useVideoList;