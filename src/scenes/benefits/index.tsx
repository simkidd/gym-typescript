import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/20/solid'
import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './Benefit'

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
                <div className='md:my-5 md:w-3/5 '>
                    <HText>
                        MORE THAN JUST A GYM.
                    </HText>
                    <p className='my-5 text-sm'>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
                </div>

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
            </motion.div>
        </section>
    )
}

export default Benefits