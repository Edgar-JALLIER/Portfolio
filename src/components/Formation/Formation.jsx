import "../../styles/Formation.scss";
import LogoOC from "../../assets/Logo-OC.png";
import LogoUniv from "../../assets/univ-nantes.png";
import LogoBac from "../../assets/BAC.png";

function Formation() {
  return (
    <section className="structure">
      <h2 className="titre titre--formation">Découvrez mes formations</h2>
      <div className="container-formation">
        <div className="formation formation--spe">
          <div className="formation-part1">
            <div className="formation-part1_date">
              avril 2023 - octobre 2024
            </div>
            <div className="formation-part1_entreprise">Openclassroom</div>
          </div>
          <img className="logo-formation" src={LogoOC} alt="Openclassroom" />
          <div className="formation-part2">
            <div className="formation-part2_durée">18 mois</div>
            <div className="formation-part2_poste">
              Développeur concepteur logiciel
            </div>
          </div>
        </div>

        <div className="formation formation--spe">
          <div className="formation-part1">
            <div className="formation-part1_date">mars - novembre 2022</div>
            <div className="formation-part1_entreprise">Openclassroom</div>
          </div>
          <img className="logo-formation" src={LogoOC} alt="Openclassroom" />
          <div className="formation-part2">
            <div className="formation-part2_durée">8 mois</div>
            <div className="formation-part2_poste">
              Développeur intégrateur Web
            </div>
          </div>
        </div>

        <div className="formation formation--spe">
          <div className="formation-part1">
            <div className="formation-part1_date">2017 - 2020</div>
            <div className="formation-part1_entreprise">
              Université de Nantes
            </div>
          </div>
          <img
            className="logo-formation"
            src={LogoUniv}
            alt="Université de Nantes"
          />
          <div className="formation-part2">
            <div className="formation-part2_durée">3 ans</div>
            <div className="formation-part2_poste">
              Licence STAPS
              <br />
              Education et motricité
            </div>
          </div>
        </div>

        <div className="formation">
          <div className="formation-part1">
            <div className="formation-part1_date">2014 - 2017</div>
            <div className="formation-part1_entreprise">
              Lycée Jacques Prévert - Savenay
            </div>
          </div>
          <img className="logo-formation" src={LogoBac} alt="baccalauréat" />

          <div className="formation-part2">
            <div className="formation-part2_durée">3 ans</div>
            <div className="formation-part2_poste">
              Bac économique et social
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formation;
