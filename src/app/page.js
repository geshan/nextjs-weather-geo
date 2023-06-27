import Image from 'next/image';
import styles from './page.module.css';
import Script from 'next/script';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;


async function getWeatherData(city) {
  const res = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_NINJAS_API_KEY,
    },
  })
  const data = await res.json(); 
  data.city = city;
 
  return data;
}

export default async function Home(req) {
  const city = req.searchParams.city || 'London';
  const weatherData = await getWeatherData(city);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Current temprature in {weatherData.city} is 
          <code className={styles.code}> {weatherData.temp} C</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        
      </div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </main>
  )
}
