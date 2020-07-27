import {Route, Post, Body, Get} from "tsoa";
import {Axios} from "../services/bitcointoyou"; 
import { resolve } from "dns";
@Route("Bitcoin")
export class bitcoinController{
    @Get()
    async getCurrentPrice()
    {
    const axios = new Axios().getinstance();
    axios.get("/ticker?pair=BTC_BRLC")
        .then(price => {
            console.log(price)
            return (price)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
