import type { NextPage } from 'next'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Fish from '../components/Fish'
import buttone_ita from '../public/images/button_ita.png'
import buttone_eng from '../public/images/button_eng.png'
import style from '../styles/Parallax.module.css'
import ImageSlider from '../components/ImageSlider'
import ImagePopup from '../components/RandomImage'

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const [nametwo, setNameTwo] = useState('')
  const [alle, setAlle] = useState('')
  const [transport, setTransport] = useState('')
  const { t } = useTranslation('common')
  const [language, setLanguage] = useState('it')
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = {
      name,
      nametwo,
      alle,
      transport,
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
    setTransport('')
  }
  return (
    <main className='' id='doc'>
      <ImagePopup src='/images/cuori.png' />
      <div className='fixed w-full z-50'>
        <nav className='w-full flex justify-end sticky top-0 bg-transparent '>
          <ul className='flex justify-end items-center space-x-4 p-4'>
            <li>
              <Link href='/it' onClick={() => setLanguage('it')}>
                <Image src='/images/it.png' width={30} height={30} alt='IT' />
              </Link>
            </li>
            <li>
              <Link href='/en' onClick={() => setLanguage('en')}>
                <Image src='/images/en.png' width={30} height={30} alt='EN' />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='w-full h-full land:hidden'>
        <Fish />
      </div>
      <section className='h-screen w-full' id='section_1'>
        <div className={style.parallax_home}>
          <div className='w-full h-full flex flex-col justify-center items-center z-10'>
            <h1 className='text-7xl md:text-9xl font-bold text-center font-[Tangerine] text-white'>
              Marco & Camilla
            </h1>
          </div>
        </div>
      </section>
      <section className='h-screen w-full text-[#6D8776] ' id='section_2'>
        <div className='w-full h-full flex flex-col justify-center items-center z-10'>
          <h2 className='text-5xl md:text-8xl font-bold text-center font-[Tangerine]'>
            {t('sposano')}
          </h2>
          <br />
          <h2 className='land:text-2xl text-4xl md:text-8xl font-light font-[Lato] text-center py-6'>
            {t('sabato')}
          </h2>
          <h2 className='land:text-2xl text-4xl md:text-8xl font-light font-[Lato] text-center'>
            {t('settembre')}
          </h2>
        </div>
      </section>
      <section className='h-screen w-full' id='section_3'>
        <div className={style.parallax_3}></div>
      </section>
      <section className='h-screen w-full' id='section_4'>
        <div className='w-full h-full flex flex-col items-center '>
          <h3 className='text-5xl font-bold text-[#ADA08F] font-[Tangerine] p-8 land:p-3 md:mt-10 land:mt-2'>
            {t('itinerario')}
          </h3>
          <div className='flex flex-col h-[60%] items-center justify-center px-5 z-50'>
            <table className=' self-center land:mt-8'>
              <tbody>
                <tr className='my-4 '>
                  <td className='p-4 font-[Lato] text-[#6D8776] font-bold pr-5 md:pr-20 pb-16'>
                    {t('ore15')}
                  </td>
                  <td className='p-4 flex flex-col items-start'>
                    <a
                      href='https://goo.gl/maps/4WgTXVDMrXwJ6d4C8'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <p className='font-[Lato] text-xs text-[#C5B8B8] font-bold'>
                        LINK GOOGLE MAPS
                      </p>
                    </a>
                    <p className='font-[Lato] text-xl md:text-4xl text-[#6D8776] font-bold'>
                      Pieve San Leolino
                    </p>
                    <p className='font-[Tangerine] text-2xl md:text-4xl text-[#2B1105] font-bold pt-1'>
                      Località San Leolino 1 Panzano in Chianti(FI)
                    </p>
                    <p className='font-[Lato] text-xs md:text-sm text-[#2B1105] font-normal pt-2'>
                      {t('cerimonia')}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td className='p-4 pt-10 font-[Lato] text-[#6D8776] font-bold pr-5 md:pr-20 pb-16'>
                    {t('ore17')}
                  </td>
                  <td className='p-4 pt-10 land:pt-0 flex flex-col items-start'>
                    <a
                      href='https://goo.gl/maps/BcJXguoGUadPvCcM8'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <p className='font-[Lato] text-xs text-[#C5B8B8] font-bold'>
                        LINK GOOGLE MAPS
                      </p>
                    </a>
                    <p className='font-[Lato] text-xl md:text-4xl text-[#6D8776] font-bold'>
                      Villa le Corti
                    </p>
                    <p className='font-[Tangerine] text-2xl md:text-4xl text-[#2B1105] font-bold pt-1'>
                      Via Grevigiana 4 San Casciano Val di Pesa
                    </p>
                    <p className='font-[Lato] text-xs md:text-sm text-[#2B1105] font-normal pt-2'>
                      {t('festa')}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className='h-screen w-full ' id='section_5'>
        <div className='w-full h-[60%] md:h-[75%] flex flex-col justify-between items-center bg-[url(/images/villa.jpg)] bg-cover bg-no-repeat bg-bottom'>
          <h1 className='text-6xl md:text-8xl font-[Tangerine] font-normal text-center text-[#ffffff] py-8'>
            Villa le Corti
          </h1>
        </div>
        <div className='w-full flex flex-col justify-center items-center py-3 z-10'>
          <h3 className='text-2xl md:text-4xl font-[Lato] font-light text-center p-5 land:p-0 text-[#ADA08F] z-10'>
            San Casciano Val Di Pesa
          </h3>
          <p className='text-[Lato] text-xs md:text-sm text-[#2B1105] land:p-1 p-4 md:px-20 text-center z-10'>
            {t('villa')}
          </p>
          <p className='text-[Lato] land:hidden font-sm md:font-md text-[#2B1105] font-bold z-10'>
            {t('asp')}
          </p>
        </div>
      </section>
      <section className='h-screen w-full' id='section_6'>
        <div className='w-full h-full flex flex-col justify-start items-center'>
          <h1 className='land:text-5xl text-7xl md:text-9xl font-bold text-center text-[#6D8776] font-[Tangerine] mt-5 land:mt-12'>
            {t('partecipazione')}
          </h1>
          <div className='w-full lg:max-w-[40%] py-8 px-4 z-40 land:py-0 h-full'>
            <form
              className='py-4 land:py-0 space-y-2 w-4xl flex-col justify-evenly flex h-full'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-col items-start justify-center '>
                <label
                  htmlFor='name'
                  className='land:py-0 land:text-xs sm:text-md py-1 text-[#ADA08F] font-[Lato]'
                >
                  {t('guest')}
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type='text'
                  name='name'
                  id='name'
                  className='land:text-xs land:p-1 shadow-md focus:ring-[#E3AB8B] focus:border-[#E3AB8B] block w-full sm:text-md border-gray-300 '
                  placeholder={t('name')}
                />
              </div>
              <div className='flex flex-col items-start justify-center'>
                <label
                  htmlFor='name'
                  className='land:py-0 land:text-xs sm:text-md py-1 text-[#ADA08F] font-[Lato]'
                >
                  {t('guest2')}
                </label>
                <input
                  value={nametwo}
                  onChange={(e) => setNameTwo(e.target.value)}
                  type='text'
                  name='secondname'
                  id='secondname'
                  className='land:text-xs land:p-1 shadow-md focus:ring-[#E3AB8B] focus:border-[#E3AB8B] block w-full sm:text-md border-gray-300 '
                  placeholder={t('name')}
                />
              </div>
              <div className='flex flex-col items-start justify-center'>
                <label
                  htmlFor='message'
                  className='land:py-0 land:text-xs sm:text-md py-1 text-[#ADA08F] font-[Lato]'
                >
                  {t('allergy')}
                </label>
                <textarea
                  value={alle}
                  onChange={(e) => setAlle(e.target.value)}
                  name='allergie'
                  id='allergie'
                  className='land:text-xs land:p-1 shadow-md focus:ring-[#E3AB8B] focus:border-[#E3AB8B] block w-full sm:text-md border-gray-300 '
                  placeholder={t('note')}
                />
              </div>
              <div className='flex flex-col items-start justify-center'>
                <label
                  htmlFor='message'
                  className='land:text-xs land:py-0 sm:text-md py-1 text-[#ADA08F] font-[Lato]'
                >
                  {t('transport')}
                </label>
                <textarea
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  name='transport'
                  id='transport'
                  className='land:text-xs land:p-1 shadow-md focus:ring-[#E3AB8B] focus:border-[#E3AB8B] block w-full sm:text-md border-gray-300 '
                  placeholder={t('transplace')}
                />
              </div>
              <div className='flex flex-col land:flex-row items-center land:justify-evenly justify-center land:py-1 land:space-x-6 py-6'>
                <button
                  type='submit'
                  className='flex items-center justify-center land:w-[30%]'
                >
                  <div className=''>
                    {language === 'it' ? (
                      <Image
                        src={buttone_ita}
                        width={646}
                        height={214}
                        alt='Invia'
                      />
                    ) : (
                      <Image
                        src={buttone_eng}
                        width={646}
                        height={214}
                        alt='Send'
                      />
                    )}
                  </div>
                </button>
                <p className='italic text-sm text-start  text-[#ADA08F] font-[Lato]'>
                  {t('confirm2')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section
        className='h-screen w-full flex flex-col items-center justify-between'
        id='section_5'
      >
        <div className='w-full flex flex-col justify-between items-center z-40'>
          <p className='text-3xl md:text-4xl font-[Tangerine] font-normal text-center text-[##2B1105] pt-8 px-4'>
            {t('presenza')}
          </p>
          <p className='font-[Lato] text-md md:text-2xl text-[#6D8776] text-center py-8'>
            {t('iban')}
          </p>
        </div>
        <div className='w-full h-full z-50 '>
          <ImageSlider images={images} />
        </div>
        <footer className='flex flex-col items-center justify-center z-50'>
          <div className='font-[Lato] text-md flex flex-row items-center justify-center flex-nowrap p-2'>
            Made with ❤️ by
            <a
              href='https://raffaelli.studio/'
              target='_blank'
              rel='noreferrer'
            >
              Raffaelli.Studio
            </a>
          </div>
        </footer>
      </section>
    </main>
  )
}

export default Home
