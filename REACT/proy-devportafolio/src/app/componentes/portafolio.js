"use client"
import React from "react";
import style from "./portafolio.module.css";

function portafolio() {

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.profile}>
                    <figure className={style['profile-img']}>
                        <img src='assets/images/perfil_picture.jpeg'></img>
                    </figure>

                    <div className={style['profile-info']}>
                        <h1 className={style.profile}>Ivone Quispe </h1>
                        <p className={style.profile}> Software Engineer</p>

                        <div className={style['profile-social']}>
                            <a href="https://github.com" target="_blank">
                                <img src="assets/icons/github.svg" alt="github" className={style['profile-social-img']} />
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <img src="assets/icons/twitter.svg" alt="twitter" className={style['profile-social-img']} />
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <img src="assets/icons/linkedin.svg" alt="linkedin" className={style['profile-social-img']} />
                            </a>
                            <a href="https://youtube.com" target="_blank">
                                <img src="assets/icons/youtube.svg" alt="youtube" className={style['profile-social-img']} />
                            </a>
                        </div>

                    </div>

                </div>

                <div className={style.facts}>
                    <div className={style['fact-item']}>
                        <h2>7</h2>
                        <p>Years of work experience</p>

                    </div>

                    <div className={style['fact-item']}>
                        <h2>50+</h2>
                        <p>Completed projects</p>
                    </div>

                    <div className={style['fact-item']}>
                        <h2>20+</h2>
                        <p>Satisfied customers</p>
                    </div>
                </div>


                <div className={style.buttons}>
                    <button className={style['btn-primary']} onclick="download()">
                        <div className={style['btn-content']}>
                            <p>Download CV</p>
                            <img src="assets/icons/download.svg" alt="arrow" className={style['btn-primary-img']} />
                        </div>
                    </button>
                    <a className={style['btn-secondary']} href="mailto:contact@me.com">
                        <div className={style['btn-content']}>
                            <p >Contact me</p>
                        </div>
                    </a>
                </div>

                <div className={style.tabs}>
                    <button className={style['tabs-background-item-active']}>
                        <p className={style['tabs-background-item-text']}>Portafolio</p>
                    </button>
                    <button className={style['tabs-background-item']}>
                        <p className={style['tabs-background-item-text']}>Skills</p>
                    </button>
                </div>

                <div className={style['project-container']}>
                    <div className={style['content-card-img']}>
                        <img className={style.image} src="assets/images/Hero_2.png" />
                        <div className={style['content-card-img-overlay']}></div>
                        <div className={style['content-card-img-detail']}>
                            <p className={style.title}>SmarterTrading411</p>
                            <p className={style.detail}>Landing page of SmarterTrading411 created using WordPress</p>
                            <button className={style.btn}>
                                <img src="assets/icons/link.svg" alt="link"></img>
                            </button>
                        </div>
                    </div>

                    <div className={style['content-card-img']}>
                        <img className={style.image} src="assets/images/issima_page.png" />
                        <div className={style['content-card-img-overlay']}>    
                        </div>
                    </div>

                    <div className={style['content-card-img']}>
                        <img className={style.image} src="assets/images/bussiness_man.png" />
                        <div className={style['content-card-img-overlay']}>    
                        </div>
                    </div>
                    

                    <div className={style['content-card-img']}>
                        <img className={style.image} src="assets/images/pictures_wall.jpeg" />
                        <div className={style['content-card-img-overlay']}>    
                        </div>
                    </div>
                    

                    <div className={style['content-card-img']}>
                        <img className={style.image} src="assets/images/kitchen.jpeg" />
                        <div className={style['content-card-img-overlay']}>    
                        </div>
                    </div>
                    
                    <div className={style['content-card-img']}>
                        <img className={style.image} src="assets/images/mobile_app.png" />
                        <div className={style['content-card-img-overlay']}>    
                        </div>
                    </div>
                    


                </div>


            </div>

        </div>
    );

}
export default portafolio;
