import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Saint Nicholas</title>
        <meta name="description" content="Discover the historic Saint Nicholas?bishop, servant, and courageous defender of the poor." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
      <main className="container">
        <header className="nav">
          <div className="brand">Saint Nicholas</div>
          <nav>
            <Link href="/" className="link">Home</Link>
            <Link href="/about" className="link active">About</Link>
          </nav>
        </header>

        <section className="page">
          <h1>About the Real Nicholas</h1>
          <p>
            Nicholas of Myra (4th century) was a Christian bishop whose love for Christ shaped a life of radical generosity, prayer, and justice. Long before the modern Santa, he was celebrated for humble, hidden acts of mercy?especially toward the poor, the oppressed, and children.
          </p>
          <ul className="facts">
            <li><strong>Generosity:</strong> Gave secretly to spare others shame and to honor their dignity.</li>
            <li><strong>Courage:</strong> Intervened on behalf of the innocent and stood against corruption.</li>
            <li><strong>Faith:</strong> Lived as a true icon of Christ?embodying love in action.</li>
          </ul>
          <p>
            May learning about the authentic Nicholas inspire all of us?not merely to spread cheer?but to practice sacrificial love.
          </p>
        </section>

        <footer className="footer">
          <p>
            Return to the <Link href="/">home page</Link>.
          </p>
        </footer>
      </main>
    </>
  );
}
