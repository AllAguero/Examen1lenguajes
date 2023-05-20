import './Barra.css'
function Barra() {
    return (
        <header id='navbar'> 
         <div className='Classnavbar' id='Classnavbar'>
             <div className='logo'><img src='' alt="" id='Logo' /></div>
             <ul className='links'>
                 <li><a href="#">Home</a></li>
                 <li><a href="#about">About me</a></li>
                 <li><a href='#Github'>Projects</a></li>
                 <li><a href="#">Contact</a></li>
             </ul>
             <div className="toggle_btn">
                <i className="fa-solid fa-bars"></i>
            </div>
         </div>
        </header>
       );
}

export default Barra;