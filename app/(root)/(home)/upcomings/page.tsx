import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <div className='flex size-full flex-col gap-10'>
      <h1 className='text-3xl font-bold'>Upcoming Meetings</h1>
      <CallList type="upcoming" />
    </div>
  )
}

export default Upcoming