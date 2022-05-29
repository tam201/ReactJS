import Header from "./header";
import Footer from "./footer";

function layout({children}) {
  return (
    <div>
      <Header />
      { children }
      <Footer />    
    </div>
  );
}

export default layout;
