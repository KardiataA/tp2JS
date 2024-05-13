import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>My next started App</p>
      <hr />
      <Link href="/Products">Products</Link>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/movies">Page des films</Link>
    </div>
  );
}
