import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Main({ main }) {
  return (
    <>
      <Header />
      <main>
        {main}
      </main>
      <Footer />
    </>
  );
}