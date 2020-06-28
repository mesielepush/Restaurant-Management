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
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Menu</a></li>
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
                        <section class="front_menu">
                            <div class="pozole">
                                <img class = 'img-fluid' src="https://bit.ly/38duo2z" alt="">
                            </div>
                            <div class="tacos">
                                <img class = 'img-fluid' src="https://bit.ly/3idpXJA" alt="">
                            </div>
                            <div class="mole">
                                <img class = 'img-fluid' src="https://nym.ag/3dBWzcx" alt="">
                            </div>
                        </section>


                        
                        <div class = 'home' style="height: 1000px">
                            <div class="container">
                                
                            </div>                            
                        </div>
                        `;
    content.innerHTML += template;
    
};

export default navbar;