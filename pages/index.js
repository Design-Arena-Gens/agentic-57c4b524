import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Authentic Saint Nicholas</title>
        <meta name="description" content="Reacquaint children with the true Saint Nicholas?icon of Christ, defender of the poor." />
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
            <Link href="/about" className="link">About</Link>
          </nav>
        </header>

        <section className="hero">
          <h1 className="title">The Authentic Saint Nicholas</h1>
          <p className="subtitle">Not just good cheer?true charity and courage.</p>
          <p className="lede">
            The figure of Saint Nicholas stands apart from nearly every other Christian saint: his fame spread across empires and generations to make him one of the most recognizable Christian saints in history. But the popular perception of Saint Nicholas today diverges greatly from his original veneration as a compassionate almsgiver and defender of the poor. Saint Nicholas has been reduced to the pop culture figure of Santa Claus, a jolly old man who brings presents to good little boys and girls. This book reacquaints those boys and girls with the authentic Santa Claus Nicholas, a man who found greatness not simply in spreading ?good cheer,? but in being a true icon of Jesus Christ in word and deed.
          </p>
        </section>

        <section className="grid">
          <article className="card">
            <h2>Compassionate Almsgiver</h2>
            <p>Known for secret gifts to those in need, Nicholas practiced mercy without seeking praise.</p>
          </article>
          <article className="card">
            <h2>Defender of the Poor</h2>
            <p>He confronted injustice with courage, protecting the vulnerable and speaking truth to power.</p>
          </article>
          <article className="card">
            <h2>Icon of Christ</h2>
            <p>His life pointed beyond himself?to the generous love of Jesus in word and deed.</p>
          </article>
        </section>

        <footer className="footer">
          <p>Learn more about the life and legacy of Saint Nicholas on the <Link href="/about">About</Link> page.</p>
        </footer>
      </main>
    </>
  );
}
