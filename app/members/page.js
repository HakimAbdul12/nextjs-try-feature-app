'use client'
import React from "react";
import "../globals.css"
import BasicExample from '../components/Navbar'
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

export default async function page() {
  async function grapMemebers() {
    try{
        const mems = await fetch("http://127.0.0.1:8000/api/payment-mems");
        return mems.json();
    } catch{
        alert("data is not to be found")
        console.log('Data cannot be fetched')
    }
  }
  const resps = await grapMemebers();
  console.log(resps);
  return (
    <>
       <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <BasicExample/>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {resps.map((element) => (
            <tr key={element.id}>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.amount}</td>
              <td><Image src="/images/profile.jpg" alt="logo" height={40} width={40}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
