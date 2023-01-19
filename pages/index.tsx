import type { NextPage } from 'next'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [nametwo, setNameTwo] = useState('')
  const [alle, setAlle] = useState('')
  const { t } = useTranslation('common')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = {
      name,
      nametwo,
      alle,
    }

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    const content = await response.json()

    console.log(content)

    setName('')
    setNameTwo('')
    setAlle('')
  }
  return (
    <main className='bg-gray-100 min-h-screen'>
      <nav className='w-screen flex justify-end '>
        <ul className='flex justify-end items-center space-x-4 p-4'>
          <li>
            <Link href='/it'>
              <Image src='/images/it.png' width={30} height={30} alt='IT' />
            </Link>
          </li>
          <li>
            <Link href='/en'>
              <Image src='/images/en.png' width={30} height={30} alt='EN' />
            </Link>
          </li>
        </ul>
      </nav>
      <div className='max-w-5xl mx-auto py-16'>
        <form className='py-4 space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col items-center justify-center'>
            <label htmlFor='name' className=' sm:text-md  py-3'>
              {t('invitato')}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              name='name'
              id='name'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md'
              placeholder='Nome e Cognome'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <label htmlFor='name' className='sm:text-md  py-3'>
              {' '}
              +1 EVENTUALE{' '}
            </label>
            <input
              value={nametwo}
              onChange={(e) => setNameTwo(e.target.value)}
              type='text'
              name='secondname'
              id='secondname'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md'
              placeholder='Nome e Cognome'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <label htmlFor='message' className='sm:text-md  py-3'>
              {' '}
              Eventuali allergie o intolleranze?{' '}
            </label>
            <textarea
              value={alle}
              onChange={(e) => setAlle(e.target.value)}
              name='allergie'
              id='allergie'
              className='shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md'
              placeholder='...'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button
              type='submit'
              className='flex items-start justify-start text-sm w-32 rounded-md shadow py-3 px-2 bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Conferma Partecipazione
            </button>
            <p className='italic text-sm w-32 py-2'>
              *Conferma Gradita entro inizio Agosto
            </p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Home
