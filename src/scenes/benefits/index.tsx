import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/images/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet, consectetur adip sap et dolor sit amet, consectetur adipiscing elit, sed diam",
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adip sap et dolor sit amet, consectetur adipiscing elit, sed diam",
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet, consectetur adip sap et dolor sit amet, consectetur adipiscing elit, sed diam",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* header */}
                <motion.div
                    className='md:my-5 md:w-3/5'
                    initial='hidden'
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        MORE THAN JUST A GYM.
                    </HText>
                    <p className='my-5 text-sm'>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
                </motion.div>

                {/* benefits */}
                <motion.div
                    className='md:flex items-center justify-between gap-8 mt-5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            title={benefit.title}
                            icon={benefit.icon}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* graphics and description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* graphic */}
                    <img className="mx-auto " src={BenefitsPageGraphic} alt="" />

                    {/* description */}
                    <div>
                        {/* title  */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'></div>
                            <motion.div
                                initial='hidden'
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                    <span className='text-primary-500'>FIT</span>
                                </HText>
                            </motion.div>
                        </div>

                        {/* desc */}
                        <motion.div
                            initial='hidden'
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi modi consequuntur quia consectetur ullam, explicabo, est dolores repudiandae officia maiores sunt mollitia. Odio harum perspiciatis, in exercitationem quas a. Temporibus. <br /><br />
                                consectetur ullam, explicabo, est dolores repudiandae officia maiores sunt mollitia. Odio harum perspiciatis, in exercitationem quas a. maiores sunt mollitia. Odio harum perspiciatis, in exercitationem quas a.
                            </p>
                            <p></p>
                        </motion.div>

                        {/* button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits