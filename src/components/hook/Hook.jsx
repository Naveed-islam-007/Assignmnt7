import { useEffect, useState } from 'react';

const Hook = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);  // ← start as true

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();         

            setTimeout(() => {
                setApps(data);
                setLoading(false);
            }, 1500);
        };
        fetchData();
    }, []);

    return { apps, loading };                      
};

export default Hook;