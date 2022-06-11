import React from 'react'
import Header from '../../components/Header'
import { getProviders, signIn } from 'next-auth/react'

const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className='mt-40'>
        {Object.values(providers).map((provider) => (
          <div className='flex items-center flex-col' key={provider.name}>
            <img
              className='w-52 object-cover'
              src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
              alt='google-logo'
            />
            <p className='text-sm italic my-10 text-center'>
              This website is created for learning purposes
            </p>
            <button
              className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default signin

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers }
  }
}
