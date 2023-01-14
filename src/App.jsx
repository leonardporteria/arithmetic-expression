import Header from './components/Header';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  return (
    <div className='bg-neutral-900 min-w-screen min-h-screen text-neutral-50 font-poppins flex flex-col'>
      <Header />

      <div className='flex justify-between gap-8 p-8'>
        <Input />
        <Output />
      </div>
    </div>
  );
}

export default App;
