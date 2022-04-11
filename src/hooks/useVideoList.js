import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from "react";


const useVideoList = () => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        const fetchVideos =async()=>{
            // database related work
            const data = getDatabase();
            const videosRef = ref(data,"videos");
            const videoQuery = query(
                videosRef,
                orderByKey()
            ) 

            try {
                setError(false);
                setLoading(true);
                //request firebase database.
                const snapshot = await get(videoQuery);
                setLoading(false)
                if(snapshot.exists()){
                    setVideos((prevVideos)=>{
                        return [...prevVideos,...Object.values(snapshot.val())]
                    })
                } else{
                    //

                }
            } catch (error) {
                console.log(error.message);
                setError(true);
                setLoading(false);
            }
        }

        fetchVideos();
    },[])

    return {
        loading,
        error,
        videos
    };
};

export default useVideoList;