/* eslint-disable import/no-cycle */
import navbar from './navbar';
import contact from './contact';
import home from './home';

const menu = () => {
  const content = document.getElementById('content');

  const template = `
                   
                    <section class="front_menu">
                        <div class="pozole" type="button" data-toggle="modal" data-target="#pozole_modal">
                            <img class = 'img-fluid' src="https://bit.ly/38duo2z" alt="">
                        </div>
                        <div class="tacos" type="button" data-toggle="modal" data-target="#tacos_modal">
                            <img class = 'img-fluid' src="https://bit.ly/3idpXJA" alt="">
                        </div>
                        <div class="mole" type="button" data-toggle="modal" data-target="#mole_modal">
                            <img class = 'img-fluid' src="https://nym.ag/3dBWzcx" alt="">
                        </div>

                        <div class="modal fade" id="pozole_modal" tabindex="-1" role="dialog" aria-labelledby="pozole_modal" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="pozoleModalLabel">POZOLE</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                Pozole Spanish pronunciation: [po'sole] (from Nahuatl languages: pozolli , meaning "hominy"), is a traditional soup or stew from Mexican cuisine. It is made from hominy with meat (typically pork, but possibly chicken), and can be seasoned and garnished with shredded lettuce or cabbage, chile peppers, onion, garlic, radishes, avocado, salsa or limes. Known in Mesoamerica since the pre-Columbian era, the stew is today common across Mexico and neighboring countries, and is served both as a day-to-day meal and as a festive dish.
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="modal fade" id="tacos_modal" tabindex="-1" role="dialog" aria-labelledby="tacos_modal" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="tacosModalLabel">TACOS</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                A taco (US: /ˈtɑːkoʊ/, UK: /ˈtækoʊ/, Spanish: [ˈtako]) is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables, and cheese, allowing great versatility and variety. They are often garnished with various condiments, such as salsa, guacamole, or sour cream, and vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form of antojitos, or Mexican street food, which have spread around the world.

                    Tacos can be contrasted with similar foods such as burrito, which are often much larger and rolled rather than folded, taquitos which are rolled and fried, or chalupas/tostadas, in which the tortilla is fried before filling.
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="modal fade" id="mole_modal" tabindex="-1" role="dialog" aria-labelledby="mole_modal" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="moleModalLabel">MOLE</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                Mole (/ˈmoʊleɪ/, /ˈmoʊli/ IPA: [ˈmole] ; from Nahuatl mōlli, "sauce") is a traditional marinade and sauce originally used in Mexican cuisine. In contemporary Mexico the term is used for a number of sauces, some quite dissimilar, including black, red / Colorado, yellow, green, almendrado, de olla, huaxmole, guacamole, and pipián. Generally, a mole sauce contains a fruit, chili pepper, nut, and such spices as black pepper, cinnamon, cumin. Outside of Mexico, it typically refers to mole poblano.
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                
                                </div>
                            </div>
                            </div>
                        </div>

                    </section>



                    <div class = 'home' >
                        <div class="container">
                            
                        </div>                            
                    </div> `;
  content.innerHTML += template;
  const cont = document.getElementById('contact');
  cont.addEventListener('click', () => {
    navbar();
    contact();
  });
  const about = document.getElementById('about');
  about.addEventListener('click', () => {
    navbar();
    home();
  });
};
export default menu;