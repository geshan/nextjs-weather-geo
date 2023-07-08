## Simple weather app with Next.js 13

This is a simple weather app built with Next.js 13 using JavaScript (not TypeScript).

### Run it locally

To run it locally you can clone the app and run `npm run dev`.

### Environment variables

It will need a key from [API Ninjas](https://api-ninjas.com/api) for the weather to work. You can get a free key from them.

You can also add a GA4 tracking ID to track the app. Both of these keys should be added
to the `.env` file you can copy the `.env.example` file to `.env` and add the keys there by replacing the values shown below:

```
API_NINJAS_API_KEY="API_NINJAS_API_KEY-value"
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-**--------"
```

### Deploy it to Vercel

You can deploy it to Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgeshan%2Fnextjs-weather-geo&env=API_NINJAS_API_KEY,NEXT_PUBLIC_GA_MEASUREMENT_ID&envDescription=The%20api%20key%20for%20API%20Ninjas%20and%20the%20GA4%20id%20to%20track%20user%20visits&demo-title=The%20Working%20app&demo-description=With%20Sydney%20sent%20in%20as%20the%20city%20to%20get%20the%20weather&demo-url=https%3A%2F%2Fnextjs-weather-geo.vercel.app%2F%3Fcity%3Dsydney&demo-image=https%3A%2F%2Fgcdnb.pbrd.co%2Fimages%2FeghahrNX2esF.jpg%3Fo%3D1)

### Demo

You can see the demo of the app at [https://nextjs-weather-geo.vercel.app/](https://nextjs-weather-geo.vercel.app/) and pass the city as the parameter like:

```
https://nextjs-weather-geo.vercel.app/?city=sydney
```

By default it will load the weather for London.

To test out rebase.
