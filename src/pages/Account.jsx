import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <div>
      <div className='w-full text-white '>
      <img
        className=" w-full h-[400px] object-cover"
        src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt='netflix'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>

        </div>
      </div>
      </div>
      <SavedShows />
    </div>
  )
}

export default Account
