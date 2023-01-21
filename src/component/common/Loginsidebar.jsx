const LoginSideBAr = ({bgimage}) => {
    return ( 
        	<div className='h-screen hidden p-5 w-16 md:block lg:block fixed md:w-5/12 sidebar-color1'>
						<div className='container sticky top-0 py-8'>
							<div className='flex pl-6 items-center min-h-screen '>
								<div className='pl-12'>
									<h1 className='text-4xl mb-6 fonts font-medium text-black'>
										Let's get started
									</h1>
									<p className='fonts'>
										You're the real MVP
									</p>
									<div className='py-6'>
										<img
											src={bgimage}
											alt=''
											className='h-52 my-14'
										/>
									</div>
									<p className='h-32 text-sm font-200 fonts'>
										Already have an account?{' '}
										<a href='/login'>Login</a>
									</p>
									<p className='fonts'>
										Need help? <br /> Contact us on
										0800-872-912
									</p>
								</div>
							</div>
						</div>
					</div>
     );
}
 
export default LoginSideBAr;