import style from './Profile.module.scss';

function Profile() {
  const handleLogout = () => {
    localStorage.removeItem('userId');
    window.location.href = "/";
  }

  return (
    <div>
      <h1>Profile</h1>
      {/* Add your profile components here */}
      <button className={style.logout_btn} onClick={handleLogout} >Logout</button> 
      {/* Add more code about logout btn */}
    </div>
  );
}

export default Profile;
