import "../../styles/Experience.scss";
import LogoEDF from "../../assets/logo-edf.png";
import LogoLaposte from "../../assets/Logo-laposte1.png";
import LogoEN from "../../assets/Education-nationale.png";
import LogoCapgemini from "../../assets/logo-capgemini.png";

function Experience() {
  return (
    <section className="structure">
      <h2 className="titre titre--experience">Découvrez mes Expériences</h2>
      <div className="container-experiences">
        <h2 className="experience-type">Expérience Web</h2>

        <div className="experience experience--spe">
          <div className="experience-part1">
            <div className="experience-part1_date">2023 - 2024</div>
            <div className="experience-part1_entreprise">Capgemini</div>
          </div>
          <img
            className="logo-entreprise--Laposte"
            src={LogoCapgemini}
            alt="la poste"
          />
          <div className="experience-part2">
            <div className="experience-part2_durée">18 mois</div>
            <div className="experience-part2_poste">Ingénieur logiciel</div>
          </div>
        </div>

        <div className="experience">
          <div className="experience-part1">
            <div className="experience-part1_date">mai - juin 2022</div>
            <div className="experience-part1_entreprise">EDF</div>
          </div>
          <img className="logo-entreprise--EDF" src={LogoEDF} alt="edf" />
          <div className="experience-part2">
            <div className="experience-part2_durée">1 mois</div>
            <div className="experience-part2_poste">
              Développeur SharePoint stagiaire
            </div>
          </div>
        </div>

        <h2 className="experience-type experience-type--spe">
          Autres expériences
        </h2>
        <div className="experience experience--spe">
          <div className="experience-part1">
            <div className="experience-part1_date">2021 - 2022</div>
            <div className="experience-part1_entreprise">La Poste</div>
          </div>
          <img
            className="logo-entreprise--Laposte"
            src={LogoLaposte}
            alt="la poste"
          />
          <div className="experience-part2">
            <div className="experience-part2_durée">1 an</div>
            <div className="experience-part2_poste">Facteur / Livreur</div>
          </div>
        </div>

        <div className="experience">
          <div className="experience-part1">
            <div className="experience-part1_date">2019 - 2020</div>
            <div className="experience-part1_entreprise">
              Collège Rosa Parks
            </div>
          </div>
          <img
            className="logo-entreprise"
            src={LogoEN}
            alt="éducation nationale"
          />

          <div className="experience-part2">
            <div className="experience-part2_durée">1 an</div>
            <div className="experience-part2_poste">
              Professeur d'EPS stagiaire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
