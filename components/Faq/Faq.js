// Styled Components
import styled from "styled-components";

// Components
import FaqItem from "./FaqItem/FaqItem";
import Nav from "../Global/Nav/Nav";
import Footer from "../Global/Footer/Footer";

const Faq = () => {
  return (
    <Wrapper>
      <p className="header">Faq</p>
      <FaqItem
        header={"What is Flinch?"}
        info={`Flinch is the world's first movie franchise on the blockchain. In the future we will look back and remember the days when fans had no participation or governance over the art they love. Movie franchises grow into epic stories with a variety of characters. They allow for spinoffs, games, merchandise and other ancillary works. Now we will build a franchise as a community.`}
      />
      <FaqItem
        header={"How do I purchase a Flinch NFT?"}
        info={`You may mint a Flinch NFT on our NFT page. We have two mints, one for Posters, one for Characters. There are 3 poster skews with 3,333 of each and 5,000 characters. All NFTs reward holders via the Cinema. Poster NFT holders have first access to mint a Character. Characther holders have governance over the franchise, access to in person movie premieres, premiere parties and free merch.#As subsequent films in the franchise release, new poster NFTs will airdrop to holders.
        `}
      />
      <FaqItem
        header={"How are Flinch NFTs distributed?"}
        info={`Fair distribution. There are no bonding curves here. Buying a poster will cost .04ETH + Gas. Buying a Character will cost .08ETH + Gas. `}
      />
      <FaqItem
        header={"What are the benefits of owning a Flinch NFT?"}
        info={`
        Owning a Flinch NFT gives you access to and benefits from a movie franchise in both the digital and real world.#We are building a large movie studio platform for lots more films. This platform will have a native token. Flinch NFTs will be able to be staked to earn this coin.#Films are a collaborative art form. Our community must collaborate to make the best franchise we can. The metaverse is the limit.#NFT holders are rewarded by the Cinema.`}
      />

      <FaqItem
        header={"What will happen to secondary market royalties?"}
        info={`Royalties will be set to 10% for secondary sales`}
      />

      <FaqItem
        header={"What is the Cinema?"}
        info={`We built a Cinema that streams our films to our NFT holders for free or for non NFT holders who pay in crypto. The Cinema rewards our NFT holders. Imagine a day when we can sit in a virtual Cinema, in our avatar, with ten friends from around the world, or one million random people, to watch a film. This is just the beginning.#When you watch Flinch in the Cinema you are added to the whitelist. Post-mint all Cinema visitors will be eligible for random airdrops of Poster and Character NFTs and much more. Going to the movies is the gift that keeps giving.
#Currently Matic is the best payment solution for the cinema. We're working on other chain and coin payment solutions to broaden our reach.#If you pay to watch, you will be able to watch any time your wallet is connected to the Cinema.        `}
      />
    </Wrapper>
  );
};

export default Faq;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 0 20px;
  padding-top: 100px;

  background-color: #191919;
  .header {
    font-family: interstate, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 2rem;
    color: #eaa721;

    text-align: left;
  }
`;
