const getNewsData = () => [
  {
    heading: 'Tirovo got a job !',
    body: "YES, AFTER MORE THAN 1 YEAR, THE DUDE GOT HIS JOB, WOOHOOO",
    Auther: 'Hicham/Gold'
  },
  {
      heading: 'Kezou is a geek',
      body: "For everyone that still don't know about it, kezou is a god damn geek yes",
      Auther: 'Gold',

  }  
]

const newsMiddleware = (req, res, next) => {
    if(!res.locals.partials) res.locals.partials = {}
    res.locals.partials.newsContext = getNewsData()
    next()
  }

module.exports = { newsMiddleware: newsMiddleware }