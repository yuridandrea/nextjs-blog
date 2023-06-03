'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Dashboard = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-cache',
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  console.log(data);
  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
