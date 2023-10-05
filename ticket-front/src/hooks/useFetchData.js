import { useState, useEffect } from "react";

export const useFetchData = (service) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const dataService = await service();
      setData(dataService);
    } catch (error) {
      setError(error);
      console.log(error.status);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { data, loading, error };
};
