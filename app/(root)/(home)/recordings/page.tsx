import CallList from '@/components/CallList'
import React from 'react'

const Recording = () => {
  return (
    <div className='flex size-full flex-col gap-10'>
      <h1 className='text-3xl font-bold'>Recordings</h1>
      <CallList type="recordings" />
    </div>
  )
}

export default Recording