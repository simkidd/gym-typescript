// import React from 'react'
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import HomePageText from '@/assets/images/HomePageText.png'
import HomePageGraphic from '@/assets/images/HomePageGraphic.png'
import SponsorRedBull from '@/assets/images/SponsorRedBull.png'
import SponsorForbes from '@/assets/images/SponsorForbes.png'
import SponsorFortune from '@/assets/images/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* image and main header */}
            <motion.div
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
            >
                {/* main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* headings */}
                    <motion.div
                        className="md:-mt-20"
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">Unrivated Gym. Unparalled Training Fitness Classes. World Class Studios to get the boy shapes that you dream of... Get your dream body now.</p>
                    </motion.div>

                    {/* actions */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="home-page-graphic" />
                </div>
            </motion.div>

            {/* sponsors */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={SponsorRedBull} alt="" />
                            <img src={SponsorForbes} alt="" />
                            <img src={SponsorFortune} alt="" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home