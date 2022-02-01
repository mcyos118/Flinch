// React
import { Fragment } from "react";

// Styled Components
import styled from "styled-components";

// Components
import RoadmapItem from "./RoadmapItem/RoadmapItem";
import Background from "../../Global/Background/Background";

const Roadmap = () => {
  return (
    <Fragment>
  
      <Wrapper id="strategy">       
        <p className="header">The Strategy</p>
        <Background variant={"InfoFour"} />
        <div className="line-wrapper">
          <div className="roadmap-line"></div>
        </div>

        <div className="items">
          <RoadmapItem
            align={"left"}
            img={"images/church.png"}
            title={"10"}
            pros="%"
            info={`First 10% of minters receive free signed Flinch Poster.`}
          />

          <RoadmapItem
            align={"right"}
            img={"images/doyle_glass.jpg"}
            title={"20"}
            pros="%"
            info={`Airdrop 10 NFTs to random holders.`}
          />

          <RoadmapItem
            align={"left"}
            img={"images/ED.png"}
            title={"40"}
            pros="%"
            info={`2 billboards in major cities will be rented to promote Flinch. Holders vote on where.`}
          />

          <RoadmapItem
            align={"right"}
            img={"images/fire.png"}
            title={"60"}
            pros="%"
            info={`Host IRL Premieres and afterparties of Flinch in NYC and LA for NFT holders. Exclusive virtual stream for any holders who can't attend.`}
          />

          <RoadmapItem
            align={"left"}
            img={"images/fish.png"}
            title={"80"}
            pros="%"
            info={`
            Establish three funds. One for marketing, one for development, one for buying back the least expensive Flinch  NFTs. Each fund will be allocated 5% from profits.
            `}
          />

          <RoadmapItem
            align={"right"}
            img={"images/gloria.png"}
            title={"100"}
            pros="%"
            info={`
            Begin making the second film in the franchise. We will establish the governance work flow and hire community members for specific roles in the production.`}
          />

          <RoadmapItem
            align={"left"}
            img={"images/neonjesus.png"}
            title={"Post Launch"}
            pros=""
            info={`
            How epic a crime franchise can we build? The metaverse is the limit. Our community will grow strong. Our franchise will play IRL and in virtual cinemas in the metaverse. Our IP will be exploited by the community for the community.`}
          />
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Roadmap;

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  position: relative;

  background-color: #191919;

  overflow: hidden;

  border-bottom: 2px solid #eaa721;

  padding: 20px;

  .header {
    position: relative;
    text-align: center;
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2rem;
    color: #eaa721;
    padding-bottom: 30px;
    z-index: 1;
  }
  .line-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;

    //
    @media only screen and (max-width: 810px) {
      width: 500px;
      margin: 0 auto;
    }
    @media only screen and (max-width: 580px) {
      width: 100%;
    }
    //
  }
  .roadmap-line {
    width: 5px;
    border-radius: 20px;
    background-color: #eaa721;

    height: 100%;

    //
    height: 5050px;

    //
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    //
    @media only screen and (max-width: 810px) {
      left: 91px;
    }
    @media only screen and (max-width: 580px) {
      left: 130px;
    }
    //
  }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
`;
