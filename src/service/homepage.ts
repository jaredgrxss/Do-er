import { Request, Response } from 'express'


// main homepage
const loadHomepage = (req: Request, res: Response) => {
    const context: Object = {
        name: "Jared",
        day: new Date().getDate()
    }
    res.render('homepage', context);
};

export { loadHomepage, }