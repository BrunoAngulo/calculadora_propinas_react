import { menuItems } from './data/db';
function App() {
  console.log(menuItems);
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-3xl font-black">
          Calculadora de Propinas y consumo
        </h1>
      </header>
    </>
  );
}

export default App;
