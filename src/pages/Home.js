import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL, 
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const Home = () => {
  // 랜덤 데이터 저장할 상태
  const [educationData, setEducationData] = useState([]);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Education에서 랜덤 4개 가져오기
        const { data: education, error: educationError } = await supabase
          .from('training')
          .select('*')
          .limit(4);

        console.log('Education data:', education);

        if (educationError) {
          console.error('Error fetching education data:', educationError);
        } else {
          setEducationData(education);
        }

        // External Activity에서 랜덤 4개 가져오기
        const { data: activity, error: activityError } = await supabase
          .from('community')
          .select('*')
          .limit(4);

        if (activityError) {
          console.error('Error fetching external activity data:', activityError);
        } else {
          setActivityData(activity);
        }
      } catch (error) {
        console.error('Error in fetchData:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <div className="gallery">
        <h2>Random Training</h2>
        <div className="grid">
          {educationData.length > 0 ? (
            educationData.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>Loading Training Program...</p>
          )}
        </div>

        <h2>Random Activities</h2>
        <div className="grid">
          {activityData.length > 0 ? (
            activityData.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>Loading Activities...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;