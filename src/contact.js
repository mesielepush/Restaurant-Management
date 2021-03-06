/* eslint-disable import/no-cycle */
import navbar from './navbar';
import home from './home';
import menu from './menu';

const contact = () => {
  const content = document.getElementById('content');

  const template = `
                   
                    <section class="front_contact">
                        <div class="contact_info d-flex justify-content-center">
                            <div class="in_info">
                                <span>Chillious Corp.</span>
                                <p> St. Real Route #666</p>
                                <p> New Soho, El Dorado</p>
                                <p>Voltaire Republic</p>
                                <p> Reservations: 5526655485</p>
                                <p>thisistotally@realmail.com</p>
                            </div>
                        </div>

                    </section>



                    <div class = 'home' >
                        <div class="container">
                            
                        </div>                            
                    </div> `;
  content.innerHTML += template;
  const menus = document.getElementById('menu');
  menus.addEventListener('click', () => {
    navbar();
    menu();
  });
  const about = document.getElementById('about');
  about.addEventListener('click', () => {
    navbar();
    home();
  });
};
export default contact;