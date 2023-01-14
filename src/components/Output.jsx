import Table from './Table';

const Output = () => {
  return (
    <div className='flex flex-col gap-6 p-4 w-4/5 bg-neutral-800 rounded-lg shadow-inner'>
      <h1 className='text-2xl font-semibold'>Output</h1>
      <Table />
    </div>
  );
};

export default Output;
