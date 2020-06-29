import navbar from './navbar'
import home from  './home'
import contact from './contact'
const navbar = () =>{
    const content = document.getElementById('content');
    
    content.innerHTML = '';
    const template = `
                        <nav class="nav">
                            <div class="container">
                                <div class="logo">
                                    
                                </div>
                                <div id="mainListDiv" class="main_list">
                                    <ul class="navlinks">
                                        <li><a href="#" id = 'about'>About</a></li>
                                        <li><a href="#" id = 'menu'>Menu</a></li>
                                        <li><a href="#" id = 'contact'>Contact</a></li>
                                    </ul>
                                </div>
                                <span class="navTrigger">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </span>
                            </div>
                        </nav>
                        
                        `;
    content.innerHTML += template;
    
    const about = document.getElementById('about')
    about.addEventListener('click', ()=>{
        navbar();
        home();
    } );
    
    const menus = document.getElementById('menu')
    menus.addEventListener('click', () => {
        navbar();
        menu();
    });
    
    const cont = document.getElementById('contact')
    cont.addEventListener('click', () => {
        navbar();
        contact();
    });
};

export default navbar;