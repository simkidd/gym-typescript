import Logo from '@/assets/images/Logo.png'

const Footer = () => {
  return (
    <footer className='bg-primary-100 pt-16 pb-4'>
        <div className='justify-center mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor deserunt aperiam enim recusandae error! Blanditiis ipsum illum obcaecati iure perferendis.
                </p>
                <p>&copy; Evogym All Rights Reserved</p>
            </div>

            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Massa orci senectus</p>
                <p className='my-5'>Et gravia id et etiam</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className='font-bold'>Contact Us</h4>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusamus!</p>
                <p className='my-5'>(234)012-735-3564</p>
            </div>
        </div>
        <div className='mx-auto w-5/6 mt-16'>Designed by <a className='text-primary-500' href="">John Mason</a></div>
    </footer>
  )
}

export default Footer