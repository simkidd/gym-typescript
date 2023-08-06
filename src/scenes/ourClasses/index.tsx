import { ClassType, SelectedPage } from '@/shared/types'
import Image1 from '@/assets/images/image1.png'
import Image2 from '@/assets/images/image2.png'
import Image3 from '@/assets/images/image3.png'
import Image4 from '@/assets/images/image4.png'
import Image5 from '@/assets/images/image5.png'
import Image6 from '@/assets/images/image6.png'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from './Class'

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa sunt quisquam voluptates assumenda architecto quaerat vel beatae dicta repellat?",
        image: Image1
    },
    {
        name: "Ab Core Classes",
        image: Image2
    },
    {
        name: "Yoga Classes",
        image: Image3
    },
    {
        name: "Adventure Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa sunt quisquam voluptates assumenda architecto quaerat vel beatae dicta repellat?",
        image: Image4
    },
    {
        name: "Fitness Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa sunt quisquam voluptates assumenda architecto quaerat vel beatae dicta repellat?",
        image: Image5
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora culpa sunt quisquam voluptates assumenda architecto quaerat vel beatae dicta repellat?",
        image: Image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id='ourclasses' className='w-full bg-primary-100 py-40'>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className='mx-auto w-5/6'
                    initial='hidden'
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'>Fringilla a sed at suspendisse ut enim volutpat. Rhone Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fugiat vel tempora vitae quidem quo qui, rerum iusto aliquid porro?</p>
                    </div>
                </motion.div>
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item: ClassType, i) => (
                            <Class
                                key={`${item.name}-${i}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses