import CallList from '@/components/CallList'
import React from 'react'

const Previous = () => {
  return (
    <div className='flex size-full flex-col gap-10'>
      <h1 className='text-3xl font-bold'>Ended Meetings</h1>
      <CallList type="ended" />
    </div>
  )
}

export default Previous;
