import { Link } from "react-router";
import "@styles/main.scss";
import styles from "./About.module.scss";
// Components
import Section from "@ui/Section";
import Div from "@ui/Div";
import Title from "@ui/Title";
import Para from "@ui/Para";
import SubsectionTitle from "@ui/SubsectionTitle";
import Ul from "@ui/Ul";
import Li from "@ui/Li";
import Img from "@ui/Img";

function About() {
    return (
        <>
            {/* <!-- Hero / About --> */}
            <Section className="container">

    
            </Section>
  

  {/* <!-- Benefits --> */}
  <section class="benefits">
    <div class="container">
      <div class="benefits-image">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" alt="Business woman">
      </div>

      <div>
        <h2>Unlock our expertise to drive success across industries.</h2>
        <p style="margin-top:1rem; color:var(--gray);">
          Leverage our deep industry knowledge and innovative strategies to accelerate your business growth. 
          Our tailored solutions ensure success across diverse sectors by addressing your unique challenges and opportunities.
        </p>

        <div class="benefits-list">
          <div class="benefit-item"><i class="fas fa-check-circle"></i> Measurable proven results</div>
          <div class="benefit-item"><i class="fas fa-check-circle"></i> Innovative real solutions</div>
          <div class="benefit-item"><i class="fas fa-check-circle"></i> Customized business strategies</div>
          <div class="benefit-item"><i class="fas fa-check-circle"></i> Reliable expert guidance</div>
          <div class="benefit-item"><i class="fas fa-check-circle"></i> Multi-industry expertise</div>
          <div class="benefit-item"><i class="fas fa-check-circle"></i> Support for long-term</div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Milestones --> */}
  <section class="milestones">
    <h2>Our journey: key milestones and achievements</h2>
    <p>Discover the significant milestones that have shaped our firm. Each achievement reflects our commitment to excellence and growth.</p>

    <div class="cards">
      <div class="card">
        <div class="card-icon"><i class="fas fa-laptop-code"></i></div>
        <h3>Technology Solutions (2008)</h3>
        <p>Founded with a vision to transform businesses, we started our journey with the client project set the stage for future successes.</p>
      </div>

      <div class="card">
        <div class="card-icon"><i class="fas fa-chart-line"></i></div>
        <h3>Financial Consulting</h3>
        <p>Expert guidance to optimize your financial performance.</p>
      </div>

      <div class="card">
        <div class="card-icon"><i class="fas fa-coins"></i></div>
        <h3>Financial Consulting</h3>
        <p>Expert guidance to optimize your financial performance.</p>
      </div>
    </div>
  </section>

        </>
    );
}
export default About;


