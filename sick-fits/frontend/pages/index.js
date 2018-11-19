import Link from 'next/link';

const Home = props => (
  <div>
    <Link href="/sell">
      <p>Home</p>
      <a>Sell</a>
    </Link>
  </div>
);

export default Home;
