import Link from "next/link";
export default function notfound() {
  return (
    <div>
      <h1 className="text-center text-primary">Not Found 😟😟😟</h1>
      <div className="text-center">
        <small>
          Go back <Link href="/">Home</Link>
        </small>
      </div>
    </div>
  );
}
