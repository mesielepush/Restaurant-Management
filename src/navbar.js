import menu from './menu'
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
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Contact</a></li>
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
    
};

export default navbar;