import React from "react";
import classes from "./BodyChart.module.css";
import { BsCalendar4 } from "react-icons/bs";
import { Line } from "react-chartjs-2";
import { 
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "Octomber", "November", "December"];
const option = {
    responsive: true,
}
const graphData = {
    labels,
    datasets: [
        {
            label: 'Average response Time',
            data:[
                0,
                12,
                15,
                25,
                30,
                35,
                40,
                50,
                45,
                29,
                39,
                27

            ],
            backgroundColor: "#FB6491",
            borderColor: "#FB6491"
        }
    ]
}

const BodyChart2 = ()=>{
    const data = [
        {
            "text": "Average resolution time",
            "time": "30 Mins"
        },
        {
            "text": "Response Time",
            "time": "1 Hour 30 Mins"
        }
    ]
    return (
        <>
            <div className={classes.BodyChart}>
                <div className={classes.Chart}>
                    <div className={classes.Chart_header}>
                        <div className={classes.chart_title}>
                            <h4>Replies per resolution </h4>
                            <p>+4.14% </p>
                        </div>
                        <div className={classes.chart_stat}>
                            <p></p>
                            <p>High Priority</p>
                            <div className={classes.line}>|</div>
                            <div className={classes.calendar}>
                                <h6>This Month</h6>
                                <p><BsCalendar4 /></p>
                            </div>
                        </div>
                    </div>
                    {/* the graph section */}
                    <div className={classes.Line_chart}>
                        <Line option={option} data={graphData} />
                    </div>
                </div>
                <div className={classes.BodyChart_sidebar}>
                    {
                        data.map(p=>(
                            <div className={classes.chart_side}>
                                <p>{p.text}</p> 
                                <h5>{p.time}</h5>
                            </div>
                        ) 
                        )
                    }
                </div>
            </div>
        </>
    );
}
export default BodyChart2;