# PRIORA

_essentially an AI-powered product feedback prioritization engine. just enter ur raw, unclean, unstructured user feedback, support tickets, reviews, user interviews, slack threads and ts processes it into product decision based on highest priority_

<img width="1906" height="907" alt="priora" src="https://github.com/user-attachments/assets/8b5c1f8a-4741-46cb-bc23-218d14f7041f" />



## what ts does

you input raw text feedback and conversation threads in any basically any format, extracts the issues and it outputs prioritised issues with weight and grouped by urgency to fix them

## how ts was made

i used [Next.js](https://nextjs.org/) and [Typescript](https://www.typescriptlang.org/) for the app and the main arch, [Tailwind CSS](https://tailwindcss.com/) for the UI styling and the Gemini API to use AI to parse the completely unstructred data and turn it into product decisions based on severity and urgency, and deployed on [Vercel](vercel.com)


## how to run locally (check out [Priora](getpriora.xyz) to test it out online)

```bash
git clone https://github.com/yourusername/priora.git
cd priora
npm install
```

Create a `.env` file:

```env
GEMINI_API_KEY=your_api_key_here
```

Run the server:

```bash
npm run dev
```

and boom open [http://localhost:3000](http://localhost:3000) :D


## License

[MIT](https://github.com/SukhdevThukral/priora/blob/master/LICENSE)
