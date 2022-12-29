import Profile from '../assets/images/profile.jpeg';

const Header: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div className='bg-center bg-cover bg-no-repeat h-72 w-2/5' style={{ backgroundImage: `url(${Profile})` }}></div>
      <div>
        <h1>Badie Tahghighi</h1>
      </div>
    </div>
  );
};

export default Header;
