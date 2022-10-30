import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-full w-full overflow-hidden">
      <Head>
        <title>Home | Personality Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center w-full flex-1 bg-gradient-to-r from-white via-purple-200 to-purple-200 overflow-hidden scroll-hidden h-full">
          <div className="flex flex-col justify-center w-full flex-1 md:px-20 lg:px-30 xl:px-40 2xl:px-60 xs:px-30 overflow-hidden scroll-hidden h-full">
            <h1 className="text-6xl font-bold sm:text-8xl xs:text-2xl text-purple-800">
              Personality Test
            </h1>
            <p className="mt-3 text-2xl break-words md:w-1/2 sm:text-3xl xs:w-full lg:w-3/4">
              Find out if you are an introvert or an extrovert, and learn how to improve your personality. our test is based on the Myers-Briggs Type Indicator (MBTI) test and above all, it's fun and easy to take.
            </p>
            <div className="flex justify-start md:w-1/2 sm:text-3xl xs:w-full lg:w-3/4 z-10">
              <Link href="/test" className="mt-5 text-2xl font-bold text-white bg-purple-600 rounded-md p-3 hover:bg-purple-700 cursor-pointer">
                  Take the test
              </Link>
            </div>
          </div>
          <div className='absolute bottom-0 w-full'>
            <svg className="w-full" viewBox="0 0 1440 320">
              <path fill="#6B46C1" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,170.7C672,181,768,171,864,170.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
    </div>
  )
}
