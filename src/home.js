/* eslint-disable import/no-cycle */
import navbar from './navbar';
import contact from './contact';
import menu from './menu';

const home = () => {
  const content = document.getElementById('content');

  const template = `
                    <section class="front_page">
                        <div class="front_copy">
                            The tastiest, the hottests, the best...
                        </div>
                    </section>

                    <div class = 'home' style="height: 600px">
                    <div class="home_info d-flex justify-content-center">
                        <div class="home_in_info">
                            <span>Chillious Corp.</span>
                            <p> This explains how perfect and wonderful this restaurant is</p>
                            <p> You don't believe me? well... you shouldn't</p>
                            <p>This could be fake you know? </p>
                            <p>Specially in this times: pandemics, massive public demonstrations...</p>
                            <p> I mean, you shouldn't trust this whole "reality" thing amirite?</p>
                            <p>Just buy or food ok? It's nice and spicy...</p>
                        </div>
                    </div>                            
                    </div>
    `;
  content.innerHTML += template;
  const menus = document.getElementById('menu');
  menus.addEventListener('click', () => {
    navbar();
    menu();
  });
  const cont = document.getElementById('contact');
  cont.addEventListener('click', () => {
    navbar();
    contact();
  });
};
export default home;
