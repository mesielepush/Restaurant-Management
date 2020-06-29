const home = () =>{
    const content = document.getElementById('content');
    
    const template = `
                    <section class="front_page">
                        <div class="front_copy">
                            The tastiest, the hottests, the best...
                        </div>
                    </section>

                    <div class = 'home' style="height: 1000px">
                        <div class="container popo">
                            pipi
                        </div>                            
                    </div>
    `;
    content.innerHTML += template;
    

}
export default home;
