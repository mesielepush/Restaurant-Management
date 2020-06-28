const navbar = () =>{
    const content = document.getElementById('content');
    content.innerHTML = '';
    const template = `
                        <nav class="nav">
                        <div class="container">
                            <div class="logo">
                                <a href="#">Your Logo</a>
                            </div>
                            <div id="mainListDiv" class="main_list">
                                <ul class="navlinks">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Portfolio</a></li>
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
                        <section class="home">
                        </section>
                        <div style="height: 1000px">
                        
                                
                        </div>
                        `;
    content.innerHTML += template;
};

export default navbar;