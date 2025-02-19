import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/index.ts';
import { YMInitializer } from 'react-yandex-metrika';

const App = () => {
  const YametricaId = import.meta.env.VITE_YAMETRICA_ID;
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <YMInitializer accounts={[YametricaId]} options={{webvisor: true}} />
    </div>
  );
};

export default App;