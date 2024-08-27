"use client";
import { useEffect, useState } from "react";

export const PostFeed = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3초 딜레이

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Loading Post Feed...</p>;
  }

  return (
    <div>
      <h2>Post Feed</h2>
      <p>Posts will be displayed here.</p>
    </div>
  );
};

export const Weather = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5초 딜레이

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <p>Loading Weather...</p>;
  }

  return (
    <div>
      <h2>Weather</h2>
      <p>Weather information will be displayed here.</p>
    </div>
  );
};
