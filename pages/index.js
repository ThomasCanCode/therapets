import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Accordion from 'react-bootstrap/Accordion';
import React, { Component, useState, useEffect } from "react";
import Slider from "react-slick";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import banner from '/static/images/banner.jpg'
import team_1 from '/static/images/Koko.jpg'
import team_2 from '/static/images/VanGoDoodle.jpg'
import team_3 from '/static/images/Zoya.jpg'
import team_4 from '/static/images/Tashie.jpg'
import team_5 from '/static/images/NFTDudette.jpg'
import team_6 from '/static/images/thomas.jpg'
import collections_1 from '/static/images/deer.jpg'
import collections_2 from '/static/images/collections_2.jpg'
import lore_1 from '/static/images/lore_1.jpg'
import lore_2 from '/static/images/lore_2.jpg'
import lore_3 from '/static/images/lore_3.jpg'
import lore_4 from '/static/images/lore_4.jpg'
import lore_5 from '/static/images/lore_5.jpg'
import lore_7 from '/static/images/lore_7.jpg'
import logo from '/static/images/logo.png'
import roadmap from '/static/images/roadmap.jpg'

const discord = "https://discord.gg/xAAKwg9R6h";
const twitter = "https://twitter.com/therapetsnft";
const medium = "https://medium.com/@Therapets";

export function toggleBurger(){
  document.getElementById('burgerContainer').classList.toggle('change') 
  document.getElementById('mobile_menu').classList.toggle('change') 
}

export function BurgerButton(){
  return (
    <div id='burgerContainer' className={styles.burgerContainer+" burger_opener"}  onClick={(e) => toggleBurger()}><div></div><div></div><div></div></div>
  )
}

export function Menu(){
  return (
    <ul>
      <li><a className={styles.animated_anchor} href="#about">about</a></li>
      <li><a className={styles.animated_anchor} href="#mission">mission</a></li>
      <li><a className={styles.animated_anchor} href="#team">team</a></li>
      <li><a className={styles.animated_anchor} href="#faq">faq</a></li>
      {/* <li><Link className={styles.animated_anchor} href="/mint">Mint</Link></li> */}
    </ul>
  )
}
export function Socials(){
  return (
    <>
    <a href={discord} target="_blank" rel="noreferrer" className={styles.menuLinks+" "+styles.animated_anchor}>discord</a>
    <a href={twitter} target="_blank" rel="noreferrer" className={styles.menuLinks+" "+styles.animated_anchor}>twitter</a>
    </>
  )
}


export default function Home() {
  return (
    <div className={styles.container}>
      
      <header className={styles.header}>
        <div className="js_scroll scrolled slide-left">
          <div className={styles.top_logo}><Image priority={true} alt="logo" src={logo}/></div>
          <Menu/>
        </div>

        <div className="js_scroll scrolled slide-right">
          <Socials/>
          <BurgerButton/>
          </div>
      </header>


      <div id="mobile_menu" className={styles.mobile_menu}>
        <Menu/>
        <Socials/>
      </div>
      <div className={styles.banner}>
        <Image  alt="logo" src={banner} priority={true}/>
      </div>
      
      <div className={styles.banner+" "+"js_scroll slide-down"}>
          <h1>TheraPets</h1>
          <h5>Trust your animal instincts</h5>
      </div>

      {/* <span className={"js_scroll slide-down"}><a href="#" className={styles.menuLinks+" "+styles.animated_anchor}>mint nft</a></span> */}
      
      <div className={styles.about}>
        <h1 className={"js_scroll slide-down"}>Welcome To TheraPets</h1>
        <p className={"js_scroll slide-left"}>Therapets is an NFT brand marrying emotive art with thought-provoking lore and mental-health themes.</p>
        <p className={"js_scroll slide-right"}>The Therapets NFT collection has 2222 unique NFTs, created from 12 hand-drawn layers and numerous traits.  Each piece brings together a human figure with their Therapet - the animal  who guides them through the forest of their mind.</p>
        <p className={"js_scroll slide-down"}>Therapets has been created by an aligned team who are passionate about bringing mental health awareness and support into the NFT community and beyond.</p>
        <p className={"js_scroll slide-down"}><i>Trust your animal instincts.</i></p>
      </div>

      <div className={styles.pink_full_width}>
        <div id='about' className={styles.lore+" "+styles.full_width}>
          <h1 className={"js_scroll slide-down"}>lore</h1>
          <h5 className={"js_scroll slide-down"}>The Therapets Universe</h5>
          <p className={"js_scroll slide-left"}>Our minds are magical forests — expansive nature wonderlands full of new discoveries at every twist and turn. There are tall trees,  inspirational and enlightening; soft open glades which are welcoming and warming, yet there is also tangled undergrowth - dark and daunting.</p> 
          <p className={"js_scroll slide-right"}>They say we must embrace our forests for all that they are, but there are times when this becomes too hard — when the thickets are intimidating, the noises induce anxiety and the dark blanket of nightfall pushes fear into our hearts.</p>
          <p className={"js_scroll slide-down"}>So what do we do when the forest we live in is too much — when it becomes too dark to be enjoyable, too confusing to be a place of peace?</p>
          <p className={"js_scroll slide-left"}>We seek out support.</p>
          <p className={"js_scroll slide-right"}>Here are the Therapets that support you through your journey. They remind you of your own intrinsic power, provide protection against unfortunate thoughts, and lead the way when your path needs illuminating.</p>
          <p className={"js_scroll slide-down"}><i>Therapets are the strength that you had within you all along.</i></p>
          <span className="js_scroll slide-down">
            <a href={medium} target="_blank" rel="noreferrer" className={styles.menuLinks+" "+styles.animated_anchor+" "+styles.discover_biglink}>discover the TheraPets Universe here</a>
          
          </span>
        </div>
      </div>

      <div className={styles.pink_full_width}><div className={styles.full_width+" "+styles.assets_carousel_container}><AssetsCarousel/></div></div>

      <div className={styles.collections+" "+styles.full_width}>
        <div>
          <h1 className={"js_scroll slide-down"}>The Collections</h1>
          <div className={styles.collections_images_container}>
            <div>
              <Image className={"js_scroll slide-left"} alt="Collections" src={collections_1} />
              <h5 className={"js_scroll slide-left"}>forest friends: genesis</h5>
              <p className={"js_scroll slide-down"}>The inaugural project of Therapets, the Affirmations Deck is a collaboration between Therapets and 10 diverse 1/1&nbsp;artists.<br/><br/>The artists featured in this collection are Mat Miller, Aoife O’Dwyer, Freddie Fella, Riska, Rik Lee, AmyLili, Dhilkrishna-DK, Chelsy Escalona, Arief Putra, and Rensi&nbsp;Ardinta.<br/><br/>With each artist creating an affirmation card based on the Therapets lore, the cards are a representation of the Therapets universe in the artists’ own style. There are 12 editions of 10 cards, and each card also comes with a free Therapets NFT! So you have two NFTs for only 0.08ETH. </p>
            </div>
            <div>
              <Image className={"js_scroll slide-right"} alt="Collections" src={collections_2} />
              <h5 className={"js_scroll slide-right"}>TheraPets nft</h5>
              <p className={"js_scroll slide-down"}>Therapets NFT are an ode to mental growth, emotional support, and the power of art as a therapeutic practice.<br/><br/>Layered with lore and intention, the mystical being is guided by its’ Therapet. The Therapet guides you through the dark forest, urging you to trust your animal instincts and take your true path.<br/><br/>As a holder of a Therapet NFT you have access to the Forest - a hub for mental wellness and growth through self-directed activities. </p>
            </div>

            <span className="js_scroll slide-down">
              <a href="https://opensea.io/collection/therapets-forest-friends-genesis-collection" target="_blank" rel="noreferrer" className={styles.menuLinks+" "+styles.animated_anchor}>opensea</a>
            </span>
            
          </div>
        </div>
      </div>

      <div id='mission' className={styles.mission_container+" "+styles.full_width}>
        <div>
          <h1 className={"js_scroll slide-down"}>The Therapets Mission</h1>
          <h4 className={"js_scroll slide-down"}>We don’t have a roadmap- we have a mission.</h4>
          <p className={"js_scroll slide-down"}>We are here to help you help yourself, provide a safe space for honest, open conversations, connection, mental wellness, and of course - beautiful artwork. We are also passionate about mental health in the physical realm, and so our mission includes steps to build the Therapets community, and also donations to mental health charities worldwide.</p>
          <p className={"js_scroll slide-down"}>As a holder of a Therapets NFT you have access to a heap of  benefits, both digital and physical.</p>
          <div className={styles.roadmap_container}>
            <Image alt='Roadmap' src={roadmap} /> 
          </div>
          <div className={styles.roadmap_texts}>
            <span>
              <h4>Mindfulness Mountains</h4>
              <p>Therapets is on a mission to not only promote mental wellness, but facilitate good mental health. We will continue to hold our mental health spaces and workshops, and also introduce our self-guided wellness courses. These will be available at 25% fully minted and/or 4 weeks post NFT reveal.</p>
            </span>
            <span>
              <h4>Philanthropic Forest</h4>
              <p>We want to give back, and donate to organisations dedicated to supporting good mental health.  These organisations will be chosen by our community members.<br/>Additionally, we will offer small grants to those within the community.</p>
            </span>
            <span>
              <h4>Community Cove</h4>
              <p>Our community is at the heart of everything that we do! You are Therapets, and so we will continue to nurture and love our Therapets family and host community meets-ups IRL.</p>
            </span>
            <span>
              <h4>Social Shores</h4>
              <p>We love artists, creators, founders and innovators in Web3, and will continue to collaborate with projects aligned with our mission and purpose.</p>
            </span>
            <span>
              <h4>Licensing Lake</h4>
              <p>Therapets NFT owners will have a commercial licensing agreement over the use of their own NFT.</p>
            </span>
          </div>

        </div>
      </div>

      <div className={styles.pink_full_width}>
      <div id='team' className={styles.team+" "+styles.full_width}>
        <h1 className={"js_scroll slide-down"}>Meet the team</h1>
        

          <div className={styles.hideOnDesktop}>
            <div className={styles.mobile_team_container}>
              <TeamCarousel/>
            </div>
          </div>

          <div className={styles.hideOnMobile}>
            <div className={styles.team_container}>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/KoKo_NFT/media"}>
                <Image className={"js_scroll slide-down team_images"} alt="Founder" src={team_1} />
                <h3 className={"js_scroll slide-down"}>Koko</h3>
                <h5 className={"js_scroll slide-down"}>founder</h5>
                <p className={"js_scroll slide-down"}>By day Koko (aka Keisha) is a Person-Centered Therapist providing counselling services from a person centred fusing a mixture of ACT, Narrative Therapy, and expressive therapies.By night, she is an NFT creative, working to bring wellness to Web3.Koko’s journey in Web3 has been fast and furious, and she has connected with many wonderful founders, communities, and projects. Therapets marries her passion for mental health with her love for artistic expression, and Koko cannot wait to bring this to Web3.</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/VanGoDoodle"}>
                <Image className={"js_scroll slide-down team_images"} alt="Artist" src={team_2} />
                <h3 className={"js_scroll slide-down"}>VanGoDoodle</h3>
                <h5 className={"js_scroll slide-down"}>artist</h5>
                <p className={"js_scroll slide-down"}>Vanora (VanGoDoodle) is an illustrator, musician and former reluctant architect from Mumbai, India. She is a passionate mental health advocate and focuses on raising awareness through magical, purple art! <br/><br/>Her art uses the language of illustrated storytelling to explore interpersonal relationships and emotional issues. She uses everyday experiences as a starting point, and puts all of that into a piece of art that tells a story- with almost obsessive attention to detail! Van believes in starting powerful conversations and facilitating change one artwork at a time!</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/Llemon_milk"}>
                <Image className={"js_scroll slide-down team_images"} alt="Illustrator" src={team_3} />
                <h3 className={"js_scroll slide-down"}>Zoya</h3>
                <h5 className={"js_scroll slide-down"}>illustrator</h5>
                <p className={"js_scroll slide-down"}>They are a self-described geek, who spent her childhood playing video games, reading comics and manga - and this influenced her to start illustrating and creating her own artwork. Her style is very illustrative, with a strong focus on the details. She has always drawn inspiration from what she loves and is particularly fascinated by Japanese illustrations. Or illustrator loves adding her touch of pink and purple wherever she can, and her goal is to make art that is consistent and truly her own.</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/NFTashie"}>
                <Image className={"js_scroll slide-down team_images"} alt="Marketing" src={team_4} />
                <h3 className={"js_scroll slide-down"}>Tashie</h3>
                <h5 className={"js_scroll slide-down"}>marketing</h5>
                <p className={"js_scroll slide-down"}>Tashie is a person with a life-long love and passion for mental wellness, and so she  was instantly drawn to Therapets. Tashie has always had a strong drive for mental health advocacy, living her life through conscious wellness with a hint of mysticism. As a business owner, Tashie has run her own businesses for many years, from start-up stages as an individual social-media based business to owning her own physical store. Tashie has also helped many other small businesses start up and grow to success.Most recently, Tashie has transitioned to Web3 full time, inspired by the boundless opportunities here.As a business owner with a history as a marketing manager for a well-known Australian company, Tashie has had success growing companies and their online presence. </p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/yourNFTdudette"}>
                <Image className={"js_scroll slide-down team_images"} alt="Project advisor" src={team_5} />
                <h3 className={"js_scroll slide-down"}>nft Dudette</h3>
                <h5 className={"js_scroll slide-down"}>project advisor</h5>
                <p className={"js_scroll slide-down"}>NFTDudette is an NFT enthusiast, creator, and NFT coach. She is the founder of theNFT Zen Den, a project focused on bringing mindfulness and wellness to communities in the web3 space. She is a significant member of the Magic MushroomClubhouse team as well as the CWO (Chief wellness officer) for WGMI Studios, MMC, and NFT Academy. With a strong background in networking and leadership she has built many notable relationships in the NFT space.</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://www.thomasdev.io/"}>
                <Image className={"js_scroll slide-down team_images"} alt="Developer" src={team_6} />
                <h3 className={"js_scroll slide-down"}>Thomas</h3>
                <h5 className={"js_scroll slide-down"}>dev</h5>
                <p className={"js_scroll slide-down"}>Thomas is our full-stack developer, from the website to the smart contract & everything in between, he’s got it covered!Previously working as a web developer for 7 years, he has recently migrated towardsthe blockchain.He is a conscientious and spiritual person with many passions outside of the digital realm, including enjoying the outdoors and motorised vehicles.As a developer, Thomas enjoys turning dreams and ideas into realities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='faq' className={styles.faq_container}>
        <h1 className={"js_scroll slide-down"}>Frequently asked questions</h1>
        <Accordion className={styles.accordion_class}>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="js_scroll slide-right">What is an nft ?</Accordion.Header>
            <Accordion.Body className={styles.accordion_body}>
            An NFT is a unique cryptographic token which exists on a blockchain and cannot be replicated. Therapets NFTS exist on the Ethereum blockchain.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="js_scroll slide-left">Where can i purchase TheraPets nfts?</Accordion.Header>
            <Accordion.Body className={styles.accordion_body}>
            When minting goes live, you will be able to mint a Therapets NFT via this website.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="js_scroll slide-right">How do i mint an nft?</Accordion.Header>
            <Accordion.Body className={styles.accordion_body}>
            First, set up your NFT wallet. Then, connect your wallet to the Therapets site to mint an NFT.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="js_scroll slide-left">Is minting the only way to own a TheraPets nft?</Accordion.Header>
            <Accordion.Body className={styles.accordion_body}>
            If you do not mint an NFT you can pick one up on the secondary market (OpenSea).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="js_scroll slide-right">Is there a presale list?</Accordion.Header>
            <Accordion.Body className={styles.accordion_body}>
            Yes! There will be allowlist spots for community members. There are many ways to get allowlist spots from the Therapets community and our collaborating communities. Follow us on Twitter and join Discord to find out more. 
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header className="js_scroll slide-left">How much are TheraPets nfts?</Accordion.Header>
            <Accordion.Body className={styles.accordion_body}>
            TBA.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header className="js_scroll slide-right">What is the utility of TheraPets nfts?</Accordion.Header>
            <Accordion.Body className={styles.accordion_body}>
            Utility includes access to self-guided wellness courses, discounted services and perks, licensing over your NFT, and more. Check out our Mission to know more. 
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className={styles.pink_full_width}>
        <footer className={styles.footer+" "+styles.full_width}>
          <div>
            <Image
              alt="logo"
              src="/static/images/logo.png"
              width={65}
              height={65}
            />
            <Menu/>
          </div>

          <div>
            <Socials/>
          </div>
        </footer>
        </div>
      
      <script defer data-domain="therapets.io" src="https://plausible.thomasdev.io/js/plausible.js"></script>

      <Script
        src="/static/inline.js" // consent mangagement
        onLoad={() => {
          // If loaded successfully, then you can load other scripts in sequence
        }}
      />
    </div>
  )
}



export class TeamCarousel extends Component {
  render() {
    const settings = {
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
               <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/KoKo_NFT/media"}>
                <Image className={"js_scroll slide-down team_images"} alt="Founder" src={team_1} />
                <h3 className={"js_scroll slide-down"}>Koko</h3>
                <h5 className={"js_scroll slide-down"}>founder</h5>
                <p className={"js_scroll slide-down"}>By day Koko (aka Keisha) is a Person-Centered Therapist providing counselling services from a person centred fusing a mixture of ACT, Narrative Therapy, and expressive therapies.By night, she is an NFT creative, working to bring wellness to Web3.Koko’s journey in Web3 has been fast and furious, and she has connected with many wonderful founders, communities, and projects. Therapets marries her passion for mental health with her love for artistic expression, and Koko cannot wait to bring this to Web3.</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/VanGoDoodle"}>
                <Image className={"js_scroll slide-down team_images"} alt="Artist" src={team_2} />
                <h3 className={"js_scroll slide-down"}>VanGoDoodle</h3>
                <h5 className={"js_scroll slide-down"}>artist</h5>
                <p className={"js_scroll slide-down"}>Vanora (VanGoDoodle) is an illustrator, musician and former reluctant architect from Mumbai, India. She is a passionate mental health advocate and focuses on raising awareness through magical, purple art! <br/><br/>Her art uses the language of illustrated storytelling to explore interpersonal relationships and emotional issues. She uses everyday experiences as a starting point, and puts all of that into a piece of art that tells a story- with almost obsessive attention to detail! Van believes in starting powerful conversations and facilitating change one artwork at a time!</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/Llemon_milk"}>
                <Image className={"js_scroll slide-down team_images"} alt="Illustrator" src={team_3} />
                <h3 className={"js_scroll slide-down"}>Zoya</h3>
                <h5 className={"js_scroll slide-down"}>illustrator</h5>
                <p className={"js_scroll slide-down"}>They are a self-described geek, who spent her childhood playing video games, reading comics and manga - and this influenced her to start illustrating and creating her own artwork. Her style is very illustrative, with a strong focus on the details. She has always drawn inspiration from what she loves and is particularly fascinated by Japanese illustrations. Or illustrator loves adding her touch of pink and purple wherever she can, and her goal is to make art that is consistent and truly her own.</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/NFTashie"}>
                <Image className={"js_scroll slide-down team_images"} alt="Marketing" src={team_4} />
                <h3 className={"js_scroll slide-down"}>Tashie</h3>
                <h5 className={"js_scroll slide-down"}>marketing</h5>
                <p className={"js_scroll slide-down"}>Tashie is a person with a life-long love and passion for mental wellness, and so she  was instantly drawn to Therapets. Tashie has always had a strong drive for mental health advocacy, living her life through conscious wellness with a hint of mysticism. As a business owner, Tashie has run her own businesses for many years, from start-up stages as an individual social-media based business to owning her own physical store. Tashie has also helped many other small businesses start up and grow to success.Most recently, Tashie has transitioned to Web3 full time, inspired by the boundless opportunities here.As a business owner with a history as a marketing manager for a well-known Australian company, Tashie has had success growing companies and their online presence. </p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://twitter.com/yourNFTdudette"}>
                <Image className={"js_scroll slide-down team_images"} alt="Project advisor" src={team_5} />
                <h3 className={"js_scroll slide-down"}>nft Dudette</h3>
                <h5 className={"js_scroll slide-down"}>project advisor</h5>
                <p className={"js_scroll slide-down"}>NFTDudette is an NFT enthusiast, creator, and NFT coach. She is the founder of theNFT Zen Den, a project focused on bringing mindfulness and wellness to communities in the web3 space. She is a significant member of the Magic MushroomClubhouse team as well as the CWO (Chief wellness officer) for WGMI Studios, MMC, and NFT Academy. With a strong background in networking and leadership she has built many notable relationships in the NFT space.</p>
              </div>
              <div className={styles.cursor} onClick={() => window.location.href = "https://www.thomasdev.io/"}>
                <Image className={"js_scroll slide-down team_images"} alt="Developer" src={team_6} />
                <h3 className={"js_scroll slide-down"}>Thomas</h3>
                <h5 className={"js_scroll slide-down"}>dev</h5>
                <p className={"js_scroll slide-down"}>Thomas is our full-stack developer, from the website to the smart contract & everything in between, he’s got it covered! Previously working as a web developer for 7 years, he has recently migrated towards the blockchain. He is a conscientious and spiritual person with many passions outside of the digital realm, including enjoying the outdoors and motorised vehicles. As a developer, Thomas enjoys turning dreams and ideas into realities.</p>
              </div>
        </Slider>
      </div>
    );
  }
}

export class AssetsCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <Slider {...settings}>
          <div><Image loading="eager" alt="Lore Therapets Types" src={lore_1} /></div>
          <div><Image loading="eager" alt="Lore Therapets Types" src={lore_2} /></div>
          <div><Image loading="eager" alt="Lore Therapets Types" src={lore_3} /></div>
          <div><Image loading="eager" alt="Lore Therapets Types" src={lore_4} /></div>
          <div><Image loading="eager" alt="Lore Therapets Types" src={lore_5} /></div>
          <div><Image loading="eager" alt="Lore Therapets Types" src={lore_7} /></div>
        </Slider>
      </div>
    );
  }
}