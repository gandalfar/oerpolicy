import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSmall from "../components/hero-small"
import ContentFeature from "../components/content-feature"

import OneColumn from "../components/one-column"

const ResourcePage = ({ location }) => (
  <Layout
    heroComponent={
      <HeroSmall
        title={
          <Fragment>
            <span className="text-primary-100">Tools & Resources</span> for
            creating Open Education Policies
          </Fragment>
        }
      ></HeroSmall>
    }
  >
    <ContentFeature
      header={{
        title: "Highlighted Tools & Services",
      }}
    >
      <OneColumn className="w-full lg:w-2/3">
        <div>
          <ul>
            <li>
              <span>Policy Lab Canvas</span>
            </li>
            <li>
              <span>Booklet from OE Policy Forum</span>
            </li>
            <li>
              <a href="https://oerworldmap.org/resource/urn:uuid:c22bc165-b46f-4b97-9e47-41052c2f6ed8">
                CC Toolkit for Business
              </a>
            </li>
            <li>
              <span>Policy Game from Priscilla</span>
            </li>
            <li>
              <span>SPARC Policy Collection</span>
            </li>
            <li>
              <a href="https://oerworldmap.org/resource/urn:uuid:5a3bb8ed-5657-483f-b297-659c08b592e7">
                OER Policy Development Tool
              </a>
            </li>
          </ul>
        </div>
      </OneColumn>
    </ContentFeature>
    <ContentFeature header={{ title: "Select Readings" }}>
      <OneColumn className="w-full lg:w-2/3">
        <ul className="resources__readings">
          <li>
            UNESCO (2019) Recommendation on Open Educational Resources (OER).
            UNESCO Publishing. Retrieved from{" "}
            <a href="https://unesdoc.unesco.org/ark:/48223/pf0000370936?posInSet=4&queryId=88445af7-d80d-4d99-ba91-57339f32521d  ">
              https://unesdoc.unesco.org/ark:/48223/pf0000370936?posInSet=4&queryId=88445af7-d80d-4d99-ba91-57339f32521d
            </a>
          </li>

          <li>
            Havemann, L., Atenas, J., Neumann, J. (2020).The Open Education
            policy registry: An open benchlearning tool. Open Education Policy
            Working Papers, (1).{" "}
            <a href="http://dx.doi.org/10.5281/zenodo.3738417">
              http://dx.doi.org/10.5281/zenodo.3738417
            </a>
          </li>

          <li>
            Atenas, J. and Havemann, L. (2019). On the trail of Open Education
            Policy Co-creation. OEWG Blog. Retrieved from
            https://education.okfn.org/on-the-trail-of-oe-policy-co-creation/
            Miao, F., Mishra, S., Orr, D., & Janssen, B. (2019). Guidelines on
            the development of open educational resources policies. UNESCO
            Publishing. Retrieved from{" "}
            <a href="https://unesdoc.unesco.org/ark:/48223/pf0000371129">
              https://unesdoc.unesco.org/ark:/48223/pf0000371129
            </a>
          </li>

          <li>
            Atenas, J., Havemann, L., Nascimbeni, F., Villar-Onrubia, D., &
            Orlic, D. (2019). Fostering Openness in Education: Considerations
            for Sustainable Policy-Making. Open Praxis, 11(2), 167-183.{" "}
            <a href="http://dx.doi.org/10.5944/openpraxis.11.2.947">
              http://dx.doi.org/10.5944/openpraxis.11.2.947
            </a>
          </li>

          <li>
            OpenMed (2018). Recommendations from OpenMed to University leaders
            and policy makers for opening up Higher Education in the
            South-Mediterranean by 2030. UNIMED. Rome. Retrieved from{" "}
            <a href="https://openmedproject.eu/recommendations/">
              https://openmedproject.eu/recommendations/
            </a>
          </li>

          <li>
            Inamorato dos Santos, A., Nascimbeni, F., Bacsich, P., Atenas, J.,
            Aceto, S. Burgos, D., Punie, Y. (2017). Policy Approaches to Open
            Education – Case Studies from 28 EU Member States (OpenEdu
            Policies).{" "}
            <a href="http://doi.org/doi:10.2760/283135 ">
              http://doi.org/doi:10.2760/283135
            </a>
          </li>

          <li>
            Amiel, T., da Cruz Duran, M. R., & da Costa, C. J. (2017).
            Construindo Políticas de Abertura a partir dos Recursos Educacionais
            Abertos: Uma Análise do Sistema Universidade Aberta do Brasil
            Building Open Policy through Open Educational Resources: An analysis
            of the Open University of Brazil System. Revista Latinoamericana de
            Tecnología Educativa, 16(2), 161–176.{" "}
            <a href="http://doi.org/http://dx.medra.org/10.17398/1695-288X.16.2.161">
              http://doi.org/http://dx.medra.org/10.17398/1695-288X.16.2.161
            </a>
          </li>

          <li>
            Inamorato dos Santos, A., Punie, Y., & Castaño Muñoz, J. (2016).
            Opening up Education: A Support Framework for Higher Education
            Institutions. JRC - EUR - Scientific and Technical Research Reports.{" "}
            <a href="http://doi.org/10.2791/293408">
              http://doi.org/10.2791/293408
            </a>
          </li>

          <li>
            Gondol, J., & Allen, N. (2015). Open government partnership as a
            platform for advancing open education policy. Open Praxis, 7(3),
            273–280.{" "}
            <a href="http://dx.doi.org/10.5944/openpraxis.7.3.214">
              http://dx.doi.org/10.5944/openpraxis.7.3.214
            </a>
          </li>

          <li>
            Bell, L., & Stevenson, H. (2006). Education policy: process, themes
            and impact. London: Routledge. Retrieved from{" "}
            <a href="http://eprints.lincoln.ac.uk/1851/1/Ed_Policy_book_proofs.pdf">
              http://eprints.lincoln.ac.uk/1851/1/Ed_Policy_book_proofs.pdf
            </a>
          </li>

          <li>
            Haddad, W., & Demsky, T. (1995). Education policy-planning process:
            an applied framework. UNESCO: International Institute for
            Educational Planning. Retrieved from{" "}
            <a href="http://www.unesco.org/education/pdf/11_200.pdf">
              http://www.unesco.org/education/pdf/11_200.pdf
            </a>
          </li>
        </ul>
      </OneColumn>
    </ContentFeature>
    <SEO title="Tools & Resources" />
  </Layout>
)

export default ResourcePage
