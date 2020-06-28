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
                            <div class="pozole" type="button" data-toggle="modal" data-target="#pozole_modal">
                                <img class = 'img-fluid' src="https://bit.ly/38duo2z" alt="">
                            </div>
                            <div class="tacos">
                                <img class = 'img-fluid' src="https://bit.ly/3idpXJA" alt="">
                            </div>
                            <div class="mole">
                                <img class = 'img-fluid' src="https://nym.ag/3dBWzcx" alt="">
                            </div>

                            <div class="modal fade" id="pozole_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">
                                    ...
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                                </div>
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