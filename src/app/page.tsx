'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import { gql } from '@apollo/client';
// import client from './apollo-client';

export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World</h1>
    </>
  );
}
