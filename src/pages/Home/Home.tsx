import { FC, useState, useEffect } from "react";
import { Card, Grid } from "@mui/material";
import { DealsService } from "../../services/deals.service.ts";
import {IDeal} from "../../types/types.ts";
import style from './Home.module.css'
const Home: FC = () => {
    const [data, setData] = useState<IDeal[] | undefined>([]);

    const formatNumberWithSpaces = (number: number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    useEffect(() => {
        DealsService.getAllDeals().then((deals) => {
            deals && deals.sort((a, b) => a.id - b.id);
            setData(deals);
        });
    }, []);
    return (
        <div className={style.home}>
            <div className={style.backgroundImage}>
                <div className={style.content}>
                    <p className={style.heading}>
                        The chemical  negatively charged
                    </p>
                    <p className={`${style.subheading} ${style.changeFont}`}>
                        Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is
                    </p>
                    <button>Get Started</button>
                </div>
            </div>
            <h1 className={style.openDeals}>Open Deals</h1>
            <div className={style.deals}>
                <Grid container spacing={2} className={style.cardContainer}>
                    {data && data.map((item: IDeal) => (
                        <Grid key={item.id} item xs={12} sm={6}>
                            <Card className={style.card}>
                                <div className={style.cardImageContainer}>
                                    <div className={style.backgroundDealsImage} style={{ backgroundImage: `url(${item.img_src})` }}>
                                        <p className={style.cardName}>{item.name}</p>
                                        <div className={style.cardInfo}>
                                            <div>
                                                <p>{formatNumberWithSpaces(item.global_dhs)} Dhs</p>
                                                <p>Ticket - {formatNumberWithSpaces(item.tiket_dhs)} Dhs</p>
                                            </div>
                                            <div>
                                                <p>Yield {item.yield}%</p>
                                                <p>Days left {item.days_left}</p>
                                            </div>
                                            <p>Sold {item.sold}%</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </div>
    )
}

export default Home