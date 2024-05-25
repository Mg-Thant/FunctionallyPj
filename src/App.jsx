import Main from "./layout/main";
import ItemContexProvider from "./store/ItemContex";

function App() {
  return (
    <>
      <ItemContexProvider>
        <Main />
      </ItemContexProvider>
    </>
  );
}

export default App;
