import {
    Router
} from "express";
import Request from "../../models/requests.js";
const router = Router();

// const mokeData = [
//     {
//         id: 1,
//         master_name: 'Oleg',
//         status: 'New',
//         time: Date.now(),
//     },
//     {
//         id: 2,
//         master_name: 'Valet',
//         status: 'New',
//         time: Date.now(),
//     },
//     {
//         id: 3,
//         master_name: 'Hozyain',
//         status: 'New',
//         time: Date.now(),
//     },
// ];

router.get("/", async (_, res) => {
 const requests = await Request.getAll();

 console.log(requests);
 res.json(requests);
});

export default router;