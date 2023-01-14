import githubLogo from '../assets/github.png';
import infoIcon from '../assets/info.png';

const Header = () => {
  return (
    <div className='flex items-center justify-between p-8'>
      <h1 className='text-2xl font-bold'>Arithmetic Expression Solver</h1>
      <div className='flex justify-around w-1/12'>
        <img
          src={githubLogo}
          alt='github-logo'
          onClick={() => {
            window.open(
              'https://github.com/leonardporteria/arithmetic-expression',
              '_blank'
            );
          }}
          className='cursor-pointer w-8 h-8 invert'
        />
        <img
          src={infoIcon}
          alt='info-icon'
          className='cursor-pointer w-8 h-8 invert'
        />
      </div>
    </div>
  );
};

export default Header;
