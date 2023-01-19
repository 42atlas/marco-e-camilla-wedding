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
      <div className='max-w-xl mx-auto py-16 px-4'>
        <form className='py-4 space-y-2' onSubmit={handleSubmit}>
          <div className='flex flex-col items-start justify-center '>
            <label htmlFor='name' className=' sm:text-md  py-3'>
              {t('guest')}
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              name='name'
              id='name'
              className='shadow-md focus:ring-pink-300 focus:border-pink-300 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder={t('name')}
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <label htmlFor='name' className='sm:text-md  py-3'>
              {t('guest2')}
            </label>
            <input
              value={nametwo}
              onChange={(e) => setNameTwo(e.target.value)}
              type='text'
              name='secondname'
              id='secondname'
              className='shadow-md focus:ring-pink-300 focus:border-pink-300 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder={t('name')}
            />
          </div>
          <div className='flex flex-col items-start justify-center'>
            <label htmlFor='message' className='sm:text-md  py-3'>
              {t('allergy')}
            </label>
            <textarea
              value={alle}
              onChange={(e) => setAlle(e.target.value)}
              name='allergie'
              id='allergie'
              className='shadow-md focus:ring-pink-300 focus:border-pink-300 block w-full sm:text-md border-gray-300 rounded-md'
              placeholder='...'
            />
          </div>
          <div className='flex flex-col items-end justify-center py-5'>
            <button
              type='submit'
              className='flex items-start justify-start text-start text-sm w-40 rounded-md shadow py-3 px-4 bg-pink-300 text-white hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300'
            >
              {t('confirm')}
            </button>
            <p className='italic text-sm w-32 py-2 text-end'>{t('confirm2')}</p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Home
