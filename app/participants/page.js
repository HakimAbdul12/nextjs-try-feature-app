import "bootstrap/dist/css/bootstrap.css";
import Cards from "../components/cards";
import Loading from "./loading";
import { Suspense } from "react";
import Link from "next/link";

export default async function page() {
  try {
    return (
      <>
        <div className="pText">
          <p className="text-white text-center">
            These are the card available at the moment. come back later
            <span>
              <button className="btn btn-primary">
                <Link href="/participants/createcard">Add Card</Link>
              </button>
            </span>
          </p>
        </div>
        <Suspense fallback={<Loading />}>
          <Cards />
        </Suspense>
      </>
    );
  } catch {
    process.exit(0);
  }
}
