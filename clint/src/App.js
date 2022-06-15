import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { statictext } from "./statictext";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>{statictext.content}</main>
      <Footer />
    </div>
  );
}

export default App;
