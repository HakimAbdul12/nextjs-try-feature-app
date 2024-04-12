'use client'
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../app/components/logo.svg";
import "../app/globals.css";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

export const dynamic = "force-dynamic";
const query = gql` query {
  users{
		data{
      id
      name
      email
    }
  }
}`
export default function Home() {
  const { data } = useSuspenseQuery(query);
  return (
    <>
      <div className="hero">
      <h1>Users:</h1>
        <ul>
          {data.users.data.map(user => (
            <li key={user.id}>
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
